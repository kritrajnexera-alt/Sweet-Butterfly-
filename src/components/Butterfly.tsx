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
        d="M100 80C100 80 60 45 30 50C0 55 5 80 5 80C5 80 0 105 30 110C60 115 100 80 100 80Z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M100 80C100 80 140 45 170 50C200 55 195 80 195 80C195 80 200 105 170 110C140 115 100 80 100 80Z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M100 80C100 80 80 120 85 140C90 160 100 155 100 155C100 155 110 160 115 140C120 120 100 80 100 80Z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M100 70C102 68 104 65 104 60C104 55 102 52 100 50C98 52 96 55 96 60C96 65 98 68 100 70Z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M100 80C100 80 70 55 45 58C25 60 20 75 20 80C20 85 25 100 45 102C70 105 100 80 100 80Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M100 80C100 80 130 55 155 58C175 60 180 75 180 80C180 85 175 100 155 102C130 105 100 80 100 80Z"
        fill="currentColor"
        opacity="0.15"
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
        d="M50 40C50 40 30 22 15 25C0 28 2 40 2 40C2 40 0 52 15 55C30 58 50 40 50 40Z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M50 40C50 40 70 22 85 25C100 28 98 40 98 40C98 40 100 52 85 55C70 58 50 40 50 40Z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M50 35C51 33 52 31 52 28C52 25 51 23 50 22C49 23 48 25 48 28C48 31 49 33 50 35Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}
