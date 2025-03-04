import Link from "next/link"
import { ArrowRight, Circle } from "lucide-react"
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 border-b">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Circle />
          Saint(czh) PDF.ai
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/pricing" className="text-sm font-bold hover:text-gray-600">
            Pricing
          </Link>
          <Link href="/" className="text-sm font-bold hover:text-gray-600">
            Chrome extension
          </Link>
          <Link href="/" className="text-sm font-bold hover:text-gray-600">
            Use cases
          </Link>
          <div className="flex items-center rounded-full px-2 py-1 gap-2">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#ed4c5c" /><path fill="#ffe62e" d="m22 28.4l8 5.6l-3-9.2l8-5.8h-9.9L22 10l-3 9H9l8 5.8l-3 9.2zm13.3 6.9l-2.3.5l2.2.9V39l1.5-1.7l2.2.8l-1.3-1.9l1.4-1.8l-2.3.5l-1.4-1.9zm3.4-6.8L37 30l2.3-.2l1 2.2l.4-2.3l2.3-.2l-2-1.2l.5-2.3l-1.7 1.5l-2-1.2zm.6-7.8L40 23l.7-2.2H43l-1.8-1.4l.7-2.3l-1.9 1.4l-1.8-1.5l.7 2.3l-1.9 1.3zm-4-8V15l1.4-1.9l2.3.5l-1.4-1.8l1.3-1.9l-2.2.9L35.2 9v2.3l-2.2.9z" /></svg>
            </span>
            <span className="text-sm font-bold">CN</span>
          </div>
          <Link
            href="/"
            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center"
          >
            Get started <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </nav>
        <Button className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="currentColor" />
          </svg>
        </Button>
      </div>
    </header>
  )
}

export default Header;

