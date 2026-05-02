import { Link } from "react-router";
import { ArrowLeft, Camera, User, Pill, FileText, Stethoscope } from "lucide-react";
import { useState } from "react";
import PharmlyLogo from "../PharmlyLogo";

export default function AddPrescription() {
  const [formData, setFormData] = useState({
    medicineName: "",
    dosage: "",
    illness: "",
    symptoms: "",
    doctorName: "",
    familyMember: "self",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-full bg-[#fafbfc]">
      <div className="bg-white px-6 pt-10 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-xl transition-colors">
            <ArrowLeft className="w-6 h-6 text-[#1a1a1a]" />
          </Link>
          <h1 className="text-2xl font-bold text-[#1a1a1a] flex-1">Add Prescription</h1>
        </div>
      </div>

      <div className="px-6 py-6">
        <Link
          to="/upload"
          className="flex items-center justify-center gap-3 bg-white border-2 border-dashed border-[#00A6A6]/40 text-[#00A6A6] rounded-3xl py-5 px-6 mb-6 hover:bg-[#00A6A6]/5 hover:border-[#00A6A6]/60 transition-all shadow-sm"
        >
          <Camera className="w-5 h-5" />
          <span className="font-semibold">Upload Prescription Photo</span>
        </Link>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2.5">
              <User className="w-4 h-4 text-[#00A6A6]" />
              Family Member
            </label>
            <select
              name="familyMember"
              value={formData.familyMember}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#00A6A6]/20 focus:border-[#00A6A6]/30 transition-all text-[#1a1a1a]"
            >
              <option value="self">Self</option>
              <option value="spouse">Spouse</option>
              <option value="child1">Child 1</option>
              <option value="child2">Child 2</option>
              <option value="parent">Parent</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2.5">
              <Pill className="w-4 h-4 text-[#00A6A6]" />
              Medicine Name
            </label>
            <input
              type="text"
              name="medicineName"
              value={formData.medicineName}
              onChange={handleChange}
              placeholder="e.g., Amoxicillin"
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#00A6A6]/20 focus:border-[#00A6A6]/30 transition-all text-[#1a1a1a] placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2.5">
              <FileText className="w-4 h-4 text-[#00A6A6]" />
              Dosage
            </label>
            <input
              type="text"
              name="dosage"
              value={formData.dosage}
              onChange={handleChange}
              placeholder="e.g., 500mg, 2 times daily"
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#00A6A6]/20 focus:border-[#00A6A6]/30 transition-all text-[#1a1a1a] placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2.5">
              <Stethoscope className="w-4 h-4 text-[#00A6A6]" />
              Illness/Condition
            </label>
            <input
              type="text"
              name="illness"
              value={formData.illness}
              onChange={handleChange}
              placeholder="e.g., Bacterial Infection"
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#00A6A6]/20 focus:border-[#00A6A6]/30 transition-all text-[#1a1a1a] placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2.5">
              <FileText className="w-4 h-4 text-[#00A6A6]" />
              Symptoms
            </label>
            <textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={handleChange}
              placeholder="Describe symptoms..."
              rows={4}
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#52489C]/20 focus:border-[#52489C]/30 transition-all resize-none text-[#2d3748] placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2.5">
              <Stethoscope className="w-4 h-4 text-[#00A6A6]" />
              Doctor Name
            </label>
            <input
              type="text"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              placeholder="e.g., Dr. Sarah Johnson"
              className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#00A6A6]/20 focus:border-[#00A6A6]/30 transition-all text-[#1a1a1a] placeholder:text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#00A6A6] text-white rounded-3xl py-4 px-6 font-semibold shadow-lg shadow-[#00A6A6]/25 hover:shadow-xl hover:shadow-[#00A6A6]/35 transition-all mt-6"
          >
            Save Prescription
          </button>
        </form>
      </div>
    </div>
  );
}
