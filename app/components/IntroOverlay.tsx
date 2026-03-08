"use client";

export default function IntroOverlay() {
  return (
    <div className="intro-overlay fixed inset-0 z-[999] flex items-center justify-center bg-black">
      <h1 className="intro-phrase text-center text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-7xl">
        Welcome to Shivanshi's portfolio
      </h1>
    </div>
  );
}