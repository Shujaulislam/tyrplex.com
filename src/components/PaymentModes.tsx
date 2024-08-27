import React from 'react';

const paymentModes = [
  'Deposit to Account',
  'Net Banking',
  'Credit Card/Debit Card',
  'UPI',
  'Wallets (PayTM/Phone Pe/Amazon etc.)',
];

function PaymentModes() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Payment Mode</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {paymentModes.map((mode) => (
          <li key={mode} className="flex items-center text-sm sm:text-base text-gray-800 dark:text-gray-200">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="break-words">{mode}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentModes;