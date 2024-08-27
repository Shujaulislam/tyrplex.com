'use client'

import React, { useState, useEffect } from 'react'
import NavbarDemo from './example/navbar-menu-demo'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import SideNav from './SideNav'

function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlHeader)
    return () => window.removeEventListener('scroll', controlHeader)
  }, [lastScrollY])

  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen)

  return (
    <>
      <header className={`sticky top-0 left-0 right-0 z-40 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-white dark:bg-black py-5">
          <div className="hidden lg:block">
            <NavbarDemo />
          </div>
          <div className="flex justify-between items-center px-4 py-2">
            <div className="text-2xl font-bold">
              <Image
                src="/TP-logo-mbl.png"
                alt="logo"
                width={150}
                height={50}
                className="dark:invert"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={toggleSideNav} className="lg:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="hidden lg:flex items-center space-x-4">
                <button className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
                  Login
                </button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>
      <SideNav isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />
    </>
  )
}

export default Header