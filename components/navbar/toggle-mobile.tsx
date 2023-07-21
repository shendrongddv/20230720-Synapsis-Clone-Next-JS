"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { menus } from "./navbar-list";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ToggleMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="h-10 w-10 p-1 rounded-full flex justify-center items-center bg-gradient-to-br shadow from-primary-foreground to-secondary-foreground text-white hover:text-white"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="w-full h-full pb-10">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {/* Content */}
        <div className="my-10 flex flex-col items-center gap-2">
          {menus.map((item) => (
            <SheetClose key={item.id} asChild>
              <Link
                href={item.href}
                className={cn(
                  buttonVariants({
                    variant: "link",
                    size: "lg",
                    className: "font-semibold text-lg",
                  })
                )}
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </div>
        {/* ./ Content */}
        <SheetFooter>
          <SheetClose asChild>
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "gradient",
                  size: "lg",
                  className: "px-6 rounded-full w-max mx-auto",
                })
              )}
            >
              Get In Touch
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
