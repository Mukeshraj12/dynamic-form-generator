import React from "react";
import { useForm } from "react-hook-form";

interface FormGeneratorProps {
  schema: any;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (!schema) {
    return <p className="text-gray-500">Enter a JSON schema to preview the form.</p>;
  }

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Form submitted! Check the console for data.");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {schema.fields.map((field: any) => {
        switch (field.type) {
          case "text":
          case "email":
            return (
              <div key={field.id}>
                <label>{field.label}</label>
                <input
                  type={field.type}
                  {...register(field.id, { required: field.required })}
                  placeholder={field.placeholder}
                  className="w-full border rounded p-2"
                />
                {errors[field.id] && <p className="text-red-500">This field is required</p>}
              </div>
            );
          case "select":
            return (
              <div key={field.id}>
                <label>{field.label}</label>
                <select
                  {...register(field.id, { required: field.required })}
                  className="w-full border rounded p-2"
                >
                  <option value="">Select...</option>
                  {field.options.map((option: any) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors[field.id] && <p className="text-red-500">This field is required</p>}
              </div>
            );
          case "textarea":
            return (
              <div key={field.id}>
                <label>{field.label}</label>
                <textarea
                  {...register(field.id, { required: field.required })}
                  placeholder={field.placeholder}
                  className="w-full border rounded p-2"
                ></textarea>
              </div>
            );
          default:
            return null;
        }
      })}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default FormGenerator;
