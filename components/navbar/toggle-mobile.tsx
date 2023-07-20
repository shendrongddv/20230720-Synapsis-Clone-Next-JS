import { Button } from "@/components/ui/button";
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
      <SheetContent
        side="right"
        className="w-full p-0 h-full bg-gradient-to-br from-primary-foreground to-secondary-foreground"
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {/* Content */}
        <div className="w-full h-full px-6 py-10 space-y-2">
          <SheetClose asChild>
            <Button
              type="submit"
              variant="ghost"
              className="text-base font-semibold text-white -translate-x-4 hover:translate-x-0 duration-300 transition ease-linear hover:bg-white/10 hover:text-white rounded-full w-full justify-start"
            >
              Save changes
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              type="submit"
              variant="ghost"
              className="text-base font-semibold text-white -translate-x-4 hover:translate-x-0 duration-300 transition ease-linear hover:bg-white/10 hover:text-white rounded-full w-full justify-start"
            >
              Save changes
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              type="submit"
              variant="ghost"
              className="text-base font-semibold text-white -translate-x-4 hover:translate-x-0 duration-300 transition ease-linear hover:bg-white/10 hover:text-white rounded-full w-full justify-start"
            >
              Save changes
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              type="submit"
              variant="ghost"
              className="text-base font-semibold text-white -translate-x-4 hover:translate-x-0 duration-300 transition ease-linear hover:bg-white/10 hover:text-white rounded-full w-full justify-start"
            >
              Save changes
            </Button>
          </SheetClose>
        </div>
        {/* ./ Content */}
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
