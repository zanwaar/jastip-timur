import React, { useState } from 'react';
import { Menu, X, Package2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Package2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">JastipTimur</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600">Beranda</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Layanan</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Cara Kerja</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">Tentang Kami</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              Daftar/Masuk
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Beranda</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Layanan</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Cara Kerja</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Tentang Kami</a>
            <button className="w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Daftar/Masuk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;