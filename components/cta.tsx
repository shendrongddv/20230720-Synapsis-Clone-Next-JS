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
            <h2 className="font-bold text-3xl font-display md:text-4xl text-slate-800">
              Let&apos;s start monitoring your devices.
            </h2>
            <p>With CONNEX, We are here to solve your problems.</p>
          </div>

          {/* Col */}
          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "default",
                className:
                  "rounded-full px-6 font-semibold bg-gradient-to-tr from-sky-800 via-sky-600 to-sky-300",
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
