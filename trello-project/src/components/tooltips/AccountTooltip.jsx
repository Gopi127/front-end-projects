import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AccountTooltip({ children, text }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div
      className="relative inline-block cursor-pointer hover:block"
      onMouseOver={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute bg-tooltipBgColor text-titleColor min-w-24 h-10 text-white-500 z-[1] top-full left-0 mt-3 translate-x-2/4 hover:block rounded-[5px] flex justify-center items-center p-3">
          {text}
        </div>
      )}
    </div>
  );
}
