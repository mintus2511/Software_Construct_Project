import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { MapPin, Clock, Filter, Zap, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

interface FoodGroup {
  id: string;
  category: string;
  title: string;
  location: string;
  time: string;
  memberCount: number;
  memberAvatars: string[];
}

const availableGroups: FoodGroup[] = [
  {
    id: '1',
    category: 'Món Việt • Phở',
    title: 'Nhóm ăn phở',
    location: 'Toà nhà Keangnam, Mễ Trì',
    time: '12:30 PM',
    memberCount: 25,
    memberAvatars: ['M', 'A', 'T'],
  },
  {
    id: '2',
    category: 'Món Ý • Pizza',
    title: 'Trưa nay ăn Pizza ko a?',
    location: 'Lotte Center, Liễu Giai',
    time: '01:15 PM',
    memberCount: 13,
    memberAvatars: ['L', 'H'],
  },
  {
    id: '3',
    category: 'Ăn nhanh • Bánh mì',
    title: 'Cho đi thêm Bánh Mì Huỳnh Hoa',
    location: 'Vincom Center Bà Triều',
    time: '12:00 PM',
    memberCount: 58,
    memberAvatars: ['K', 'N', 'P', 'Q'],
  },
];

export function OrderFood() {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [preference, setPreference] = useState('');

  return (
    <div className="pb-4 bg-white min-h-full">
      {/* Header */}
      <div className="px-4 pt-4 pb-4 flex items-center justify-between border-b bg-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <h2 className="text-lg font-bold">Đặt món nhóm</h2>
        </div>
        <Filter className="w-6 h-6 text-gray-600" />
      </div>

      {/* Find Group Section */}
      <div className="bg-green-50 px-4 py-6 mb-6">
        <h3 className="font-bold text-lg mb-2">Tìm nhóm quanh bạn</h3>
        <p className="text-sm text-gray-600 mb-4">
          Nhập thông tin để tìm những người đang cùng đặt món tại khu vực của bạn.
        </p>

        {/* Location Input */}
        <div className="mb-3">
          <p className="text-sm font-medium mb-2">Vị trí của bạn</p>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
            <Input
              placeholder="VD: 191 Bà Triệu, Hai Bà Trưng"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 border-gray-300 bg-white"
            />
          </div>
        </div>

        {/* Time and Preference */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <p className="text-sm font-medium mb-2">Thời gian</p>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
              <Input
                placeholder="12:00 PM"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="pl-10 border-gray-300 bg-white"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Sở thích</p>
            <Input
              placeholder="Cơm, Phở..."
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              className="border-gray-300 bg-white"
            />
          </div>
        </div>

        {/* Search Button */}
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl py-6 font-semibold">
          Tìm nhóm ngay
        </Button>
      </div>

      {/* Available Groups */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-lg">Các nhóm đang chờ</h3>
          <span className="text-sm text-green-500 font-medium">
            {availableGroups.length} nhóm khả dụng
          </span>
        </div>

        <div className="space-y-3">
          {availableGroups.map((group) => (
            <Card
              key={group.id}
              className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  {group.category}
                </span>
                <span className="text-xs text-red-500 font-medium">
                  ⏰ {group.time}
                </span>
              </div>

              {/* Title */}
              <h4 className="font-bold text-base mb-2">{group.title}</h4>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{group.location}</span>
              </div>

              {/* Members and Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {group.memberAvatars.map((avatar, idx) => (
                      <Avatar key={idx} className="w-8 h-8 border-2 border-white">
                        <AvatarFallback className="bg-green-500 text-white text-xs">
                          {avatar}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    +{group.memberCount} người tham gia
                  </span>
                </div>
                <Button
                  onClick={() => navigate('/group-chat')}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4"
                  size="sm"
                >
                  Tham gia
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
