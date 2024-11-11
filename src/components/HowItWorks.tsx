import React from 'react';
import { Search, ShoppingBag, CreditCard, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-indigo-600" />,
      title: 'Cari Barang',
      description: 'Temukan barang yang Anda inginkan atau hubungi jastip untuk mencarinya'
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-indigo-600" />,
      title: 'Pilih Jastip',
      description: 'Pilih jastip terpercaya dengan review terbaik'
    },
    {
      icon: <CreditCard className="h-12 w-12 text-indigo-600" />,
      title: 'Pembayaran',
      description: 'Lakukan pembayaran dengan aman melalui sistem escrow kami'
    },
    {
      icon: <Truck className="h-12 w-12 text-indigo-600" />,
      title: 'Pengiriman',
      description: 'Barang akan dikirim ke alamat Anda dengan aman'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Cara Kerja
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Proses mudah untuk mendapatkan barang impian Anda
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="flex justify-center">
                  <div className="bg-indigo-100 rounded-full p-4">
                    {step.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-indigo-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;