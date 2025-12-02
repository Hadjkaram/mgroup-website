"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// On importe toutes les icônes nécessaires, y compris Calendar pour les Events
import { LayoutDashboard, Box, ShoppingCart, Users, Settings, LogOut, Calendar } from 'lucide-react';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Vue d\'ensemble', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Événements & Live', icon: <Calendar size={20} />, path: '/admin/events' }, // Le module Live
    { name: 'Gestion Stock', icon: <Box size={20} />, path: '/admin/stock' },
    { name: 'Commandes', icon: <ShoppingCart size={20} />, path: '/admin/orders' },
    { name: 'Clients', icon: <Users size={20} />, path: '/admin/clients' },
    { name: 'Configuration', icon: <Settings size={20} />, path: '/admin/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 text-black font-sans">
      {/* SIDEBAR (Menu Latéral) */}
      <aside className="w-64 bg-[#050505] text-white flex flex-col fixed h-full z-10">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
            {/* --- MODIFICATION ICI : VRAI LOGO --- */}
            <img 
              src="/logo-mgroup.png" 
              alt="MGROUP ERP" 
              className="h-8 w-auto object-contain" 
            />
            {/* Petit badge ERP à côté */}
            <span className="font-bold text-xl tracking-wider text-white">ERP</span>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <div className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${isActive ? 'bg-white/10 text-white border-l-4 border-orange-500' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
                  {item.icon}
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
            <button className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                <LogOut size={20} />
                <span className="font-medium text-sm">Déconnexion</span>
            </button>
        </div>
      </aside>

      {/* ZONE DE CONTENU PRINCIPALE */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}