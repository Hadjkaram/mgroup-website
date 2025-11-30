import React from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Colonne 1 : Logo & Info */}
        <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">MGROUP<span className="text-purple-500">.</span></h2>
            <p className="text-gray-400 max-w-sm mb-6">
                L'agence leader en technologie événementielle en Côte d'Ivoire.
                Nous louons l'excellence, nous créons l'inoubliable.
            </p>
            <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-purple-600 transition-colors text-white"><Instagram size={20} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition-colors text-white"><Facebook size={20} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-700 transition-colors text-white"><Linkedin size={20} /></a>
            </div>
        </div>

        {/* Colonne 2 : Liens Rapides */}
        <div>
            <h3 className="text-white font-bold mb-6">Navigation</h3>
            <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">L'Agence</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Notre Matériel</a></li>
                <li><a href="#future" className="hover:text-white transition-colors">Billetterie <span className="text-xs text-purple-400 ml-1">2026</span></a></li>
                <li><a href="#" className="hover:text-white transition-colors">Devenir Partenaire</a></li>
            </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                    <MapPin className="text-orange-500 shrink-0" size={20} />
                    <span>Cocody, Abidjan<br/>Côte d'Ivoire</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="text-orange-500 shrink-0" size={20} />
                    <span>+225 07 XX XX XX XX</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="text-orange-500 shrink-0" size={20} />
                    <span>contact@mgroup.ci</span>
                </li>
            </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; 2025 MGROUP. Tous droits réservés. Design by MGROUP Digital.</p>
      </div>
    </footer>
  );
};

export default Footer;