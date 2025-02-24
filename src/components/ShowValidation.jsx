import { useState } from "react";

export default function ValidationOptions() {
  const [showValidation, setShowValidation] = useState(false);

  const handleValidationChange = () => {
    setShowValidation(!showValidation);
  };

  return (
    <div className="text-lg">
      <input
        type="checkbox"
        className="cursor-pointer"
        onChange={handleValidationChange}
      />{" "}
      Show Validation
      {showValidation && (
        <div className="flex flex-col gap-3 border border-cyan-200 p-3 rounded-md">
          <label className="text-lg">
            <input type="checkbox" className="cursor-pointer" /> Required
          </label>
          <label className="text-lg flex flex-col">
            Min:
            <input
              type="number"
              className="cursor-pointer text-black text-xl bg-slate-50 border b-t-1 rounded-md p-2"
            />
          </label>
          <label className="text-lg flex flex-col">
            Max:
            <input
              type="number"
              className="cursor-pointer text-black text-xl bg-slate-50 border b-t-1 rounded-md p-2"
            />
          </label>
          <label className="text-lg flex flex-col">
            Max Length:
            <input
              type="number"
              className="cursor-pointer text-black text-xl bg-slate-50 border b-t-1 rounded-md p-2"
            />
          </label>
          <label className="text-lg flex flex-col">
            Pattern:
            <input
              type="text"
              className="cursor-pointer text-black text-xl bg-slate-50 border b-t-1 rounded-md p-2"
            />
          </label>
        </div>
      )}
    </div>
  );
}
