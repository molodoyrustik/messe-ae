export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Messe.ae',
  alternateName: 'Messe Exhibition Services',
  url: 'https://messe.ae',
  logo: 'https://messe.ae/logo.png',
  description: 'Leading exhibition stand builder and designer in UAE. We create innovative exhibition stands, trade show displays, and event solutions worldwide.',
  foundingDate: '2004',
  founders: [
    {
      '@type': 'Person',
      name: 'Messe.ae Founders'
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+971-4-548-5887',
      contactType: 'sales',
      email: 'hello@messe.ae',
      areaServed: ['AE', 'SA', 'QA', 'KW', 'BH', 'OM'],
      availableLanguage: ['English', 'Arabic']
    }
  ],
  sameAs: [
    'https://www.facebook.com/messe.ae',
    'https://www.instagram.com/messe.ae',
    'https://www.linkedin.com/company/messe-ae',
    'https://wa.me/971545885887'
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'ExpoGlobal',
    url: 'https://www.expoglobal.com'
  }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Messe.ae',
  url: 'https://messe.ae',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://messe.ae/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Exhibition Stand Design & Construction',
  provider: {
    '@type': 'Organization',
    name: 'Messe.ae'
  },
  serviceType: 'Exhibition Services',
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide'
  },
  description: 'Professional exhibition stand design and construction services for trade shows and events worldwide.',
  offers: {
    '@type': 'Offer',
    priceRange: '$$$',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://messe.ae/contact',
      servicePhone: '+971-4-548-5887',
      availableLanguage: ['English', 'Arabic']
    }
  }
};

export function getArticleSchema(article: {
  title: string;
  description: string;
  image?: string;
  publishedDate: string;
  modifiedDate?: string;
  author?: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || 'https://messe.ae/default-article-image.jpg',
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Messe.ae',
      url: 'https://messe.ae'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Messe.ae',
      logo: {
        '@type': 'ImageObject',
        url: 'https://messe.ae/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://messe.ae/articles/${article.slug}`
    }
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}