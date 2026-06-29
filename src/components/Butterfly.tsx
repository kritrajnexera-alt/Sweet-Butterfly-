"use client";

export function ButterflyGold({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M100 85C100 85 55 40 25 48C-2 55 2 80 2 80C2 80 -2 105 25 112C55 120 100 85 100 85Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M100 85C100 85 145 40 175 48C202 55 198 80 198 80C198 80 202 105 175 112C145 120 100 85 100 85Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M100 85C100 85 78 125 83 145C88 162 100 158 100 158C100 158 112 162 117 145C122 125 100 85 100 85Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M100 72C103 69 106 65 106 58C106 51 103 47 100 45C97 47 94 51 94 58C94 65 97 69 100 72Z"
        fill="currentColor"
        opacity="0.6"
      />
      <ellipse cx="88" cy="66" rx="3" ry="2" fill="currentColor" opacity="0.4" />
      <ellipse cx="112" cy="66" rx="3" ry="2" fill="currentColor" opacity="0.4" />
      <path
        d="M100 85C100 85 68 58 42 62C20 65 15 80 15 85C15 90 20 105 42 108C68 112 100 85 100 85Z"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M100 85C100 85 132 58 158 62C180 65 185 80 185 85C185 90 180 105 158 108C132 112 100 85 100 85Z"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M100 88C100 88 48 50 22 56C-1 62 2 82 2 82"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.15"
        fill="none"
      />
      <path
        d="M100 88C100 88 152 50 178 56C201 62 198 82 198 82"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.15"
        fill="none"
      />
    </svg>
  );
}

export function ButterflySmall({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 42C50 42 28 20 13 24C0 28 2 40 2 40C2 40 0 52 13 56C28 60 50 42 50 42Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M50 42C50 42 72 20 87 24C100 28 98 40 98 40C98 40 100 52 87 56C72 60 50 42 50 42Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M50 36C51 34 52 31 52 28C52 24 51 22 50 21C49 22 48 24 48 28C48 31 49 34 50 36Z"
        fill="currentColor"
        opacity="0.7"
      />
      <ellipse cx="44" cy="34" rx="2" ry="1.5" fill="currentColor" opacity="0.4" />
      <ellipse cx="56" cy="34" rx="2" ry="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
