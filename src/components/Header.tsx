'use client'

import React, { useState, useEffect } from 'react'
import NavbarDemo from './example/navbar-menu-demo'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

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

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-white dark:bg-black py-5">
        <NavbarDemo />
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
            <button className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
              Login
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header