import React from "react";

const Border = ({ title }) => {
  return (
    <div className="flex items-center gap-5 text-4xl">
      <span className="border-t border-white flex-grow"></span>
      <span>{title}</span>
      <span className="border-t border-white flex-grow"></span>
    </div>
  );
};

export default Border;
