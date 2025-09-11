// Security utilities and configurations
export const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https:",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
};

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>\"']/g, '')
    .trim()
    .slice(0, 1000); // Limit length
};

// Rate limiting (client-side tracking)
export const rateLimiter = {
  attempts: new Map<string, number>(),
  
  canSubmit(identifier: string, maxAttempts = 5): boolean {
    const current = this.attempts.get(identifier) || 0;
    return current < maxAttempts;
  },
  
  recordAttempt(identifier: string): void {
    const current = this.attempts.get(identifier) || 0;
    this.attempts.set(identifier, current + 1);
    
    // Reset after 15 minutes
    setTimeout(() => {
      this.attempts.delete(identifier);
    }, 15 * 60 * 1000);
  }
};