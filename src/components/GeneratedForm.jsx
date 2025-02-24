import React, { useState } from "react";
import { useLocation } from "react-router";

const GeneratedForm = () => {
  const location = useLocation();
  const fields = location.state?.fields || [];
  const [formValues, setFormValues] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e, name) => {
    const { value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Submitted");
    console.log("Form Values:", formValues);
  };

  return (
    <div className="bg-gray-900 text-center text-white pt-12 min-h-screen flex justify-center">
      <div>
        <h2 className="text-6xl pb-15 font-bold">Generated Form</h2>
        <form
          className="flex flex-col gap-6 text-2xl text-white items-start w-full"
          onSubmit={handleSubmit}
        >
          {fields.length > 0 ? (
            fields.map((field, index) => (
              <label key={index} className="w-full text-white text-start">
                {field.type === "checkbox" ? (
                  <>
                    {field.name}{" "}
                    <input
                      type={field.type}
                      className="required self-start border border-slate-400 rounded-lg p-1 text-white"
                      onChange={(e) => handleChange(e, field.name)}
                    />
                  </>
                ) : (
                  <>
                    <input
                      type={field.type}
                      placeholder={field.name}
                      className="required w-full border border-slate-400 rounded-lg p-1 text-white"
                      onChange={(e) => handleChange(e, field.name)}
                    />
                  </>
                )}
              </label>
            ))
          ) : (
            <p>No fields available</p>
          )}
          <button
            className="cursor-pointer bg-pink-400 h-full w-full rounded-md p-3 text-lg
          hover:bg-pink-700 ease-in-out duration-400 self-center"
            type="submit"
            onClick={handleSubmit}
          >
            S U B M I T
          </button>
        </form>
        {isSubmitted && (
          <div className="mt-6">
            <h3 className="text-4xl">Form Values:</h3>
            <pre className="text-xl">{JSON.stringify(formValues, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratedForm;
