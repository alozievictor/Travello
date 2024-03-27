import React from "react";

const Loader = ({ open, children }) => {
  return (
    <div
      className={`
            fixed inset-0 flex justify-center items-center transition-colors
            ${open ? "visible bg-black/60" : "invisible"}
        `}
    >
      <div
        onClose={(e) => e.stopPropagation()}
        className={`bg-white md:w-[35%] mx-auto rounded-md p-5 transition-all 
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          `}
      >
        {children}
      </div>
    </div>
  );
};

export default Loader;
