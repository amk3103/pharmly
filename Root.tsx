import { Outlet, useLocation, Link } from "react-router";
import { Home, Search, PlusCircle, Users } from "lucide-react";

export default function Root() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/search", icon: Search, label: "Search" },
    { path: "/add", icon: PlusCircle, label: "Add" },
    { path: "/family", icon: Users, label: "Family" },
  ];

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-[#fafbfc]">
      <main className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white px-6 py-3 safe-area-inset-bottom shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center gap-1.5 py-2 px-3 min-w-[68px] transition-all"
              >
                <div
                  className={`p-2 rounded-2xl transition-all ${
                    isActive ? "bg-[#00A6A6]" : "bg-transparent"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  />
                </div>
                <span
                  className={`text-xs font-medium ${
                    isActive ? "text-[#00A6A6]" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
