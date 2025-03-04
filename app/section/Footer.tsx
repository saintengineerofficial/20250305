import React from 'react'
import Link from "next/link"
import { SproutIcon, Circle, Youtube, Twitter, Instagram } from "lucide-react"

type Props = {}

const products = [
  { href: '#', name: 'Use cases' },
  { href: '#', name: 'Chrome extension' },
  { href: '#', name: 'API docs' },
  { href: '#', name: 'Pricing' },
  { href: '#', name: 'Video tutorials' },
  { href: '#', name: 'Resources' },
  { href: '#', name: 'Blog' },
  { href: '#', name: 'FAQ' },
]

const builds = [
  { href: '#', name: 'Resume AI Scanner' },
  { href: '#', name: 'Invoice AI Scanner' },
  { href: '#', name: 'AI Quiz Generator' },
  { href: '#', name: 'QuickyAI' },
  { href: '#', name: 'Doctrine' },
  { href: '#', name: 'PDF GPTs' },
  { href: '#', name: 'PDF AI generator' },
  { href: '#', name: 'Other PDF tools' },
]

const companys = [
  { href: '#', name: 'PDF.ai vs ChatPDF' },
  { href: '#', name: 'PDF.ai vs Acrobat Reader' },
  { href: '#', name: 'Legal' },
  { href: '#', name: 'Affiliate program' },
  { href: '#', name: 'Investor' },
]

const Footer = (props: Props) => {
  return (
    <footer className="w-full py-12 border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t py-20 px-15">

          <div className="space-y-4">
            <div className="flex items-center">
              <Circle className="h-8 w-8" />
            </div>
            <p className="text-gray-600 mt-4">
              Chat with any PDF: ask questions, get summaries, find information, and more.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" fill-rule="evenodd" d="M530.014 112.667c43.666-.667 86.997-.334 130.328-.667c2.667 51 21 102.999 58.33 138.998c37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333c-19-8.667-36.665-19.667-53.998-31c-.333 97.332.334 194.665-.666 291.663c-2.667 46.666-18 93-44.998 131.332c-43.665 64-119.328 105.665-196.992 106.999c-47.664 2.666-95.329-10.334-135.994-34.333c-67.33-39.666-114.662-112.332-121.661-190.331c-.667-16.667-1-33.333-.334-49.666c6-63.333 37.332-123.999 85.997-165.332c55.33-47.999 132.66-70.999 204.99-57.332c.667 49.333-1.332 98.665-1.332 147.998c-33-10.667-71.664-7.667-100.663 12.333c-20.999 13.667-36.998 34.666-45.331 58.333c-7 17-5 35.666-4.667 53.666c8 54.666 60.664 100.665 116.662 95.665c37.332-.333 72.997-22 92.33-53.666c6.332-11 13.332-22.333 13.665-35.333c3.334-59.666 2-118.998 2.334-178.664c.333-134.332-.334-268.33.666-402.328" /></svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Products</h3>
            <ul className="space-y-3">
              {products.map(product => (
                <li key={product.name}>
                  <Link href={product.href} className="text-gray-600 hover:text-gray-900 font-medium text-sm">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">We also built</h3>
            <ul className="space-y-3">
              {builds.map(build => (
                <li key={build.name}>
                  <Link href={build.href} className="text-gray-600 hover:text-gray-900 font-medium text-sm">
                    {build.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              {companys.map(company => (
                <li key={company.name}>
                  <Link href={company.href} className="text-gray-600 hover:text-gray-900 font-medium text-sm">
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer