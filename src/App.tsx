import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col pt-[50px]">  
        <div className="w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
