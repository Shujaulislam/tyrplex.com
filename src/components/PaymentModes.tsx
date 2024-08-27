const paymentModes = [
    'Deposit to Account',
    'Net Banking',
    'Credit Card/Debit Card',
    'UPI',
    'Wallets (PayTM/Phone Pe/Amazon etc.)',
  ];
  
  function PaymentModes() {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Payment Mode</h2>
        <ul className="grid grid-cols-2 gap-2">
          {paymentModes.map((mode) => (
            <li key={mode} className="flex items-center text-gray-800 dark:text-gray-200">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              {mode}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default PaymentModes