import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

import { CalendarRange } from "lucide-react";

export const CTAFooter = () => {
  return (
    <div className="px-6 py-28 bg-gradient-to-b from-transparent to-[#ECF8FD]">
      <div className="container">
        <div className="rounded-3xl md:rounded-3xl bg-white drop-shadow-2xl md:p-20 px-4 py-10 flex flex-col md:flex-row md:justify-between md:items-center gap-12 items-center">
          {/* Col */}
          <div className="flex flex-col max-md:text-center space-y-4">
            <h2 className="h2 text-slate-800">
              Let&apos;s start monitoring your devices.
            </h2>
            <p>With CONNEX, We are here to solve your problems.</p>
          </div>

          {/* Col */}
          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "gradient",
                className: "px-6 py-6",
              })
            )}
          >
            <CalendarRange className="h-4 w-4 mr-2" />
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};
