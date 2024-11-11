import React from 'react';
import { Package2, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Package2 className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">JastipTimur</span>
            </div>
            <p className="mt-4 text-gray-400">
              Platform jasa titip terpercaya untuk wilayah Indonesia Timur
            </p>
            <div className="mt-6 flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold">Layanan</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Jasa Titip</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pengiriman</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Tracking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pembayaran</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold">Perusahaan</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Karir</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold">Bantuan</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pusat Bantuan</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © 2024 JastipTimur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;