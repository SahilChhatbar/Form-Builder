import React from "react";
import { useForm } from "react-hook-form";
import input from "../Input.json";
import Border from "./Border.jsx";
import { useState } from "react";
import ShowValidation from "./ShowValidation.jsx";
import LayoutSection from "./LayoutSection.jsx";
import InputCeator from "./InputCeator.jsx";
import { useNavigate } from "react-router";

export default function Layout() {
  const { register } = useForm();
  const [fields, setFields] = useState([]);
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState(input.inputTypes[0]);
  const navigate = useNavigate();
  const handleCreateField = () => {
    if (!fieldName) {
      alert("Enter name");
      return;
    }
    setFields([...fields, { name: fieldName, type: fieldType }]);
    setFieldName("");
    setFieldType(input.inputTypes[0]);
  };

  const handleGenerateForm = () => {
    console.log("Navigating with fields:", fields);
    navigate("/generate", { state: { fields } });
  };

  return (
    <>
      <div className="bg-gray-900 text-center  text-white pt-12 text-6xl font-bold">
        Form Builder
      </div>
      <div className="flex flex-row min-h-screen gap-0 bg-gray-900 justify-center text-white">
        <div className="basis-1/2 flex flex-col gap-5 p-18">
          <Border title="Layout" />
          <LayoutSection fields={fields} setFields={setFields} />
        </div>
        <div className="basis-1/2 flex flex-col gap-5 p-18">
          <Border title="Input Creator" />
          <InputCeator fieldName={fieldName} setFieldName={setFieldName} />
          <div className="flex flex-col gap-3">
            <label htmlFor="type" className="text-lg">
              Type:
            </label>
            <select
              id="type"
              value={fieldType}
              onChange={(e) => setFieldType(e.target.value)}
              className="cursor-pointer text-xl bg-slate-50 text-black border b-t-1 rounded-md p-2"
            >
              {input.inputTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ShowValidation />
            <button
              onClick={handleCreateField}
              className="cursor-pointer bg-pink-400
            h-full w-full rounded-md p-3 text-lg hover:bg-pink-700 ease-in-out duration-400"
            >
              C R E A T E
            </button>
            <div className="flex items-center gap-5 text-lg">
              <span className="border-t border-white flex-grow"></span>
              <span>or</span>
              <span className="border-t border-white flex-grow"></span>
            </div>
            <button
              className="cursor-pointer bg-black border border-pink-400 h-full
            w-full text-lg rounded-md p-3 hover:bg-gray-800 ease-in-out duration-300"
              onClick={handleGenerateForm}
            >
              <pre className="px-3">G E N E R A T E F O R M</pre>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
