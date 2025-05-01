import Image from "next/image";
import { Input } from "@/components/ui/input";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Vienvenidos al covnertidor de  word a pdf</h1>
      <Input  type="file"  />
    </main>
  );
}
