import React from "react";

const Form = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) => {
  const renderInputByControlItem = (getControlItem) => {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <input
            name={getControlItem.name}
            className="w-96 placeholder:text-blue-950 placeholder:font-medium placeholder:text-lg outline-0 text-lg font-bold text-blue-950 bg-blue-950/10 py-1.5 px-2 rounded-full"
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={getControlItem.value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );

        break;

      case "textarea":
        element = (
          <textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            value={value}
            onChange={(e) =>
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              })
            }
          />
        );
        break;

      default:
        break;
    }
    return element;
  };

  return (
    <form
      action=""
      onSubmit={onSubmit}
      className="flex flex-col items-center   shadow-md rounded-2xl py-10 px-8 min-w-96 h-auto"
    >
      <div className="flex flex-col gap-8">
        {formControls.map((item) => (
          <div className="grid gap-2 w-full" key={item.id}>
            <label className="mb-1 text-blue-950 font-bold text-lg">
              {item.label}
            </label>
            {renderInputByControlItem(item)}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="text-xl font-bold w-full bg-blue-900 mt-4 rounded-full py-1 text-orange-600 cursor-pointer hover:bg-blue-950 transition-all duration-150"
      >
        {buttonText || "Submit"}
      </button>
    </form>
  );
};

export default Form;
