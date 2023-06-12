const FormField = ({ name, type, text, errorText, onChange }) => {
  const handleOnChange = (e) => {
    onChange({
      value: e.target.value,
      name,
    });
  };
  const symbolsArr = ["e", "E", "+", "-", "."];

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm text-gray-400">
        {text}
        <span className="text-red-500 inline-flex pl-0.5">*</span>
      </label>
      <input
        id={name}
        type={type}
        onChange={handleOnChange}
        onKeyDown={(e) =>
          type === "number" && symbolsArr.includes(e.key) && e.preventDefault()
        }
        className="border rounded-md px-2 py-1.5 focus:border-primary outline-0 focus:shadow-sm mb-3 lg:mb-4"
      />
      {errorText && <div className="text-red-500">{errorText}</div>}
    </div>
  );
};

export default FormField;
