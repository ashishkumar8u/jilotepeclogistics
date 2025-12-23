import { ArrowRight, Package } from "lucide-react";
import Link from "next/link";

export default function WarehouseCTA() {
  return (
    <div className="py-16 flex items-center justify-center bg-white w-full">
      <div className="text-center space-y-8 px-4">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
            <Package className="w-8 h-8 text-[#173c65]" />
          </div>
          <h1 className="xl:text-3xl lg:text-2xl text-xl text-[#173c65] font-bold text-balance">
            Modern Warehouse Solutions
          </h1>
          <p className="md:text-base text-sm text-slate-600 max-w-2xl mx-auto text-pretty">
            Streamline your logistics, optimize inventory management, and scale
            your operations with our cutting-edge warehouse technology
          </p>
        </div>
        <div className="w-full text-center">
  <Link href='#contact'
    className="mx-auto md:w-1/3 w-[60%] cursor-pointer text-nowrap flex items-center justify-center gap-2
               bg-[#173c65] hover:bg-blue-700
               text-white px-4 py-4 text-lg font-semibold
               rounded-lg shadow-lg hover:shadow-xl
               transition-all duration-300 group"
  >
    Get Started Today
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Link>
</div>

      </div>
    </div>
  );
}
