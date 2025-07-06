import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]" >
     {/* <div className="p-4 space-y-2">
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
        <p>hi</p>
      </div> */}
    <Navbar/>
    <Sidebar/ >
  
    </div>
  );
}
