"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black text-white w-full">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="w-6 h-6 mr-2">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="8" fill="none" />
                <path d="M50 10 L50 90" stroke="white" strokeWidth="8" />
              </svg>
            </div>
            <span className="text-lg font-medium">Linear</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/product" className="text-sm text-gray-300 hover:text-white transition-colors">
            Product
          </Link>
          <Link href="/resources" className="text-sm text-gray-300 hover:text-white transition-colors">
            Resources
          </Link>
          <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/customers" className="text-sm text-gray-300 hover:text-white transition-colors">
            Customers
          </Link>
          <Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="text-sm text-gray-300 hover:text-white transition-colors">
            Log in
          </Link>
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-200 rounded-md text-sm font-medium px-4 py-2 border-none"
          >
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/product" className="text-sm text-gray-300 hover:text-white transition-colors">
              Product
            </Link>
            <Link href="/resources" className="text-sm text-gray-300 hover:text-white transition-colors">
              Resources
            </Link>
            <Link href="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/customers" className="text-sm text-gray-300 hover:text-white transition-colors">
              Customers
            </Link>
            <Link href="/blog" className="text-sm text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-800">
              <Link href="/login" className="text-sm text-gray-300 hover:text-white transition-colors">
                Log in
              </Link>
              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-200 rounded-md text-sm font-medium px-4 py-2 border-none"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

