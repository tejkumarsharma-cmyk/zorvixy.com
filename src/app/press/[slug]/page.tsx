import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, User, Share2, Facebook, Twitter, Linkedin, Mail, FileText, Clock, Tag } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { notFound } from 'next/navigation'

// Mock press release data - in a real app this would come from a database or CMS
const pressReleases = {
  'zorvixy-launches-revolutionary-media-distribution-platform': {
    id: '1',
    title: 'Zorvixy Launches Revolutionary Media Distribution Platform',
    subtitle: 'AI-powered targeting and real-time analytics transform how companies share their news with the world',
    content: `
      <p>Zorvixy today announced the launch of its groundbreaking media distribution platform, designed to revolutionize how companies distribute press releases and connect with media outlets worldwide. The new platform leverages artificial intelligence to provide precise targeting and real-time analytics, ensuring maximum impact for every press release.</p>
      
      <p>The platform addresses long-standing challenges in media distribution, including inefficient targeting, lack of measurable results, and time-consuming manual processes. With Zorvixy's AI-powered system, companies can now reach the most relevant journalists and publications for their industry, location, and target audience.</p>
      
      <blockquote>"We're transforming the way companies think about press release distribution," said Sarah Johnson, CEO of Zorvixy. "Our platform doesn't just send press releases—it ensures they reach the right people, at the right time, with measurable results that demonstrate real value."</blockquote>
      
      <p>Key features of the Zorvixy platform include:</p>
      <ul>
        <li><strong>AI-Powered Targeting:</strong> Machine learning algorithms identify the most relevant media contacts based on industry, location, and coverage history</li>
        <li><strong>Real-Time Analytics:</strong> Live dashboard shows impressions, engagement, and media pickups as they happen</li>
        <li><strong>Global Distribution Network:</strong> Access to over 50,000 media outlets across 150+ countries</li>
        <li><strong>Multimedia Support:</strong> Rich media integration including images, videos, and interactive content</li>
        <li><strong>SEO Optimization:</strong> Automatic optimization for search engines to increase organic visibility</li>
      </ul>
      
      <p>Early beta testers have reported impressive results, with an average 300% increase in media pickups and 450% improvement in engagement rates compared to traditional distribution methods.</p>
      
      <p>Zorvixy is now accepting new customers with flexible pricing plans designed to accommodate businesses of all sizes, from startups to enterprise corporations. The platform offers a 14-day free trial for new users to experience its capabilities firsthand.</p>
    `,
    category: 'Company News',
    date: 'January 15, 2024',
    author: 'Sarah Johnson',
    authorTitle: 'CEO',
    featuredImage: '/placeholder.svg?height=600&width=1200',
    tags: ['Launch', 'AI', 'Innovation', 'Platform'],
    readTime: '5 min read',
    relatedArticles: [
      {
        id: '2',
        title: 'Partnership with Global News Networks Expands Reach to 150+ Countries',
        summary: 'Strategic alliances enhance global distribution capabilities',
        date: 'January 12, 2024',
        image: '/placeholder.svg?height=200&width=300'
      },
      {
        id: '3',
        title: 'New Analytics Dashboard Provides Real-Time Media Insights',
        summary: 'Advanced analytics platform gives instant visibility into performance',
        date: 'January 10, 2024',
        image: '/placeholder.svg?height=200&width=300'
      }
    ]
  },
  'partnership-global-news-networks-expands-reach': {
    id: '2',
    title: 'Partnership with Global News Networks Expands Reach to 150+ Countries',
    subtitle: 'Strategic alliances with major international media outlets enhance global distribution capabilities',
    content: `
      <p>Zorvixy today announced strategic partnerships with leading global news networks, significantly expanding its media distribution reach to over 150 countries worldwide. These partnerships represent a major milestone in the company's mission to provide comprehensive global media distribution services.</p>
      
      <p>The new partnerships include alliances with major wire services, regional news networks, and specialized industry publications across North America, Europe, Asia-Pacific, and emerging markets. This expansion ensures that Zorvixy clients can reach their target audiences regardless of geographic location.</p>
      
      <blockquote>"These partnerships transform our ability to deliver truly global media distribution," said Michael Chen, Head of Strategic Partnerships at Zorvixy. "Our clients can now reach audiences in markets that were previously difficult to access, with the same level of precision and analytics they expect from our platform."</blockquote>
      
      <p>Key benefits of the expanded network include:</p>
      <ul>
        <li>Direct access to 50,000+ media outlets in 150+ countries</li>
        <li>Localized distribution with language-specific targeting</li>
        <li>Enhanced analytics with regional performance breakdowns</li>
        <li>Priority placement with partner publications</li>
        <li>24/7 global distribution support</li>
      </ul>
      
      <p>The partnerships have already shown promising results, with early clients reporting 200% increase in international media coverage and significant improvements in global brand awareness.</p>
    `,
    category: 'Partnerships',
    date: 'January 12, 2024',
    author: 'Michael Chen',
    authorTitle: 'Head of Strategic Partnerships',
    featuredImage: '/placeholder.svg?height=600&width=1200',
    tags: ['Partnership', 'Global', 'Expansion', 'Network'],
    readTime: '4 min read',
    relatedArticles: [
      {
        id: '1',
        title: 'Zorvixy Launches Revolutionary Media Distribution Platform',
        summary: 'AI-powered targeting and real-time analytics transform press distribution',
        date: 'January 15, 2024',
        image: '/placeholder.svg?height=200&width=300'
      },
      {
        id: '4',
        title: 'Zorvixy Named Top Media Distribution Platform of 2024',
        summary: 'Industry recognition highlights superior performance',
        date: 'January 8, 2024',
        image: '/placeholder.svg?height=200&width=300'
      }
    ]
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const release = pressReleases[params.slug as keyof typeof pressReleases]
  
  if (!release) {
    return {
      title: 'Press Release Not Found',
      description: 'The requested press release could not be found.',
    }
  }

  return {
    title: `${release.title} - Zorvixy`,
    description: release.subtitle,
    openGraph: {
      title: release.title,
      description: release.subtitle,
      images: release.featuredImage ? [release.featuredImage] : [],
    },
    keywords: release.tags,
  }
}

export default function PressReleasePage({ params }: PageProps) {
  const release = pressReleases[params.slug as keyof typeof pressReleases]

  if (!release) {
    notFound()
  }

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const text = `${release.title} - ${release.subtitle}`
    
    let shareUrl = ''
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(release.title)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`
        break
    }
    
    if (shareUrl && typeof window !== 'undefined') {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  return (
    <div className="zorvixy-brand-body zorvixy-font min-h-screen bg-white">
      <NavbarShell />
      
      {/* Breadcrumb */}
      <section className="py-6">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/press" className="hover:text-primary transition-colors">
              Press Releases
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{release.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="zorvixy-accent inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]">
              <FileText className="h-3.5 w-3.5" />
              {release.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {release.title}
            </h1>
            <p className="mt-4 text-xl text-muted max-w-3xl mx-auto">
              {release.subtitle}
            </p>
          </div>

          {/* Featured Image */}
          {release.featuredImage && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-8">
              <ContentImage src={release.featuredImage} alt={release.title} fill className="object-cover" />
            </div>
          )}

          {/* Article Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-primary/20">
            <div className="flex items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{release.author}</span>
                {release.authorTitle && <span className="text-xs">({release.authorTitle})</span>}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{release.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{release.readTime}</span>
              </div>
            </div>
            
            {/* Social Share */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted">Share:</span>
              <div className="social-share">
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleShare('email')}
                  className="p-2"
                  aria-label="Share via Email"
                >
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none article-content"
            dangerouslySetInnerHTML={{ __html: release.content }}
          />
          
          {/* Tags */}
          {release.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-primary/20">
              <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {release.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="zorvixy-accent text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Articles */}
      {release.relatedArticles.length > 0 && (
        <section className="py-16 bg-white/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Related Press Releases</h2>
              <p className="mt-4 text-lg text-muted">Explore more announcements from Zorvixy</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {release.relatedArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/press/${article.id}`}
                  className="news-item group"
                >
                  {article.image && (
                    <div className="relative h-48 overflow-hidden">
                      <ContentImage src={article.image} alt={article.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="news-item-content">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-muted">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Share Your News?</h2>
          <p className="mt-4 text-lg text-muted">
            Join thousands of companies using Zorvixy for professional media distribution
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/create/media-distribution"
              className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base font-semibold"
            >
              Submit Your Press Release
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Press Releases
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
