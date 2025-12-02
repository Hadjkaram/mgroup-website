"use client";

import React from 'react';
import { FileText, Send, CheckCircle, Clock, XCircle, MoreHorizontal } from 'lucide-react';

export default function OrdersPage() {
  const orders = [
    { id: "DEV-2025-001", client: "Orange Côte d'Ivoire", event: "Lancement Fibre", date: "24 Nov 2025", amount: "2.500.000", status: "Validé" },
    { id: "DEV-2025-002", client: "Mme Touré", event: "Mariage Privé", date: "02 Déc 2025", amount: "800.000", status: "Envoyé" }, // Celui-ci attend la validation client
    { id: "DEV-2025-003", client: "Festival FEMUA", event: "Scène Principale", date: "15 Avr 2026", amount: "15.000.000", status: "Brouillon" },
    { id: "DEV-2025-004", client: "Agence Voodoo", event: "Soirée Corporate", date: "10 Déc 2025", amount: "1.200.000", status: "Refusé" },
  ];

  return (
    <div className="space-y-6">
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Commandes & Devis</h1>
          <p className="text-gray-500 text-sm">Suivez les validations clients en temps réel.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">
          <FileText size={18} />
          <span>Nouveau Devis</span>
        </button>
      </div>

      {/* TABLEAU DES COMMANDES */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-xs uppercase font-semibold text-gray-500">
                <tr>
                    <th className="p-4">N° Devis</th>
                    <th className="p-4">Client</th>
                    <th className="p-4">Événement</th>
                    <th className="p-4">Montant Total</th>
                    <th className="p-4">Statut Validation</th>
                    <th className="p-4 text-right">Actions Rapides</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
                {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors group">
                        <td className="p-4 font-mono text-xs font-bold text-gray-500">{order.id}</td>
                        <td className="p-4 font-bold text-gray-800">{order.client}</td>
                        <td className="p-4">{order.event} <span className="text-xs text-gray-400 block">{order.date}</span></td>
                        <td className="p-4 font-medium text-gray-900">{order.amount} FCFA</td>
                        
                        {/* GESTION DES STATUTS */}
                        <td className="p-4">
                            {order.status === 'Validé' && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
                                    <CheckCircle size={14} /> Signé par Client
                                </span>
                            )}
                            {order.status === 'Envoyé' && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200 animate-pulse">
                                    <Clock size={14} /> En attente validation
                                </span>
                            )}
                            {order.status === 'Brouillon' && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600 border border-gray-200">
                                    <FileText size={14} /> Brouillon
                                </span>
                            )}
                            {order.status === 'Refusé' && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-600 border border-red-100">
                                    <XCircle size={14} /> Refusé
                                </span>
                            )}
                        </td>

                        {/* ACTIONS INTELLIGENTES */}
                        <td className="p-4 text-right">
                           <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                {order.status === 'Brouillon' && (
                                    <button className="flex items-center gap-1 px-3 py-1 bg-black text-white text-xs rounded hover:bg-gray-800" title="Envoyer le lien de validation">
                                        <Send size={12} /> Envoyer
                                    </button>
                                )}
                                {order.status === 'Envoyé' && (
                                    <button className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded hover:bg-gray-200" title="Renvoyer le lien">
                                        <Send size={12} /> Relancer
                                    </button>
                                )}
                                <button className="p-1 text-gray-400 hover:text-black"><MoreHorizontal size={18} /></button>
                           </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}