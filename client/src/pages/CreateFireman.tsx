import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import App from "../App";
import { useNavigate } from "react-router";

export function CreateFireman() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    nuip: "",
    email: "",
    gs: "",
  });
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
              defaultValue={formData.name}
            />
            <Input
              isRequired
              variant="bordered"
              name="code"
              label="Código"
              labelPlacement="outside"
              placeholder="Ingresa el código"
              defaultValue={formData.code}
            />
            <Input
              isRequired
              variant="bordered"
              name="nuip"
              label="Documento de identidad"
              labelPlacement="outside"
              placeholder="Ingresa el documento de identidad"
              type="number"
              defaultValue={formData.nuip}
              min={1}
              max={9999999999}
            />
            <Select
              isRequired
              label="Tipo de sangre"
              labelPlacement="outside"
              placeholder="Selecciona el tipo de sangre"
              variant="bordered"
              defaultSelectedKeys={[formData.gs]}
            >
              <SelectItem>A+</SelectItem>
              <SelectItem>A-</SelectItem>
              <SelectItem>B+</SelectItem>
              <SelectItem>B-</SelectItem>
              <SelectItem>AB+</SelectItem>
              <SelectItem>AB-</SelectItem>
              <SelectItem>O+</SelectItem>
              <SelectItem>O-</SelectItem>
            </Select>
            <Input
              isRequired
              variant="bordered"
              type="email"
              name="email"
              label="Correo electrónico"
              labelPlacement="outside"
              placeholder="Ingresa el correo electrónico"
              defaultValue={formData.email}
            />
            <div className="flex gap-2 justify-center items-center">
              <Button
                color="primary"
                variant="shadow"
                cursor-pointer="true"
                type="submit"
                onPress={onOpen}
              >
                Crear
              </Button>
              <Button
                type="reset"
                variant="light"
                cursor-pointer="true"
                onPress={() => navigate("/Home")}
              >
                Cancelar
              </Button>
              <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                      ⚠️ Información importante
                      </ModalHeader>
                      <ModalBody>
                      <div className="flex flex-col gap-2">
                      <p className="text-sm">
                        1. Verificar que tiene el lector de huella conectado correctamente.
                      </p>
                      <p className="text-sm">
                        2. Al presionar el botón <strong>"Crear"</strong>, tendrá <strong>5 segundos</strong> para colocar la huella en el lector.
                      </p>
                      <p className="text-sm ">
                        3. Si la huella se registra correctamente dentro de ese tiempo, el bombero se creará corrrectamente.
                      </p>
                      <p className="text-sm">
                        4. Si no se coloca la huella a tiempo, el bombero no se creará y tendrá que intentarlo nuevamente.
                      </p>
                      <p className="text-sm">
                        <strong>Nota: es obligatorio que el bombero tenga registrada una huella.</strong>
                      </p>
                    </div>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Cancelar
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Continuar
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </>
        </Form>
      </div>
    </div>
  );
}

export default CreateFireman;
