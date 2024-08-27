const deals = [
  { name: 'MRF', image: 'MRF-logo.png' },
  { name: 'CEAT', image: 'CEAT-logo.png' },
  { name: 'Goodyear', image: 'Goodyear-logo.png' },
  { name: 'Apollo', image: 'Apollo-logo.png' },
  { name: 'Bridgestone', image: 'Bridgestone-logo.png' },
  { name: 'JK Tyre', image: 'JK-Tyre-logo.png' },
  { name: 'Michelin', image: 'Michelin-logo.png' },
  { name: 'Pirelli', image: 'Pirelli-logo.png' },
  { name: 'Yokohama', image: 'Yokohama-logo.png' },
  { name: 'TVS Eurogrip', image: 'TVS-Eurogrip-logo.png' },
  { name: 'Continental', image: 'Continental-logo.png' },
  { name: 'Hankook', image: 'Hankook-logo.png' },
  { name: 'Ralco', image: 'Ralco-logo.png' },
  { name: 'Maxxis', image: 'Maxxis-logo.png' },
  { name: 'Metro', image: 'Metro-logo.png' },
  { name: 'Firestone', image: 'Firestone-logo.png' },
  { name: 'Falken', image: 'Falken-logo.png' },
  { name: 'RALSON', image: 'RALSON-logo.png' },
  { name: 'Ultramile', image: 'Ultramile-logo.png' },
  { name: 'Birla', image: 'Birla-logo.png' },
  { name: 'Kenda', image: 'Kenda-logo.png' },
  { name: 'Metzeler', image: 'Metzeler-logo.png' },
  { name: 'Kumho', image: 'Kumho-logo.png' },
  { name: 'Nexen', image: 'Nexen-logo.png' },
  { name: 'Vredestein', image: 'Vredestein-logo.png' },
  { name: 'MRL', image: 'MRL-logo.png' },
  { name: 'Maruti', image: 'Maruti-logo.png' },
  { name: 'LINGLONG', image: 'LINGLONG-logo.png' },
  { name: 'Mirage', image: 'Mirage-logo.png' },
  { name: 'DURATURN', image: 'DURATURN-logo.png' },
  { name: 'DUNLOP', image: 'DUNLOP-logo.png' },
  { name: 'JINYU', image: 'JINYU-logo.png' },
  { name: 'SAILUN', image: 'SAILUN-logo.png' },
  { name: 'LandSail', image: 'LandSail-logo.png' },
  { name: 'BEDROCK', image: 'BEDROCK-logo.png' },
  { name: 'Kelly', image: 'Kelly-logo.png' }
];


export default function Deals() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Deals in</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 no-scroll">
        {deals.map((deal) => (
          <div key={deal.name} className="flex-shrink-0 bg-gray-200 dark:bg-gray-700 rounded-lg p-4 w-32 h-32 flex items-center justify-center transition-transform transform hover:scale-105">
            {/* <img src={deal.image} alt={deal.name} className="w-20 h-20 object-cover rounded-full mb-2 shadow-md" /> */}
            <span className="text-center font-semibold text-gray-900 dark:text-white">{deal.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}