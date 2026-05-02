import { useState } from "react";

const avatars = [
  { id: 1, emoji: "👨", color: "#52489C" },
  { id: 2, emoji: "👩", color: "#00A6A6" },
  { id: 3, emoji: "👧", color: "#ec4899" },
  { id: 4, emoji: "👦", color: "#3b82f6" },
  { id: 5, emoji: "👴", color: "#f97316" },
  { id: 6, emoji: "👵", color: "#8b5cf6" },
  { id: 7, emoji: "🧑", color: "#14b8a6" },
  { id: 8, emoji: "👶", color: "#f59e0b" },
];

export default function AvatarSelector({
  selected,
  onSelect,
}: {
  selected?: number;
  onSelect: (id: number) => void;
}) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {avatars.map((avatar) => (
        <button
          key={avatar.id}
          onClick={() => onSelect(avatar.id)}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all ${
            selected === avatar.id
              ? "ring-4 ring-[#00A6A6] ring-offset-2 scale-110"
              : "ring-2 ring-gray-200 hover:scale-105"
          }`}
          style={{ backgroundColor: avatar.color + "20" }}
        >
          {avatar.emoji}
        </button>
      ))}
    </div>
  );
}

export function Avatar({ id, size = "md" }: { id: number; size?: "sm" | "md" | "lg" }) {
  const avatar = avatars.find((a) => a.id === id) || avatars[0];

  const sizeClasses = {
    sm: "w-8 h-8 text-base",
    md: "w-14 h-14 text-2xl",
    lg: "w-20 h-20 text-4xl",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center flex-shrink-0`}
      style={{ backgroundColor: avatar.color + "20" }}
    >
      {avatar.emoji}
    </div>
  );
}
