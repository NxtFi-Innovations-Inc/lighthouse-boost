import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  structuredData?: object;
}

export const SEO = ({
  title = "NxtFi - Accept Crypto, Receive Fiat Instantly",
  description = "Transform your business with NxtFi's seamless crypto-to-fiat payment platform. Accept Bitcoin, Ethereum, and other cryptocurrencies while receiving stable fiat currency in your bank account.",
  keywords = "crypto payments, bitcoin, ethereum, fiat conversion, payment processing, blockchain, cryptocurrency, fintech",
  image = "https://www.nxtfi.xyz/assets/images/hero-image.webp",
  url = "https://www.nxtfi.xyz",
  type = "website",
  structuredData
}: SEOProps) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NxtFi",
    "description": description,
    "url": url,
    "logo": "https://www.nxtfi.xyz/logo.png",
    "sameAs": [
      "https://twitter.com/nxtfi",
      "https://linkedin.com/company/nxtfi"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "service": {
      "@type": "Service",
      "name": "Crypto to Fiat Payment Processing",
      "description": "Accept cryptocurrency payments and receive fiat currency deposits",
      "provider": {
        "@type": "Organization",
        "name": "NxtFi"
      }
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="NxtFi" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@nxtfi" />

      {/* Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* PWA */}
      <meta name="theme-color" content="#FF6B35" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <link rel="manifest" href="/manifest.json" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};