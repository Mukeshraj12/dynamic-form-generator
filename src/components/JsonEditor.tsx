import React from "react";

interface JsonEditorProps {
  onChange: (value: string) => void;
  error: string | null;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onChange, error }) => {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange(inputValue);
  };

  return (
    <div>
      <textarea
        value={value}
        onChange={handleChange}
        className="w-full h-96 p-2 border rounded"
        placeholder="Enter JSON schema here..."
      ></textarea>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JsonEditor;
