"use client";

import { useState } from "react";
import { MapPin, Plus, Edit2, Trash2, Check, Home, Building2 } from "lucide-react";

interface Address {
  id: number;
  type: "home" | "office";
  name: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  isDefault: boolean;
}

const initialAddresses: Address[] = [
  {
    id: 1,
    type: "home",
    name: "John Doe",
    phone: "+880 1712-345678",
    address: "House 12, Road 5, Dhanmondi",
    city: "Dhaka",
    postalCode: "1205",
    isDefault: true,
  },
  {
    id: 2,
    type: "office",
    name: "John Doe",
    phone: "+880 1712-345678",
    address: "Level 8, Bashundhara City Mall",
    city: "Dhaka",
    postalCode: "1215",
    isDefault: false,
  },
];

export default function AddressPage() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    type: "home" as "home" | "office",
  });

  const resetForm = () => {
    setFormData({ name: "", phone: "", address: "", city: "", postalCode: "", type: "home" });
    setShowForm(false);
    setEditingId(null);
  };

  const handleSave = () => {
    if (editingId) {
      setAddresses(
        addresses.map((a) =>
          a.id === editingId
            ? { ...a, ...formData }
            : a
        )
      );
    } else {
      const newAddress: Address = {
        id: Date.now(),
        ...formData,
        isDefault: addresses.length === 0,
      };
      setAddresses([...addresses, newAddress]);
    }
    resetForm();
  };

  const handleEdit = (addr: Address) => {
    setFormData({
      name: addr.name,
      phone: addr.phone,
      address: addr.address,
      city: addr.city,
      postalCode: addr.postalCode,
      type: addr.type,
    });
    setEditingId(addr.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    setAddresses(addresses.filter((a) => a.id !== id));
  };

  const setDefault = (id: number) => {
    setAddresses(
      addresses.map((a) => ({ ...a, isDefault: a.id === id }))
    );
  };

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Addresses</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
          >
            <Plus size={18} />
            Add New
          </button>
        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {editingId ? "Edit Address" : "Add New Address"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  placeholder="+880 XXXX-XXXXXX"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Address
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm resize-none"
                  rows={2}
                  placeholder="House, Road, Area"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  placeholder="Dhaka"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                  placeholder="1205"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address Type
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setFormData({ ...formData, type: "home" })}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                      formData.type === "home"
                        ? "border-red-500 bg-red-50 text-red-700"
                        : "border-gray-300 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Home size={16} />
                    Home
                  </button>
                  <button
                    onClick={() => setFormData({ ...formData, type: "office" })}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                      formData.type === "office"
                        ? "border-red-500 bg-red-50 text-red-700"
                        : "border-gray-300 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Building2 size={16} />
                    Office
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button
                onClick={handleSave}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
              >
                <Check size={16} />
                {editingId ? "Update" : "Save"}
              </button>
              <button
                onClick={resetForm}
                className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Address List */}
        <div className="space-y-4">
          {addresses.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
              <MapPin size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No addresses added yet</p>
            </div>
          ) : (
            addresses.map((addr) => (
              <div
                key={addr.id}
                className={`bg-white rounded-xl border overflow-hidden ${
                  addr.isDefault ? "border-red-300 ring-1 ring-red-100" : "border-gray-200"
                }`}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {addr.type === "home" ? (
                        <Home size={18} className="text-red-600" />
                      ) : (
                        <Building2 size={18} className="text-blue-600" />
                      )}
                      <span className="text-sm font-semibold text-gray-800 capitalize">
                        {addr.type}
                      </span>
                      {addr.isDefault && (
                        <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full font-medium">
                          Default
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEdit(addr)}
                        className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                      >
                        <Edit2 size={16} className="text-gray-500" />
                      </button>
                      <button
                        onClick={() => handleDelete(addr.id)}
                        className="p-1.5 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} className="text-gray-500 hover:text-red-600" />
                      </button>
                    </div>
                  </div>
                  <div className="ml-7">
                    <p className="text-sm font-medium text-gray-900">{addr.name}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{addr.phone}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      {addr.address}, {addr.city} - {addr.postalCode}
                    </p>
                  </div>
                </div>
                {!addr.isDefault && (
                  <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                    <button
                      onClick={() => setDefault(addr.id)}
                      className="text-sm text-red-600 hover:text-red-700 font-medium"
                    >
                      Set as Default
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
