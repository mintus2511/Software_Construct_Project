import { useState } from 'react';
import { Card } from './ui/card';
import { ChevronRight, Search, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Avatar, AvatarFallback } from './ui/avatar';
import { useNavigate } from 'react-router';

const suggestedDishes = [
  {
    id: 1,
    name: 'Salad Ức Gà Nướng & Hạt Điều',
    time: '20 phút',
    calories: '350 kcal',
    image: 'grilled chicken salad nuts',
    badge: 'Healthy',
  },
  {
    id: 2,
    name: 'Mì Ý Sốt Cà Chua Thơm Ngon',
    time: '25 phút',
    calories: '420 kcal',
    image: 'spaghetti tomato sauce',
    badge: 'Healthy',
  },
];

const dishes = [
  { name: 'Phở Bò Tái Lăn', category: 'Asian', image: 'vietnamese beef pho' },
  { name: 'Sushi Cá Hồi Tươi', category: 'Japanese', image: 'fresh salmon sushi' },
  { name: 'Bánh Mì Kẹp Thịt', category: 'Street Food', image: 'vietnamese banh mi' },
  { name: 'Bún Chả Hà Nội', category: 'Vietnamese', image: 'hanoi bun cha' },
  { name: 'Pizza Hải Sản', category: 'Italian', image: 'seafood pizza' },
  { name: 'Tacos Tôm Nướng', category: 'Mexican', image: 'grilled shrimp tacos' },
];

export function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="pb-4 bg-white">
      {/* Header */}
      <div className="px-4 pt-4 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <div className="flex items-center gap-3">
            <Search className="w-6 h-6 text-gray-600" />
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-green-500 text-white">M</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="mb-2">
          <p className="text-gray-500 text-sm">Xin chào, Minh!</p>
          <h2 className="text-2xl font-bold">
            Bạn muốn ăn gì
            <span className="text-green-500">hôm nay?</span>
          </h2>
        </div>
      </div>

      {/* Suggested Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h3 className="font-bold">Gợi ý cho bạn</h3>
          <button className="text-green-500 text-sm flex items-center gap-1">
            Xem thêm
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex gap-3 overflow-x-auto px-4 pb-2">
          {suggestedDishes.map((dish) => (
            <div
              key={dish.id}
              onClick={() => navigate('/meal-detail')}
              className="flex-shrink-0 w-72 rounded-2xl overflow-hidden relative cursor-pointer"
            >
              <div className="h-56 relative">
                <ImageWithFallback
                  src={`https://source.unsplash.com/800x600/?${encodeURIComponent(dish.image)}`}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-gray-800">{dish.badge}</span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-bold text-lg mb-2">{dish.name}</h4>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      ⏱️ {dish.time}
                    </span>
                    <span className="flex items-center gap-1">
                      🔥 {dish.calories}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Section */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold">Khám phá món ăn</h3>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'all'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setActiveTab('asian')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'asian'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Châu Á
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          {dishes.map((dish, index) => (
            <div 
              key={index} 
              onClick={() => navigate('/meal-detail')}
              className="cursor-pointer"
            >
              <div className="bg-gray-100 rounded-2xl overflow-hidden mb-2 aspect-square">
                <ImageWithFallback
                  src={`https://source.unsplash.com/400x400/?${encodeURIComponent(dish.image)}`}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-1">
                <p className="text-xs text-gray-500 mb-1">{dish.category}</p>
                <p className="font-semibold text-sm">{dish.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}