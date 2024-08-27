import React from 'react';

const tyres = [
    { id: 1, name: 'AMAZER 4G LIFE', size: '145/80 R12', rating: 4.3, reviews: 520, price: 3136, warranty: '5 Year Warranty', type: 'Tube Type', image: 'tyre.png' },
    { id: 2, name: 'AMAZER 4G LIFE', size: '145/80 R11', rating: 4.3, reviews: 520, price: 3562, warranty: '5 Year Warranty', type: 'Tubeless', image: 'tyre.png' },
    { id: 3, name: 'AMAZER 4G LIFE', size: '155/65 R13', rating: 4.3, reviews: 520, price: 3401, warranty: '5 Year Warranty', type: 'Tube Type', image: 'tyre.png' },
    { id: 4, name: 'AMAZER 4G LIFE', size: '155/70 R13', rating: 4.3, reviews: 520, price: 3774, warranty: '5 Year Warranty', type: 'Tubeless', image: 'tyre.png' },
    { id: 5, name: 'AMAZER 4G LIFE', size: '165/70 R14', rating: 4.3, reviews: 520, price: 4618, warranty: '5 Year Warranty', type: 'Tube Type', image: 'tyre.png' },
    { id: 6, name: 'AMAZER 4G LIFE', size: '165/70 R13', rating: 4.3, reviews: 520, price: 4013, warranty: '5 Year Warranty', type: 'Tubeless', image: 'tyre.png' },
    { id: 7, name: 'AMAZER 4G LIFE', size: '155/65 R14', rating: 4.3, reviews: 520, price: 3628, warranty: '5 Year Warranty', type: 'Tube Type', image: 'tyre.png' },
    { id: 8, name: 'AMAZER 4G LIFE', size: '165/65 R13', rating: 4.3, reviews: 520, price: 3713, warranty: '5 Year Warranty', type: 'Tubeless', image: 'tyre.png' },
    { id: 9, name: 'AMAZER 5G LIFE', size: '175/65 R13', rating: 4.5, reviews: 250, price: 4102, warranty: '6 Year Warranty', type: 'Tubeless', image: 'tyre.png' },
  ];
  
  export default function TyresSold() {
    return (
      <div className="bg-gray-100 p-6 rounded-3xl shadow-lg dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Tyres Sold by This Dealer</h2>
        <div className="flex justify-between mb-4">
          <select className="bg-white border-none rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
            <option>Filter By</option>
          </select>
          <select className="bg-white border-none rounded-full px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
            <option>Most Popular</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tyres.map((tyre) => (
            <div key={tyre.id} className="bg-white rounded-3xl p-4 shadow-md overflow-hidden relative dark:bg-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl text-gray-800 dark:text-white">{tyre.name}</h3>
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">{tyre.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{tyre.size}</p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white mb-1">₹{tyre.price}</p>
                  <p className="text-sm text-green-600 dark:text-green-400 mb-2">Offer available</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-red-700 text-white text-xs font-medium px-2 py-1 rounded-full dark:bg-red-600 dark:text-white">
                      {tyre.warranty}
                    </span>
                    <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full dark:bg-gray-600 dark:text-gray-300">
                      {tyre.type}
                    </span>
                  </div>
                </div>
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition w-full mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Add to Cart
                </button> */}
              </div>
              <div className="absolute bottom-0 right-0 w-30 h-30 rounded-tr-3xl overflow-hidden">
                <img src={tyre.image} alt={tyre.name} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition dark:bg-gray-700 dark:text-blue-300 dark:hover:bg-gray-600">
            View more
          </button>
        </div>
      </div>
    );
  }