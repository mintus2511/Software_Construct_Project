import { Outlet, Link, useLocation } from 'react-router';
import { Home, ChefHat, ShoppingBag } from 'lucide-react';

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Khám phá' },
    { path: '/ingredients', icon: ChefHat, label: 'Nấu ăn' },
    { path: '/order-food', icon: ShoppingBag, label: 'Đặt món' },
  ];

  return (
    <div className="min-h-screen md:bg-gray-900 md:flex md:items-center md:justify-center md:p-4">
      {/* Mobile Phone Frame - Only visible on desktop */}
      <div className="w-full md:max-w-[430px] md:h-[932px] bg-white md:rounded-[3rem] md:shadow-2xl overflow-hidden relative md:border-[14px] md:border-gray-800 h-screen">
        {/* Notch - Only visible on desktop */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-800 rounded-b-3xl z-50"></div>

        {/* App Content */}
        <div className="h-full flex flex-col bg-white">
          {/* Main Content - Scrollable */}
          <main className="flex-1 overflow-y-auto bg-white md:pt-8">
            <Outlet />
          </main>

          {/* Bottom Navigation */}
          <nav className="bg-white border-t shadow-lg flex-shrink-0 pb-6 safe-area-inset-bottom">
            <div className="flex justify-around items-center py-2 px-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'text-green-500'
                        : 'text-gray-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}