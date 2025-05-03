'use client'
import { Input } from "@/components/ui/input";
import { useState } from "react";
export default function Home() {
  const [file,setFile] = useState<File | null>(null);
  const [fileName,setFileName] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("https://api.apyhub.com/convert/word-file/pdf-file", {
      method: "POST",
      headers: {
        
        "apy-token": process.env.APY_TOKEN || "",
      },
      
      body: formData,
      
    });
    if (response.status === 200) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileName?.split(".")[0]}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    }
    if (!response.ok) {
      console.error("Error al convertir el archivo");
      console.error(response);
      return;
    }
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center  p-2 ">
      <h1 className="text-3xl font-bold">Bienvenidos al convertidor de Word a PDF</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <Input  className="w-full max-w-sm mt-4" type="file" placeholder="Seleciona el achivo a convertir" onChange={handleChange} />
        <button type="submit" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded">Convertir</button>
      </form>
    </main>
  );
}
