"use client";
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const footerSections = [
    {
      title: 'Who We Are',
      links: ['Are you a Tyre Dealer?', 'About Us', 'Our Mission'],
      urls: ['#dealer', '#about', '#mission'],
    },
    {
      title: 'Privacy & Terms',
      links: ['Privacy Policy', 'Terms of Use', 'Cookie Policy'],
      urls: ['#privacy', '#terms', '#cookies'],
    },
    {
      title: 'Connect With Us',
      links: ['Contact Us', 'Career', 'Support'],
      urls: ['#contact', '#career', '#support'],
    },
    {
      title: 'Policies',
      links: ['Shipping Policy', 'Return Policy', 'Warranty Information'],
      urls: ['#shipping', '#returns', '#warranty'],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', url: '#facebook' },
    { name: 'Twitter', url: '#twitter' },
    { name: 'Instagram', url: '#instagram' },
    { name: 'LinkedIn', url: '#linkedin' },
  ];

  return (
    <footer className="bg-white text-black dark:bg-black dark:to-gray-800 dark:text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <Image
              src="/TP-logo-mbl.png"
              alt="TyrePlex Logo"
              width={150}
              height={50}
              className="mr-4 dark:invert"
            />
            <p className="text-gray-600 dark:text-gray-300 text-sm">Your Trusted Tyre Partner</p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-300 transition-colors duration-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4 fade-in">
              <h3 className="text-xl font-bold mb-4 border-b-2 border-teal-500 pb-2 inline-block dark:border-teal-400">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={link}>
                    <a href={section.urls[index]} className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center fade-in">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            ©2024 TyrePros Technologies & Commerce Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;