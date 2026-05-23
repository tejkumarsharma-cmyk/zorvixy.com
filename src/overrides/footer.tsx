import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

// Sync footer — safe to render from both Server and Client Component trees
export function FooterOverride() {
  return (
    <footer
      style={{
        borderTop: '1px solid #ede9f6',
        background: '#1a0533',
        color: '#ffffff',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid gap-10 py-14 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt={SITE_CONFIG.name}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-7" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#f59e0b' }}
            >
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: 'About Us',       href: '/about' },
                { label: 'Contact Us',     href: '/contact' },
                { label: 'Latest News',    href: '/updates' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-opacity hover:opacity-100"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#f59e0b' }}
            >
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: 'Release Media',        href: '/updates' },
                { label: 'Submit Release Media', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-opacity hover:opacity-100"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: '#f59e0b' }}
            >
              Legal
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-opacity hover:opacity-100"
                    style={{ color: 'rgba(255,255,255,0.65)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col items-center justify-between gap-3 border-t py-6 text-xs sm:flex-row"
          style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}
        >
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:opacity-80" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy</Link>
            <Link href="/terms"   className="hover:opacity-80" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms</Link>
            <Link href="/contact" className="hover:opacity-80" style={{ color: 'rgba(255,255,255,0.5)' }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
