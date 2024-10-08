"use client"

import Image from 'next/image';

const services = [
    { name: 'Wheel Balancing', image: '/wheel-balancing.jpg' },
    { name: 'Wheel Alignment', image: '/wheel-alignment.jpg' },
  ];
  
  export default function Services() {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Services offered by this dealer</h2>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <div key={service.name} className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center">
              <Image 
                src={service.image} 
                alt={service.name} 
                width={96} 
                height={96} 
                className="object-cover rounded-full mb-2" 
              />
              <span className="font-medium text-gray-900 dark:text-white">{service.name}</span>
              <button className="bg-red-500 dark:bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-600 dark:hover:bg-red-700 transition flex items-center justify-center w-full md:w-auto">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }