"use client";

import React, { useState } from 'react';
import { Search, Filter, Plus, MoreVertical, AlertTriangle, BatteryCharging } from 'lucide-react';

export default function StockPage() {
  // Données simulées (Ce sera remplacé par Supabase plus tard)
  const inventory = [
    { id: 1, name: "Ecran LED P3 Indoor", category: "Vidéo", total: 50, inUse: 45, price: "25.000", status: "Critique" },
    { id: 2, name: "Micro Shure SM58", category: "Son", total: 20, inUse: 5, price: "5.000", status: "Dispo" },
    { id: 3, name: "Lyre Beam 7R", category: "Lumière", total: 40, inUse: 10, price: "15.000", status: "Maintenance" },
    { id: 4, name: "Console Yamaha CL5", category: "Son", total: 2, inUse: 0, price: "150.000", status: "Dispo" },
    { id: 5, name: "Podium 2x1m", category: "Structure", total: 100, inUse: 20, price: "10.000", status: "Dispo" },
  ];

  return (
    <div className="space-y-6">
      
      {/* EN-TÊTE AVEC ACTIONS */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Inventaire Matériel</h1>
          <p className="text-gray-500 text-sm">Gérez votre parc, les disponibilités et la maintenance.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          <Plus size={18} />
          <span>Ajouter Matériel</span>
        </button>
      </div>

      {/* BARRE DE RECHERCHE ET FILTRES */}
      <div className="flex gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
                type="text" 
                placeholder="Rechercher un équipement (ex: Micro, Ecran...)" 
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
            <Filter size={18} />
            <span>Filtres</span>
        </button>
      </div>

      {/* TABLEAU D'INVENTAIRE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-xs uppercase font-semibold text-gray-500">
                <tr>
                    <th className="p-4">Désignation</th>
                    <th className="p-4">Catégorie</th>
                    <th className="p-4 text-center">État Stock</th>
                    <th className="p-4">Prix / Jour</th>
                    <th className="p-4">Statut</th>
                    <th className="p-4 text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {inventory.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-bold text-gray-800">{item.name}</td>
                        <td className="p-4">
                            <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">{item.category}</span>
                        </td>
                        <td className="p-4 text-center">
                            <div className="flex flex-col items-center">
                                <span className="font-bold text-gray-800">{item.total - item.inUse} / {item.total}</span>
                                <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${((item.total - item.inUse)/item.total) < 0.2 ? 'bg-red-500' : 'bg-green-500'}`} 
                                        style={{ width: `${((item.total - item.inUse)/item.total) * 100}%` }}
                                    ></div>
                                </div>
                            </div>
                        </td>
                        <td className="p-4 font-medium">{item.price} FCFA</td>
                        <td className="p-4">
                            {item.status === 'Critique' && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600">
                                    <AlertTriangle size={12} /> Stock Bas
                                </span>
                            )}
                            {item.status === 'Dispo' && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-600">
                                    Disponible
                                </span>
                            )}
                            {item.status === 'Maintenance' && (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-600">
                                    <BatteryCharging size={12} /> Réparation
                                </span>
                            )}
                        </td>
                        <td className="p-4 text-right">
                            <button className="p-2 hover:bg-gray-200 rounded-full text-gray-400 hover:text-black">
                                <MoreVertical size={18} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}