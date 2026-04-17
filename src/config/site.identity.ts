export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'nn2acs9ns4',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Zorvixy',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Independent media updates',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A simple newsroom-style publication for announcements, coverage, and media updates on Zorvixy.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'zorvixy.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://zorvixy.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
