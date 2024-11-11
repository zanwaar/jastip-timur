import React from 'react';
import { Shield, Navigation, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Terpercaya',
      description: 'Semua jastip telah terverifikasi dan memiliki track record yang baik'
    },
    {
      icon: <Navigation className="h-8 w-8 text-indigo-600" />,
      title: 'Pengiriman Cepat',
      description: 'Sistem pengiriman yang efisien ke seluruh wilayah Indonesia Timur'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: 'Harga Transparan',
      description: 'Biaya jasa dan ongkos kirim yang jelas dan kompetitif'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Mengapa Memilih JastipTimur?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Platform jasa titip terpercaya untuk wilayah Indonesia Timur
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;