import { FaStar, FaCheckCircle, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function CompanyDetails() {
  const rating = 4.5;
  const photos = [
    'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300',
    'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300',
    'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300',
    'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300',
    'https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300',
  ];
  const reviews = [
    { id: 1, name: 'Md Nasir', content: 'Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service. We were delighted with your courteous, prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate.', rating: 2.5 },
    { id: 2, name: 'Rohit Bhati', content: 'Very fair. Tyre change. Ultimate service by shoppe guys. Owner behavior very cool. Quote as per in budget. Highly recommend.', rating: 5 },
    { id: 3, name: 'Pradeep Kumar', content: 'Best tyre shop in vaishali area. Good dealing with customer. All tyres type available here. Price also reasonable. Overall good experience.', rating: 4  },
    { id: 4, name: 'Pardeep Kumar', content: 'Best shopee in indirapuram. Good customer service. After sale service amazing. Overall nice experience.', rating: 3 },
    { id: 5, name: 'Pardeep Kumar', content: 'Best shopee in indirapuram. Good customer service. After sale service amazing. Overall nice experience.', rating: 3 },
    { id: 6, name: 'Pardeep Kumar', content: 'Best shopee in indirapuram. Good customer service. After sale service amazing. Overall nice experience.', rating: 3 },
    { id: 7, name: 'Pardeep Kumar', content: 'Best shopee in indirapuram. Good customer service. After sale service amazing. Overall nice experience.', rating: 3 },
  ];

  const [, setCurrentReview] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mx-auto dark:bg-gray-800">
      <div className="flex flex-col place-content-between md:flex-row">
        <div className="md:w-3/5 w-full mb-4 md:mb-0">
          <div className="flex items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800 mr-2 dark:text-white">
              SHREE HEMKUNT TYRES AND SERVICES
            </h1>
            <FaCheckCircle className="text-blue-500 text-2xl" title="Verified" />
          </div>
          <div className="flex items-center mb-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm mr-3 font-semibold dark:bg-green-600">
              {rating.toFixed(1)}
            </span>
            <div className="flex mr-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} text-xl`}
                />
              ))}
            </div>
            <span className="text-gray-600 font-medium dark:text-gray-300">2278 Reviews</span>
          </div>
          <div className="space-y-3 mb-6">
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              PLOT NUMBER-03 GROUND FLOOR OFF CAMPUS ROAD, AWADHPURI PHASE-02 INDRAPURAM, Ghaziabad, Uttar Pradesh 201014
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <FaClock className="mr-2 text-blue-500" />
              Open - Monday to Sunday : 10:00AM to 8:00PM
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400">
              <FaPhone className="mr-2 text-green-500" />
              +91 1234567890
            </p>
          </div>
          <button className="bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition flex items-center justify-center w-auto dark:bg-cyan-600 dark:hover:bg-cyan-700">
            <span className="mr-2">Get Directions</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="md:w-1/3 w-full">
          <h2 className="text-xl font-semibold mb-4 dark:text-white">Photos</h2>
          <div className="flex gap-2 h-48">
            <Image
              src={photos[0]}
              alt="Company photo 1"
              width={300}
              height={200}
              className="w-3/4 h-full object-cover rounded-lg cursor-pointer transition transform hover:scale-105"
              onClick={() => setSelectedPhoto(photos[0])}
            />
            <div className="w-1/4 h-full relative">
              <Image
                src={photos[1]}
                alt="Company photo 2"
                width={100}
                height={200}
                className="w-full h-full object-cover rounded-lg cursor-pointer transition transform hover:scale-105"
                onClick={() => setSelectedPhoto(photos[1])}
              />
              {photos.length > 2 && (
                <div 
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg cursor-pointer"
                  onClick={() => setSelectedPhoto(photos[2])}
                >
                  <span className="text-white text-xl font-bold">+{photos.length - 2} more</span>
                </div>
              )}
            </div>
          </div>
          {selectedPhoto && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedPhoto(null)}>
              <Image src={selectedPhoto} alt="Selected photo" layout="fill" objectFit="contain" />
            </div>
          )}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
        <div className="overflow-x-auto no-scroll">
          <div className="flex space-x-4 pb-4">
            {reviews.map((review) => (
              <div key={review.id} className="border border-gray-300 rounded-lg p-4 bg-white max-w-xs shadow-md flex-shrink-0 dark:bg-gray-700 dark:border-gray-600">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold dark:text-white">{review.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2 days ago</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3 dark:text-gray-300">{review.content}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${i < Math.floor(review.rating) ? 'text-yellow-400' : 'text-gray-300'} text-xl`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}