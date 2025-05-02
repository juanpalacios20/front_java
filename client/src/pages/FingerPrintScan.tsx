import { Input, Form, Button } from "@heroui/react";
import React, { useState } from "react";

export function FingerPrintScan() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ message?: string; flask_response?: string } | null>(null);

  const handleScan = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/fingerprint/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error desconocido");
      }

      setResult(data);
    } catch (error) {
      setResult({ message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-full max-w-xl p-8 shadow-md rounded-xl bg-white">
        <Form>
          <h1 className="text-center font-bold text-2xl mb-4">
            Administrar turno de bombero
          </h1>
          <Button
            isLoading={isLoading}
            color="primary"
            className="mt-4 w-full"
            variant="shadow"
            onPress={handleScan}
          >
            Escanear huella
          </Button>

          {result && (
            <div className="mt-6 text-center text-sm text-gray-700">
              {result.message && <p>{result.message}</p>}
              {result.flask_response && <pre>{JSON.stringify(JSON.parse(result.flask_response), null, 2)}</pre>}
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

export default FingerPrintScan;
