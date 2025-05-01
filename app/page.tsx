import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function Home() {
  const [file,setFile] = useState<File | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/convert", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      console.error("Error al convertir el archivo");
      return;
    }
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center  p-2 ">
      <h1 className="text-3xl font-bold">Bienvenidos al convertidor de Word a PDF</h1>
      <Input  className="w-full max-w-sm mt-4" type="file" placeholder="Seleciona el achivo a convertir" onChange={handleChange} />
    </main>
  );
}
