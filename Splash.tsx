import { useEffect } from "react";
import { useNavigate } from "react-router";
import PharmlyLogo from "../PharmlyLogo";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#52489C] via-[#00A6A6] to-[#52489C] flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="mb-6 flex justify-center">
          <div className="bg-white p-10 rounded-[40px] shadow-2xl">
            <PharmlyLogo size="large" showTagline={false} />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
