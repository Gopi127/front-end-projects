import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function StarTooltip({ children, text }) {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div
      className="relative inline-block cursor-pointer hover:block"
      onMouseOver={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <div className="absolute bg-tooltipBgColor text-titleColor w-[450px] h-14 text-white-500 z-[1] top-full right-[-50%] mt-3 translate-x-2/4 hover:block rounded-[5px] flex justify-center items-center p-3">
          {text}
        </div>
      )}
    </div>
  );
}
