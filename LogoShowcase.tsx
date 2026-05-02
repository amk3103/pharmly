import PharmlyLogo from "../PharmlyLogo";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-[#fafbfc] pb-20">
      <div className="bg-white px-6 pt-10 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-[#1a1a1a]" />
          </Link>
          <h1 className="text-2xl font-bold text-[#1a1a1a] flex-1">Logo Showcase</h1>
        </div>
        <p className="text-gray-600">Pharmly branding and logo usage</p>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Logo - default size */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#1a1a1a] mb-4">Header Logo (Default)</h3>
          <PharmlyLogo size="default" showTagline={true} />
          <p className="text-sm text-gray-500 mt-4">Used in: Homepage header, navigation</p>
        </div>

        {/* Logo - large size */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#1a1a1a] mb-4">Large Logo</h3>
          <PharmlyLogo size="large" showTagline={true} />
          <p className="text-sm text-gray-500 mt-4">Used in: Marketing materials, hero sections</p>
        </div>

        {/* Small logo */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#1a1a1a] mb-4">Small Logo</h3>
          <PharmlyLogo size="small" showTagline={false} />
          <p className="text-sm text-gray-500 mt-4">Used in: Compact spaces, headers</p>
        </div>

        {/* Logo variations */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-6 shadow-sm border border-gray-200">
          <h3 className="font-bold text-[#1a1a1a] mb-4">All Sizes Comparison</h3>
          <div className="space-y-4 bg-white p-4 rounded-2xl">
            <div>
              <p className="text-xs text-gray-500 mb-2">Small</p>
              <PharmlyLogo size="small" showTagline={false} />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Default</p>
              <PharmlyLogo size="default" showTagline={false} />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Large</p>
              <PharmlyLogo size="large" showTagline={false} />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">SVG-based scalable logo</p>
        </div>

        {/* Color swatches */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#1a1a1a] mb-4">Brand Colors</h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="w-full h-16 rounded-2xl bg-[#52489C] mb-2"></div>
              <p className="text-sm font-semibold text-[#1a1a1a]">Purple/Blue</p>
              <p className="text-xs text-gray-500">#52489C</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-2xl bg-[#00A6A6] mb-2"></div>
              <p className="text-sm font-semibold text-[#1a1a1a]">Teal</p>
              <p className="text-xs text-gray-500">#00A6A6</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-2xl bg-[#FFC759] mb-2"></div>
              <p className="text-sm font-semibold text-[#1a1a1a]">Yellow</p>
              <p className="text-xs text-gray-500">#FFC759</p>
            </div>
            <div>
              <div className="w-full h-16 rounded-2xl bg-[#FF85A3] mb-2"></div>
              <p className="text-sm font-semibold text-[#1a1a1a]">Pink</p>
              <p className="text-xs text-gray-500">#FF85A3</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#1a1a1a] mb-4">Typography</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Brand Name:</p>
              <div style={{ fontFamily: '"Poppins", sans-serif', fontSize: '28px', lineHeight: '1' }}>
                <span className="text-[#52489C]" style={{ fontWeight: 700 }}>Pharm</span>
                <span className="text-[#00A6A6]" style={{ fontWeight: 500 }}>ly</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Tagline:</p>
              <p className="text-gray-600" style={{ fontFamily: '"Poppins", sans-serif' }}>
                Your prescriptions, simplified.
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">Font: Poppins (Google Fonts)</p>
              <p className="text-xs text-gray-400">Weights: 400, 500, 600, 700</p>
            </div>
          </div>
        </div>

        {/* View Splash Screen */}
        <Link
          to="/splash"
          className="block bg-gradient-to-r from-[#52489C] to-[#00A6A6] text-white rounded-3xl py-4 px-6 text-center font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          View Splash Screen →
        </Link>
      </div>
    </div>
  );
}
