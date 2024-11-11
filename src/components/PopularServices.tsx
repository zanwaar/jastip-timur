import React from 'react';

const PopularServices = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      title: "Fashion & Pakaian",
      location: "Jakarta",
      rating: 4.8,
      price: "Mulai Rp 50.000"
    },
    {
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      title: "Gadget & Elektronik",
      location: "Surabaya",
      rating: 4.9,
      price: "Mulai Rp 75.000"
    },
    {
      image: "https://images.unsplash.com/photo-1587304947504-55d1de99e0da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      title: "Kosmetik",
      location: "Bandung",
      rating: 4.7,
      price: "Mulai Rp 45.000"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Layanan Populer
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Jasa titip terpopuler dengan rating terbaik
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-gray-600">{service.location}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-600">{service.rating}</span>
                    </div>
                    <span className="text-indigo-600 font-semibold">{service.price}</span>
                  </div>
                  <button className="mt-6 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServices;