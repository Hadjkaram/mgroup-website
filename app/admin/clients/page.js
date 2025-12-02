"use client";

import React from 'react';
import { Search, Mail, Phone, MoreHorizontal, Star, Shield } from 'lucide-react';

export default function ClientsPage() {
  const clients = [
    { id: 1, name: "Orange Côte d'Ivoire", contact: "M. Kouassi", email: "direction@orange.ci", phone: "+225 07 07 07 07", type: "Entreprise", totalSpent: "15.000.000", status: "VIP" },
    { id: 2, name: "Mme Sarah Touré", contact: "Elle-même", email: "sarah.t@gmail.com", phone: "+225 01 02 03 04", type: "Particulier", totalSpent: "800.000", status: "Actif" },
    { id: 3, name: "Agence Voodoo", contact: "Fabrice Sawegnon", email: "contact@voodoo.ci", phone: "+225 05 05 05 05", type: "Partenaire", totalSpent: "42.500.000", status: "VIP" },
    { id: 4, name: "Jean-Marc Yacé", contact: "Mairie Cocody", email: "maire@cocody.ci", phone: "+225 01 40 40 40", type: "Institution", totalSpent: "5.000.000", status: "Actif" },
  ];

  return (
    <div className="space-y-6">
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Fichier Clients</h1>
          <p className="text-gray-500 text-sm">Gérez votre base de données et identifiez vos clients VIP.</p>
        </div>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium">Exporter CSV</button>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 font-medium">+ Nouveau Client</button>
        </div>
      </div>

      {/* BARRE RECHERCHE */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4">
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Rechercher par nom, téléphone ou email..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
      </div>

      {/* TABLEAU CLIENTS */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-xs uppercase font-semibold text-gray-500">
                <tr>
                    <th className="p-4">Client / Société</th>
                    <th className="p-4">Contact</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Chiffre d'Affaires</th>
                    <th className="p-4">Statut</th>
                    <th className="p-4 text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {clients.map((client) => (
                    <tr key={client.id} className="hover:bg-gray-50 transition-colors group">
                        <td className="p-4">
                            <p className="font-bold text-gray-800">{client.name}</p>
                            <p className="text-xs text-gray-400">{client.contact}</p>
                        </td>
                        <td className="p-4">
                            <div className="flex flex-col gap-1">
                                <span className="flex items-center gap-2 text-xs"><Mail size={12}/> {client.email}</span>
                                <span className="flex items-center gap-2 text-xs"><Phone size={12}/> {client.phone}</span>
                            </div>
                        </td>
                        <td className="p-4">
                            <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">{client.type}</span>
                        </td>
                        <td className="p-4 font-bold text-gray-900">{client.totalSpent} FCFA</td>
                        <td className="p-4">
                            {client.status === 'VIP' ? (
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold border border-yellow-200">
                                    <Star size={12} fill="currentColor" /> VIP
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                                    <Shield size={12} /> Actif
                                </span>
                            )}
                        </td>
                        <td className="p-4 text-right">
                            <button className="p-2 hover:bg-gray-200 rounded-full text-gray-400 hover:text-black">
                                <MoreHorizontal size={18} />
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