import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Jasa Titip Terpercaya</span>
            <span className="block text-indigo-200">untuk Indonesia Timur</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Hubungkan diri Anda dengan jastip terpercaya untuk mendapatkan barang impian Anda dari seluruh Indonesia
          </p>
          
          <div className="mt-10 max-w-xl mx-auto">
            <div className="flex items-center bg-white rounded-lg p-1 shadow-lg">
              <Search className="h-5 w-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Cari barang atau jasa titip..."
                className="w-full px-4 py-3 rounded-lg focus:outline-none"
              />
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
                Cari
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;