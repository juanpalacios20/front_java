import { Button, Image } from "@heroui/react";
import React from "react";
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col gap-6 items-center w-full max-w-xl p-8 shadow-md rounded-xl bg-white">
        <div className="flex flex-col gap-6 items-center justify-center w-full max-w-xl p-8 rounded-xl">
          <img alt="Logo" src="/img/logo.png" width={200} height={200}></img>
          <div className="flex gap-6 items-center justify-center w-full max-w-xl p-8 rounded-xl bg-white">
            <Button
              color="primary"
              variant="shadow"
              cursor-pointer="true"
              onPress={() => navigate("/CreateForm")}
            >
              Crear nuevo bombero
            </Button>
            <Button color="primary" variant="shadow" cursor-pointer="true" onPress={() => navigate("/Scan")}>
              Registrar turno
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
