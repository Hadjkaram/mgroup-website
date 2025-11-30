"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* 1. Arrière-plan (Background) */}
      <div className="absolute inset-0 z-0">
        {/* Filtre noir plus puissant (bg-black/80) pour calmer l'image de fond */}
        <div className="absolute inset-0 bg-black/80 z-10" />
        <img 
            /* Assure-toi que cette URL d'image est correcte ou remets l'ancienne si besoin */
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" 
            alt="Event Background" 
            className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Contenu Texte */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-block px-4 py-1 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm"
        >
          <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">
            Leader Event Technology
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter"
        >
          L'EXCELLENCE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
            SCÉNIQUE.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          MGROUP transforme vos événements en Côte d'Ivoire. 
          Location de matériel haut de gamme, logistique de précision et 
          bientôt, une révolution digitale.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all w-full md:w-auto">
            Voir nos réalisations
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-md transition-all w-full md:w-auto">
            Découvrir le parc matériel
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>

    </section>
  );
};

export default Hero;