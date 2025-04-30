import React from "react";
import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import App from "../App";
import { Router } from "react-router";

export function CreateFireman() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-full max-w-xl p-8 shadow-md rounded-xl bg-white">
        <Form
          validationBehavior="native"
          className="flex flex-col gap-6 items-center"
        >
          <h1 className="text-2xl font-bold text-center">Crear Bombero</h1>
          <>
            <Input
              isRequired
              variant="bordered"
              name="name"
              label="Nombre completo"
              labelPlacement="outside"
              placeholder="Ingresa el nombre completo"
            />
            <Input
              isRequired
              variant="bordered"
              name="code"
              label="Código"
              labelPlacement="outside"
              placeholder="Ingresa el código"
            />
            <Input
              isRequired
              variant="bordered"
              name="nuip"
              label="Documento de identidad"
              labelPlacement="outside"
              placeholder="Ingresa el documento de identidad"
              type="number"
              min={1}
              max={9999999999}
            />
            <Select label="Tipo de sangre" labelPlacement="outside" placeholder="Selecciona el tipo de sangre" variant="bordered">
              <SelectItem >A+</SelectItem>
              <SelectItem >A-</SelectItem>
              <SelectItem >B+</SelectItem>
              <SelectItem >B-</SelectItem>
              <SelectItem >AB+</SelectItem>
              <SelectItem >AB-</SelectItem>
              <SelectItem >O+</SelectItem>
              <SelectItem >O-</SelectItem>
            </Select>
            <Input
              isRequired
              variant="bordered"
              type="email"
              name="email"
              label="Correo electrónico"
              labelPlacement="outside"
              placeholder="Ingresa el correo electrónico"
            />
            <div className="flex gap-2 justify-center items-center">
              <Button
                color="primary"
                variant="shadow"
                cursor-pointer="true"
                type="submit"
              >
                Crear
              </Button>
              <Button type="reset" variant="light" cursor-pointer="true">
                Cancelar
              </Button>
            </div>
          </>
        </Form>
      </div>
    </div>
  );
}

export default CreateFireman;
