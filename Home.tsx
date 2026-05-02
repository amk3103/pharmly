import { Link, useNavigate } from "react-router";
import { Search, Pill, Clock, AlertCircle, ChevronRight, Camera } from "lucide-react";
import PharmlyLogo from "../PharmlyLogo";

const mockPrescriptions = [
  {
    id: "1",
    medicine: "Amoxicillin",
    dosage: "500mg",
    illness: "Bacterial Infection",
    date: "Apr 28, 2026",
    status: "Active",
  },
  {
    id: "2",
    medicine: "Lisinopril",
    dosage: "10mg",
    illness: "Hypertension",
    date: "Apr 15, 2026",
    status: "Active",
  },
  {
    id: "3",
    medicine: "Metformin",
    dosage: "850mg",
    illness: "Type 2 Diabetes",
    date: "Mar 20, 2026",
    status: "Completed",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-[#fafbfc]">
      <div className="px-6 pt-10 pb-6 bg-white">
        <div className="flex items-center justify-between mb-6">
          <PharmlyLogo size="default" showTagline={true} />
          <div className="w-11 h-11 bg-gradient-to-br from-[#52489C] to-[#00A6A6] rounded-full flex items-center justify-center text-white font-semibold shadow-sm">
            JD
          </div>
        </div>

        <button
          onClick={() => navigate("/search")}
          className="w-full flex items-center gap-3 px-5 py-4 bg-[#f9fafb] rounded-3xl border border-gray-200 text-left transition-all hover:border-[#00A6A6]/30 hover:bg-white"
        >
          <Search className="w-5 h-5 text-[#00A6A6]" />
          <span className="text-gray-500">Search prescriptions, illnesses...</span>
        </button>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-3xl p-4 text-center shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#52489C]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Pill className="w-6 h-6 text-[#52489C]" />
            </div>
            <div className="text-xl font-bold text-[#1a1a1a]">12</div>
            <div className="text-xs text-gray-500 mt-1">Active</div>
          </div>

          <div className="bg-white rounded-3xl p-4 text-center shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#00A6A6]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-[#00A6A6]" />
            </div>
            <div className="text-xl font-bold text-[#1a1a1a]">8</div>
            <div className="text-xs text-gray-500 mt-1">Upcoming</div>
          </div>

          <div className="bg-white rounded-3xl p-4 text-center shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-[#FFC759]/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6 text-[#FFC759]" />
            </div>
            <div className="text-xl font-bold text-[#1a1a1a]">2</div>
            <div className="text-xs text-gray-500 mt-1">Expiring</div>
          </div>
        </div>

        <Link
          to="/upload"
          className="flex items-center justify-center gap-3 bg-[#00A6A6] text-white rounded-3xl py-4 px-6 shadow-lg shadow-[#00A6A6]/25 hover:shadow-xl hover:shadow-[#00A6A6]/35 transition-all"
        >
          <Camera className="w-5 h-5" />
          <span className="font-semibold">Upload Prescription</span>
        </Link>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-[#1a1a1a]">Recent Prescriptions</h2>
            <Link to="/search" className="text-[#00A6A6] text-sm font-semibold">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {mockPrescriptions.map((prescription) => (
              <Link
                key={prescription.id}
                to={`/prescription/${prescription.id}`}
                className="block bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1.5">
                      <h3 className="font-bold text-[#1a1a1a]">
                        {prescription.medicine}
                      </h3>
                      <span className="text-sm text-gray-500">{prescription.dosage}</span>
                    </div>
                    <p className="text-sm text-gray-600">{prescription.illness}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 flex-shrink-0 mt-1" />
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{prescription.date}</span>
                  <span
                    className={`text-xs px-3 py-1.5 rounded-full font-semibold ${
                      prescription.status === "Active"
                        ? "bg-[#00A6A6]/15 text-[#00A6A6]"
                        : "bg-[#E8E9ED] text-gray-600"
                    }`}
                  >
                    {prescription.status}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FF85A3]/10 to-[#FFC759]/10 rounded-3xl p-6 flex items-center gap-4 border border-[#FF85A3]/20">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Users className="w-6 h-6 text-[#52489C]" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[#1a1a1a] mb-1">Family Members</h3>
            <p className="text-sm text-gray-600">Manage prescriptions for your family</p>
          </div>
          <Link
            to="/family"
            className="flex-shrink-0 p-2 hover:bg-white/70 rounded-xl transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-[#52489C]" />
          </Link>
        </div>

        {/* Logo showcase link - for development/demo purposes */}
        <Link
          to="/logo"
          className="block text-center text-sm text-gray-400 hover:text-[#00A6A6] transition-colors pt-4"
        >
          View Logo & Branding
        </Link>
      </div>
    </div>
  );
}

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
