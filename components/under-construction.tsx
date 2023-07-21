import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const UnderConstruction = () => {
  return (
    <section className="px-4 pt-36 pb-16">
      <div className="container">
        <div className="flex w-full flex-col text-center items-center">
          <h2 className="h2 text-slate-800">Under Construction!</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            alias libero quia.
          </p>

          <Link
            href="/"
            className={cn(
              buttonVariants({
                variant: "gradient",
                size: "lg",
                className: "px-6 rounded-full mt-10",
              })
            )}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UnderConstruction;
