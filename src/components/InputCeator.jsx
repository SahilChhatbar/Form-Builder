import React from "react";

const InputCeator = ({ fieldName, setFieldName }) => {
  return (
    <div>
      {" "}
      <p className="text-lg">
        <span className="border b-t-1 rounded-full px-2 text-base">!</span> This
        form allows you to create and update inputs. The Generate Form button
        will create a new form with the updates.
      </p>
      <div className="flex flex-col gap-3">
        <label htmlFor="name" className="text-lg">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
          className="cursor-pointer text-black text-xl
      bg-slate-50 border b-t-1 rounded-md p-2"
        />
      </div>
    </div>
  );
};

export default InputCeator;
