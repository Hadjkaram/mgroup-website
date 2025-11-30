"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Icônes pour le menu mobile

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Pour gérer l'ouverture du menu mobile

  // Fonction pour fermer le menu quand on clique sur un lien (sur mobile)
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-black/80 backdrop-blur-md border-b border-white/5"
    >
      {/* LOGO */}
      <Link href="/">
        {/* On utilise une balise img standard pour conserver le ratio automatiquement */}
        <img 
          src="/logo-mgroup.png" 
          alt="MGROUP Logo" 
          className="h-12 md:h-16 w-auto object-contain hover:opacity-90 transition-opacity"
        />
      </Link>

      {/* Liens de navigation (Desktop) */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-gray-300">
        <Link href="/" className="hover:text-white hover:text-shadow-glow transition-all">Agence</Link>
        <Link href="#services" className="hover:text-white transition-all">Expertise</Link>
        <Link href="#services" className="hover:text-white transition-all">Matériel</Link>
        
        {/* Lien spécial Billetterie */}
        <Link href="#future" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 font-bold hover:brightness-125 transition-all">
          Billetterie 2026
        </Link>
      </div>

      {/* Bouton Contact (Desktop) */}
      <Link href="#contact">
        <button className="hidden md:block px-6 py-2 bg-white/5 border border-white/10 rounded-full text-white text-sm hover:bg-white hover:text-black transition-all duration-300">
            Contactez-nous
        </button>
      </Link>

      {/* Menu Mobile (Hamburger) */}
      <div className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Menu Mobile Déroulant (Simple) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-white/10 py-6 flex flex-col items-center gap-6 md:hidden">
            <Link href="/" onClick={handleLinkClick} className="text-white text-lg">Agence</Link>
            <Link href="#services" onClick={handleLinkClick} className="text-white text-lg">Expertise</Link>
            <Link href="#services" onClick={handleLinkClick} className="text-white text-lg">Matériel</Link>
            <Link href="#future" onClick={handleLinkClick} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 font-bold text-lg">
                Billetterie 2026
            </Link>
            <Link href="#contact" onClick={handleLinkClick} className="text-white text-lg border border-white/20 px-6 py-2 rounded-full mt-4">
                Contact
            </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;