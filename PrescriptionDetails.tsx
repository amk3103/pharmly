import { Link, useParams } from "react-router";
import { ArrowLeft, Calendar, User, Pill, FileText, Stethoscope, Bell, Edit3 } from "lucide-react";
import PharmlyLogo from "../PharmlyLogo";

export default function PrescriptionDetails() {
  const { id } = useParams();

  const prescription = {
    id: id,
    medicine: "Amoxicillin",
    dosage: "500mg",
    frequency: "3 times daily",
    illness: "Bacterial Infection",
    date: "Apr 28, 2026",
    doctor: "Dr. Sarah Johnson",
    status: "Active",
    duration: "7 days",
    familyMember: "Self",
    symptoms: "Sore throat, fever, difficulty swallowing",
    instructions: "Take with food. Complete the full course even if symptoms improve.",
    startDate: "Apr 28, 2026",
    endDate: "May 5, 2026",
    refills: "2 remaining",
  };

  return (
    <div className="min-h-full bg-[#fafbfc]">
      <div className="bg-white px-6 pt-10 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-[#1a1a1a]" />
          </Link>
          <h1 className="text-2xl font-bold text-[#1a1a1a] flex-1">Details</h1>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="mb-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                  {prescription.medicine}
                </h2>
                <p className="text-lg text-gray-600 mb-3">
                  {prescription.dosage} • {prescription.frequency}
                </p>
              </div>
              <span className="inline-block text-sm px-4 py-2 rounded-full font-semibold bg-[#00A6A6]/15 text-[#00A6A6]">
                {prescription.status}
              </span>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[#52489C]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-5 h-5 text-[#52489C]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1 font-medium">Illness</p>
                <p className="font-semibold text-[#1a1a1a]">{prescription.illness}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[#00A6A6]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-[#00A6A6]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1 font-medium">Doctor</p>
                <p className="font-semibold text-[#1a1a1a]">{prescription.doctor}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[#FF85A3]/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                <User className="w-5 h-5 text-[#FF85A3]" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1 font-medium">Family Member</p>
                <p className="font-semibold text-[#1a1a1a]">{prescription.familyMember}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
            <Pill className="w-5 h-5 text-[#52489C]" />
            Dosage Information
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Duration</span>
              <span className="font-semibold text-[#1a1a1a]">{prescription.duration}</span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-100">
              <span className="text-gray-600">Refills</span>
              <span className="font-semibold text-[#1a1a1a]">{prescription.refills}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#52489C]" />
            Timeline
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Start Date</span>
              <span className="font-semibold text-[#1a1a1a]">{prescription.startDate}</span>
            </div>
            <div className="flex justify-between py-2 border-t border-gray-100">
              <span className="text-gray-600">End Date</span>
              <span className="font-semibold text-[#1a1a1a]">{prescription.endDate}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#52489C]" />
            Symptoms
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {prescription.symptoms}
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#FFC759]/15 to-[#FF85A3]/15 rounded-3xl p-6 shadow-sm border border-[#FFC759]/30">
          <h3 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#FFC759]" />
            Instructions
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            {prescription.instructions}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <button className="flex items-center justify-center gap-2 bg-white border-2 border-[#52489C] text-[#52489C] rounded-3xl py-3.5 px-6 font-semibold hover:bg-[#52489C]/5 transition-all shadow-sm">
            <Edit3 className="w-4 h-4" />
            Edit
          </button>
          <button className="flex items-center justify-center gap-2 bg-[#00A6A6] text-white rounded-3xl py-3.5 px-6 font-semibold hover:shadow-lg hover:shadow-[#00A6A6]/25 transition-all">
            <Bell className="w-4 h-4" />
            Reminder
          </button>
        </div>
      </div>
    </div>
  );
}
