"use client"
import React from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

interface SideNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <nav className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-gray-800 p-6 overflow-y-auto">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="mt-8 space-y-4">
          <li><Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Bike tyres</Link></li>
          <li><Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Car tyres</Link></li>
          <li><Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Tyre pressure</Link></li>
          <li><Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Commercial tires</Link></li>
          <li><Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Accesories</Link></li>
          <li><Link href="#" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">More</Link></li>
        </ul>
        <div className="mt-8">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default SideNav;