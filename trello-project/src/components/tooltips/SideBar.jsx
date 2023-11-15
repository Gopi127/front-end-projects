import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function SideBar({ children, text }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div
      className="relative inline-block cursor-pointer hover:block"
      onMouseOver={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute bg-tooltipColor text-black min-w-[110px] h-5 text-white-500 z-[1] text-xs top-full right-7 mt-3 translate-x-2/4 hover:block rounded-[5px] flex justify-center items-center p-2">
          {text}
        </div>
      )}
    </div>
  );
}
