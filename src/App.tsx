import React from "react";
import JsonEditor from "./components/JsonEditor";
import FormGenerator from "./components/FormGenerator";

const App: React.FC = () => {
  const [schema, setSchema] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);

  const handleSchemaChange = (newSchema: any) => {
    try {
      setSchema(JSON.parse(newSchema));
      setError(null);
    } catch (e) {
      setError("Invalid JSON");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4">
        <JsonEditor onChange={handleSchemaChange} error={error} />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <FormGenerator schema={schema} />
      </div>
    </div>
  );
};

export default App;
