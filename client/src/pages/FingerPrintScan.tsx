import { Input, Form, Button } from "@heroui/react";
import React, { useState } from "react";
import { Link } from "react-router";

interface ResponseData {
  message: string | null;
  username: string | null;
}

export function FingerPrintScan() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    message?: string;
    flask_response?: string;
  } | null>(null);
  const [responseData, setResponseData] = useState<ResponseData | null>(null);

  const handleScan = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/fingerprint/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      console.log("Respuesta del servidor:", json);
      let parsedFlask: Partial<ResponseData> = {};

      if (json.flask_response) {
        try {
          parsedFlask = JSON.parse(json.flask_response);
        } catch (e) {
          console.warn("No se pudo parsear flask_response:", e);
        }
      }

      if (response.status === 500) {
        setResponseData({
          message: "Ha ocurrido un error inesperado, intentelo nuevamente",
          username: null,
        });
        return;
      }
      const message =
        parsedFlask.message || json.message || "Ocurrió un error inesperado";

      const username = parsedFlask.username || null;

      setResponseData({
        message,
        username,
      });
    } catch (error: any) {
      console.error("Ocurrio un error:", error);
      setResponseData({
        message: "No se pudo conectar con el servidor",
        username: null,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-full max-w-xl">
        <Link
          to="/"
          className="top-4 left-4 text-lg text-gray-700 underline cursor-auto"
        >
          volver
        </Link>
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

            {responseData?.message && (
              <div className="mt-6 text-center text-sm text-gray-700">
                <p>{responseData.username} {responseData.message}</p>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}

export default FingerPrintScan;
