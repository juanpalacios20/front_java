import { Input, Form, Button } from "@heroui/react";
import React, { useState } from "react";

export function FingerPrintScan() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-full max-w-xl p-8 shadow-md rounded-xl bg-white">
        <Form>
          <h1 className="text-center font-bold text-2xl mb-4">
            Administrar turno de bombero
          </h1>
          <Input
            placeholder="Escriba el codigo del bombero"
            label="Codigo del bombero"
            labelPlacement="outside"
          />
          <Button
            {...(isLoading ? { isLoading: true } : {})}
            color="primary"
            className="mt-4 w-full"
            variant="shadow"
            onPress={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 5000);
            }}
          >
            Escanear huella
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default FingerPrintScan;
