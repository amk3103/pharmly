import { Link } from "react-router";
import { Search as SearchIcon, X, ChevronRight, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { Avatar } from "../AvatarSelector";
import PharmlyLogo from "../PharmlyLogo";

const allPrescriptions = [
  {
    id: "1",
    medicine: "Amoxicillin",
    dosage: "500mg",
    illness: "Bacterial Infection",
    date: "Apr 28, 2026",
    doctor: "Dr. Sarah Johnson",
    familyMember: "Self",
    status: "Active",
  },
  {
    id: "2",
    medicine: "Lisinopril",
    dosage: "10mg",
    illness: "Hypertension",
    date: "Apr 15, 2026",
    doctor: "Dr. Michael Chen",
    familyMember: "Self",
    status: "Active",
  },
  {
    id: "3",
    medicine: "Metformin",
    dosage: "850mg",
    illness: "Type 2 Diabetes",
    date: "Mar 20, 2026",
    doctor: "Dr. Emily Rodriguez",
    familyMember: "Spouse",
    status: "Completed",
  },
  {
    id: "4",
    medicine: "Ibuprofen",
    dosage: "400mg",
    illness: "Pain Relief",
    date: "Apr 10, 2026",
    doctor: "Dr. Sarah Johnson",
    familyMember: "Child 1",
    status: "Active",
  },
  {
    id: "5",
    medicine: "Cetirizine",
    dosage: "10mg",
    illness: "Allergies",
    date: "Mar 5, 2026",
    doctor: "Dr. Michael Chen",
    familyMember: "Self",
    status: "Active",
  },
];

type FilterType = "all" | "medicine" | "illness" | "doctor" | "date" | "familyMember";

const familyMembers = [
  { id: "self", name: "Self", avatarId: 1 },
  { id: "spouse", name: "Spouse", avatarId: 2 },
  { id: "child1", name: "Child 1", avatarId: 3 },
  { id: "child2", name: "Child 2", avatarId: 4 },
  { id: "parent", name: "Parent", avatarId: 6 },
];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "active" | "completed">("all");
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const toggleMember = (memberId: string) => {
    setSelectedMembers((prev) =>
      prev.includes(memberId)
        ? prev.filter((id) => id !== memberId)
        : [...prev, memberId]
    );
  };

  const filteredPrescriptions = allPrescriptions.filter((prescription) => {
    const query = searchQuery.toLowerCase();

    let matchesSearch = false;
    if (selectedFilter === "all") {
      matchesSearch =
        prescription.medicine.toLowerCase().includes(query) ||
        prescription.illness.toLowerCase().includes(query) ||
        prescription.doctor.toLowerCase().includes(query) ||
        prescription.familyMember.toLowerCase().includes(query);
    } else if (selectedFilter === "medicine") {
      matchesSearch = prescription.medicine.toLowerCase().includes(query);
    } else if (selectedFilter === "illness") {
      matchesSearch = prescription.illness.toLowerCase().includes(query);
    } else if (selectedFilter === "doctor") {
      matchesSearch = prescription.doctor.toLowerCase().includes(query);
    } else if (selectedFilter === "date") {
      matchesSearch = prescription.date.toLowerCase().includes(query);
    } else if (selectedFilter === "familyMember") {
      matchesSearch = prescription.familyMember.toLowerCase().includes(query);
    }

    const matchesStatus =
      selectedStatus === "all" ||
      prescription.status.toLowerCase() === selectedStatus;

    const matchesFamilyMember =
      selectedMembers.length === 0 ||
      selectedMembers.some((memberId) => {
        const member = familyMembers.find((m) => m.id === memberId);
        return member && prescription.familyMember === member.name;
      });

    return (searchQuery === "" || matchesSearch) && matchesStatus && matchesFamilyMember;
  });

  return (
    <div className="min-h-full bg-[#fafbfc]">
      <div className="px-6 pt-10 pb-6 bg-white">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-6">Search</h1>

        <div className="relative mb-4">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00A6A6]" />
          <input
            type="text"
            placeholder="Search prescriptions, medicines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 bg-[#f9fafb] text-[#1a1a1a] rounded-3xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A6A6]/20 focus:border-[#00A6A6]/30 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#f9fafb] rounded-3xl text-sm font-semibold text-[#00A6A6] hover:bg-[#00A6A6]/5 transition-all border border-gray-200"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>

        {showFilters && (
          <div className="mt-4 space-y-4 p-5 bg-white rounded-3xl border border-gray-200">
            <div>
              <p className="text-xs font-semibold text-gray-600 mb-3">Search by:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "All" },
                  { id: "medicine", label: "Medicine" },
                  { id: "illness", label: "Illness" },
                  { id: "doctor", label: "Doctor" },
                  { id: "date", label: "Date" },
                  { id: "familyMember", label: "Family Member" },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id as FilterType)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedFilter === filter.id
                        ? "bg-[#52489C] text-white shadow-sm"
                        : "bg-[#E8E9ED] text-gray-700"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {selectedFilter === "familyMember" && (
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-3">Select members:</p>
                <div className="flex flex-wrap gap-3">
                  {familyMembers.map((member) => (
                    <button
                      key={member.id}
                      onClick={() => toggleMember(member.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-semibold transition-all ${
                        selectedMembers.includes(member.id)
                          ? "bg-[#00A6A6] text-white shadow-sm ring-2 ring-[#00A6A6]/20"
                          : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#00A6A6]/30"
                      }`}
                    >
                      <Avatar id={member.avatarId} size="sm" />
                      <span>{member.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <p className="text-xs font-semibold text-gray-600 mb-3">Status:</p>
              <div className="flex gap-2">
                {[
                  { id: "all", label: "All" },
                  { id: "active", label: "Active" },
                  { id: "completed", label: "Completed" },
                ].map((status) => (
                  <button
                    key={status.id}
                    onClick={() => setSelectedStatus(status.id as "all" | "active" | "completed")}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedStatus === status.id
                        ? "bg-[#00A6A6] text-white shadow-sm"
                        : "bg-[#E8E9ED] text-gray-700"
                    }`}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-6 py-6">
        <div className="text-sm text-gray-500 mb-4">
          {filteredPrescriptions.length} result{filteredPrescriptions.length !== 1 ? "s" : ""} found
        </div>

        <div className="space-y-3">
          {filteredPrescriptions.map((prescription) => (
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
                  <p className="text-sm text-gray-600 mb-1">{prescription.illness}</p>
                  <p className="text-xs text-gray-500">{prescription.doctor}</p>
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

          {filteredPrescriptions.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 px-6">
              <div className="mb-6 opacity-40">
                <PharmlyLogo size="large" showTagline={false} />
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2 text-lg">No results found</h3>
              <p className="text-sm text-gray-600 text-center max-w-xs">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
