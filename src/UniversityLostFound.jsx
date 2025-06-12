import React, { useState } from 'react';
import { Search, Plus, MapPin, Calendar, User, Phone, Mail, Tag, Camera, Filter, Clock, CheckCircle } from 'lucide-react';

const UniversityLostFound = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showReportForm, setShowReportForm] = useState(false);
  const [reportType, setReportType] = useState('lost');

  // Sample data
  const [items, setItems] = useState([
    {
      id: 1,
      type: 'found',
      title: 'iPhone 14 Pro',
      category: 'Electronics',
      description: 'Black iPhone 14 Pro with cracked screen protector',
      location: 'Library - 2nd Floor Study Area',
      date: '2024-06-07',
      contactEmail: 'security@university.edu',
      status: 'available',
      image: '📱'
    },
    {
      id: 2,
      type: 'lost',
      title: 'Blue Backpack',
      category: 'Bags',
      description: 'Navy blue Jansport backpack with biology textbooks',
      location: 'Science Building - Room 205',
      date: '2024-06-06',
      contactEmail: 'student@university.edu',
      status: 'missing',
      image: '🎒'
    },
    {
      id: 3,
      type: 'found',
      title: 'Silver Watch',
      category: 'Jewelry',
      description: 'Citizen silver watch with leather strap',
      location: 'Gymnasium - Locker Room',
      date: '2024-06-05',
      contactEmail: 'security@university.edu',
      status: 'available',
      image: '⌚'
    },
    {
      id: 4,
      type: 'found',
      title: 'Red Water Bottle',
      category: 'Personal Items',
      description: 'Hydro Flask red water bottle with university stickers',
      location: 'Student Union - Cafeteria',
      date: '2024-06-04',
      contactEmail: 'security@university.edu',
      status: 'claimed',
      image: '🍼'
    }
  ]);

  const categories = ['all', 'Electronics', 'Bags', 'Jewelry', 'Personal Items', 'Books', 'Clothing', 'Keys', 'Other'];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesTab = activeTab === 'browse' || item.type === activeTab.replace(' items', '');
    return matchesSearch && matchesCategory && matchesTab;
  });

  const handleSubmitReport = () => {
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const email = document.getElementById('email').value;
    
    if (!title || !category || !description || !location || !date || !email) {
      alert('Please fill in all fields');
      return;
    }
    
    const newItem = {
      id: items.length + 1,
      type: reportType,
      title: title,
      category: category,
      description: description,
      location: location,
      date: date,
      contactEmail: email,
      status: reportType === 'lost' ? 'missing' : 'available',
      image: getCategoryEmoji(category)
    };
    setItems([newItem, ...items]);
    setShowReportForm(false);
  };

  const getCategoryEmoji = (category) => {
    const emojis = {
      'Electronics': '📱',
      'Bags': '🎒',
      'Jewelry': '⌚',
      'Personal Items': '🍼',
      'Books': '📚',
      'Clothing': '👕',
      'Keys': '🔑',
      'Other': '📦'
    };
    return emojis[category] || '📦';
  };

  const getStatusColor = (status) => {
    const colors = {
      'available': 'bg-green-100 text-green-800',
      'missing': 'bg-red-100 text-red-800',
      'claimed': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">University Lost & Found</h1>
              <p className="text-gray-600 mt-1">Reuniting students with their belongings</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Security Office</p>
              <p className="text-sm font-medium text-blue-600">security@university.edu</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'browse', label: 'Browse All', icon: Search },
            { id: 'found', label: 'Found Items', icon: CheckCircle },
            { id: 'lost', label: 'Lost Items', icon: Clock }
          ].map(tab => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <IconComponent size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setShowReportForm(true)}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              <Plus size={20} />
              Report Item
            </button>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{item.image}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={16} />
                    <span>{item.category}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Contact About This Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600">Try adjusting your search or browse all items</p>
          </div>
        )}
      </div>

      {/* Report Form Modal */}
      {showReportForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Report an Item</h2>
              <p className="text-gray-600">Help us reunite items with their owners</p>
            </div>
            
            <div className="p-6">
              {/* Form state */}
              <div className="mb-6">
                <div className="block text-sm font-medium text-gray-700 mb-3">Item Type</div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setReportType('lost')}
                    className={`flex items-center px-4 py-2 rounded-lg border ${reportType === 'lost' ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-700'}`}
                  >
                    I lost something
                  </button>
                  <button
                    onClick={() => setReportType('found')}
                    className={`flex items-center px-4 py-2 rounded-lg border ${reportType === 'found' ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 text-gray-700'}`}
                  >
                    I found something
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Item Name</div>
                  <input
                    type="text"
                    id="title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., iPhone, Backpack, Keys"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Category</div>
                  <select
                    id="category"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    {categories.slice(1).map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <div className="block text-sm font-medium text-gray-700 mb-2">Description</div>
                <textarea
                  id="description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Provide detailed description including color, brand, distinguishing features..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Location</div>
                  <input
                    type="text"
                    id="location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Where was it lost/found?"
                  />
                </div>
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">Date</div>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="block text-sm font-medium text-gray-700 mb-2">Contact Email</div>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@university.edu"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setShowReportForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitReport}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityLostFound; 