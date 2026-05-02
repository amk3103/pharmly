import { Link } from "react-router";
import { Camera } from "lucide-react";
import PharmlyLogo from "../PharmlyLogo";

export default function EmptyPrescriptions() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 bg-white rounded-3xl border border-gray-100 mx-6 mt-6">
      <div className="mb-6 opacity-30">
        <PharmlyLogo size="large" showTagline={false} />
      </div>
      <h3 className="font-bold text-[#1a1a1a] mb-2 text-lg">No prescriptions yet</h3>
      <p className="text-sm text-gray-600 text-center max-w-xs mb-6">
        Upload your first prescription to get started
      </p>
      <Link
        to="/upload"
        className="flex items-center justify-center gap-2 bg-[#00A6A6] text-white rounded-3xl py-3 px-6 font-semibold shadow-lg shadow-[#00A6A6]/25 hover:shadow-xl hover:shadow-[#00A6A6]/35 transition-all"
      >
        <Camera className="w-5 h-5" />
        Upload Prescription
      </Link>
    </div>
  );
}
