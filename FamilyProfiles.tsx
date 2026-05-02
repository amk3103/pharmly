import { Link } from "react-router";
import { Plus, ChevronRight, Pill, Info } from "lucide-react";
import { useState } from "react";
import { Avatar } from "../AvatarSelector";
import AvatarSelector from "../AvatarSelector";
import PharmlyLogo from "../PharmlyLogo";

const familyMembers = [
  {
    id: "self",
    name: "John Doe",
    relation: "Self",
    age: 42,
    activePrescriptions: 5,
    avatarId: 1,
  },
  {
    id: "spouse",
    name: "Jane Doe",
    relation: "Spouse",
    age: 40,
    activePrescriptions: 3,
    avatarId: 2,
  },
  {
    id: "child1",
    name: "Emma Doe",
    relation: "Daughter",
    age: 12,
    activePrescriptions: 2,
    avatarId: 3,
  },
  {
    id: "child2",
    name: "Lucas Doe",
    relation: "Son",
    age: 8,
    activePrescriptions: 1,
    avatarId: 4,
  },
  {
    id: "parent",
    name: "Mary Smith",
    relation: "Mother",
    age: 68,
    activePrescriptions: 7,
    avatarId: 6,
  },
];

export default function FamilyProfiles() {
  const [showAddMember, setShowAddMember] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<number>(1);

  return (
    <div className="min-h-full bg-[#fafbfc]">
      <div className="bg-white px-6 pt-10 pb-6">
        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-2">Family Profiles</h1>
        <p className="text-gray-600">Manage prescriptions for your family</p>
      </div>

      <div className="px-6 py-6">
        <button
          onClick={() => setShowAddMember(!showAddMember)}
          className="flex items-center justify-center gap-3 w-full bg-white border-2 border-dashed border-[#00A6A6]/40 text-[#00A6A6] rounded-3xl py-4 px-6 mb-6 hover:bg-[#00A6A6]/5 hover:border-[#00A6A6]/60 transition-all shadow-sm"
        >
          <Plus className="w-5 h-5" />
          <span className="font-semibold">Add Family Member</span>
        </button>

        {showAddMember && (
          <div className="bg-white rounded-3xl p-6 mb-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-[#1a1a1a] mb-4">Choose Avatar</h3>
            <AvatarSelector selected={selectedAvatar} onSelect={setSelectedAvatar} />

            <div className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3.5 bg-[#f9fafb] border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#00A6A6]/20 focus:border-[#00A6A6]/30 transition-all text-[#1a1a1a] placeholder:text-gray-400"
              />
              <select className="w-full px-4 py-3.5 bg-[#f9fafb] border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#00A6A6]/20 focus:border-[#00A6A6]/30 transition-all text-[#1a1a1a]">
                <option>Relation</option>
                <option>Spouse</option>
                <option>Child</option>
                <option>Parent</option>
                <option>Sibling</option>
                <option>Other</option>
              </select>
              <input
                type="number"
                placeholder="Age"
                className="w-full px-4 py-3.5 bg-[#f9fafb] border border-gray-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#00A6A6]/20 focus:border-[#00A6A6]/30 transition-all text-[#1a1a1a] placeholder:text-gray-400"
              />

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowAddMember(false)}
                  className="flex-1 bg-white border-2 border-gray-200 text-[#1a1a1a] rounded-3xl py-3 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowAddMember(false)}
                  className="flex-1 bg-[#00A6A6] text-white rounded-3xl py-3 font-semibold hover:shadow-lg hover:shadow-[#00A6A6]/25 transition-all"
                >
                  Add Member
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {familyMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <Avatar id={member.avatarId} size="md" />

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1a1a1a] mb-1 truncate">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {member.relation} • {member.age} years
                  </p>
                </div>

                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5 text-xs bg-[#00A6A6]/15 text-[#00A6A6] px-3 py-2 rounded-full font-semibold">
                  <Pill className="w-3.5 h-3.5" />
                  <span>{member.activePrescriptions} active</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex gap-2">
                <Link
                  to="/add"
                  className="flex-1 text-center bg-[#00A6A6] text-white rounded-3xl py-2.5 text-sm font-semibold hover:shadow-lg hover:shadow-[#00A6A6]/25 transition-all"
                >
                  Add Prescription
                </Link>
                <Link
                  to="/search"
                  className="flex-1 text-center bg-white border border-gray-200 text-[#1a1a1a] rounded-3xl py-2.5 text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all"
                >
                  View History
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gradient-to-br from-[#FF85A3]/10 to-[#FFC759]/10 rounded-3xl p-5 border border-[#FF85A3]/20">
          <h4 className="font-bold text-[#1a1a1a] mb-2 flex items-center gap-2">
            <Info className="w-5 h-5 text-[#52489C]" />
            Family Management
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Keep track of prescriptions for all your family members in one place.
            Add members, upload their prescriptions, and get reminders for medications.
          </p>
        </div>
      </div>
    </div>
  );
}
