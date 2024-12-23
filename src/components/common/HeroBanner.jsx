import React from "react";

export default function HeroBanner({
  title,
  subtitle,
  bgColor = "#0d121d",
  textColor = "#f4f4f4",
  className,
}) {
  return (
    <section
      className="flex items-center justify-center min-h-[60vh] p-8 text-center border-gray-800"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="max-w-5xl space-y-6">
        <h1
          className={`text-2xl font-bold md:text-3xl lg:text-5xl 2xl:text-6xl leading-[4.5rem]${className} `}
        >
          {title}
        </h1>
        <p className="max-w-3xl mx-auto md:text-lg lg:text-xl text-gray-400">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
