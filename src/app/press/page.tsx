'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, Calendar, Tag, FileText, ArrowRight, X } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'

// Mock Release Media data
const mockPressReleases = [
  {
    id: '1',
    title: 'Zorvixy Launches Revolutionary Media Distribution Platform',
    summary: 'Breaking new ground in Release Media distribution with AI-powered targeting and real-time analytics.',
    category: 'Company News',
    date: '2024-01-15',
    author: 'Sarah Johnson',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Launch', 'AI', 'Innovation'],
    readTime: '3 min read'
  },
  {
    id: '2',
    title: 'Partnership with Global News Networks Expands Reach to 150+ Countries',
    summary: 'Strategic alliances with major international media outlets enhance global distribution capabilities.',
    category: 'Partnerships',
    date: '2024-01-12',
    author: 'Michael Chen',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Partnership', 'Global', 'Expansion'],
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'New Analytics Dashboard Provides Real-Time Media Insights',
    summary: 'Advanced analytics platform gives instant visibility into Release Media performance and media engagement.',
    category: 'Product Updates',
    date: '2024-01-10',
    author: 'Emily Rodriguez',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Analytics', 'Dashboard', 'Insights'],
    readTime: '2 min read'
  },
  {
    id: '4',
    title: 'Zorvixy Named Top Media Distribution Platform of 2024',
    summary: 'Industry recognition highlights superior performance and customer satisfaction in media distribution.',
    category: 'Awards',
    date: '2024-01-08',
    author: 'David Kim',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Award', 'Recognition', '2024'],
    readTime: '3 min read'
  },
  {
    id: '5',
    title: 'Sustainable Media Distribution: Our Commitment to Green Practices',
    summary: 'Implementing eco-friendly solutions in digital media distribution to reduce carbon footprint.',
    category: 'Sustainability',
    date: '2024-01-05',
    author: 'Lisa Anderson',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Sustainability', 'Green', 'Environment'],
    readTime: '5 min read'
  },
  {
    id: '6',
    title: 'Mobile App Launch: Manage Release Media On-the-Go',
    summary: 'New mobile application enables seamless Release Media management from anywhere, anytime.',
    category: 'Product Updates',
    date: '2024-01-03',
    author: 'James Wilson',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Mobile', 'App', 'Convenience'],
    readTime: '3 min read'
  }
]

const categories = ['All', 'Company News', 'Partnerships', 'Product Updates', 'Awards', 'Sustainability']
const dateFilters = ['All Time', 'This Week', 'This Month', 'Last 3 Months', 'This Year']

export default function PressPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDateFilter, setSelectedDateFilter] = useState('All Time')
  const [showFilters, setShowFilters] = useState(false)

  const filteredReleases = mockPressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         release.summary.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || release.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="zorvixy-brand-body zorvixy-font min-h-screen">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Release Media
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl lg:text-2xl text-white/90">
              Latest news and announcements from Zorvixy
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted" />
              <input
                type="text"
                placeholder="Search Release Media..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-primary/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Filter className="h-4 w-4" />
              Filters
              {showFilters && <X className="h-4 w-4" />}
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 p-6 bg-white rounded-xl border border-primary/10">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Category Filter */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    Category
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`filter-chip ${selectedCategory === category ? 'active' : ''}`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Filter */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Date Range
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {dateFilters.map((dateFilter) => (
                      <button
                        key={dateFilter}
                        onClick={() => setSelectedDateFilter(dateFilter)}
                        className={`filter-chip ${selectedDateFilter === dateFilter ? 'active' : ''}`}
                      >
                        {dateFilter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-muted">
              Showing {filteredReleases.length} of {mockPressReleases.length} Release Media
            </p>
            <Link
              href="/create/media-distribution"
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              Submit Release Media
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Release Media Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredReleases.length > 0 ? (
            <div className="news-grid">
              {filteredReleases.map((release) => (
                <Link
                  key={release.id}
                  href={`/press/${release.id}`}
                  className="news-item group"
                >
                  {release.image && (
                    <div className="relative h-48 overflow-hidden">
                      <ContentImage src={release.image} alt={release.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                  <div className="news-item-content">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="zorvixy-accent text-xs font-semibold uppercase tracking-wider">
                        {release.category}
                      </span>
                      <span className="text-xs text-muted">•</span>
                      <span className="text-xs text-muted">{release.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-3 mb-3">
                      {release.summary}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>{release.author} • {release.date}</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                    {release.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {release.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/5 text-primary px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-muted mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Release Media found</h3>
              <p className="text-muted mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                  setSelectedDateFilter('All Time')
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Have News to Share?</h2>
          <p className="mt-4 text-lg text-muted">
            Distribute your Release Media to thousands of media outlets worldwide
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/create/media-distribution"
              className="btn-primary inline-flex items-center justify-center px-8 py-3 text-base font-semibold"
            >
              Submit Your Release Media
              <ArrowRight className="ml-2 h-5 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

