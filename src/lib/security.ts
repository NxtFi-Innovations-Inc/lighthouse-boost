// Security utilities and CSP configuration

// Content Security Policy headers for enhanced security
export const securityHeaders = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self'",
    "connect-src 'self' https://api.nxtfi.xyz https://challenges.cloudflare.com",
    "frame-src https://challenges.cloudflare.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ].join('; '),
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
};

// Input sanitization for form data
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove inline event handlers
    .trim()
    .slice(0, 1000); // Limit input length
};

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Rate limiting helper (client-side tracking)
export const rateLimit = (() => {
  const attempts = new Map<string, number[]>();
  
  return (key: string, maxAttempts: number = 5, windowMs: number = 300000): boolean => {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    if (!attempts.has(key)) {
      attempts.set(key, []);
    }
    
    const keyAttempts = attempts.get(key)!;
    const recentAttempts = keyAttempts.filter(time => time > windowStart);
    
    if (recentAttempts.length >= maxAttempts) {
      return false;
    }
    
    recentAttempts.push(now);
    attempts.set(key, recentAttempts);
    return true;
  };
})();

// CSRF protection for forms
export const generateCSRFToken = (): string => {
  return crypto.randomUUID();
};

// Secure form submission helper
export const secureFormSubmit = async (
  formData: FormData,
  endpoint: string = "/",
  turnstileToken?: string
) => {
  // Add security headers
  const secureFormData = new FormData();
  
  // Copy and sanitize form data
  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') {
      secureFormData.append(key, sanitizeInput(value));
    } else {
      secureFormData.append(key, value);
    }
  }
  
  // Add Turnstile token if provided
  if (turnstileToken) {
    secureFormData.append('cf-turnstile-response', turnstileToken);
  }
  
  // Add timestamp for replay attack protection
  secureFormData.append('timestamp', Date.now().toString());
  
  return fetch(endpoint, {
    method: "POST",
    headers: { 
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Requested-With": "XMLHttpRequest" // CSRF protection
    },
    body: new URLSearchParams(secureFormData as any).toString(),
  });
};