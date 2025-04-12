import { Button } from "./ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center absolute top-0 z-10 w-full py-3 border-b border-border px-0 md:px-4 bg-background">
      <div className="relative mx-auto flex items-center justify-between w-full max-w-7xl">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/assets/images/logo.svg" alt="Captin" width={20} height={20} />
          <h1 className="text-xl font-bold">Captin</h1>
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <Button variant="ghost" className="rounded-full">
            Features
          </Button>
          <Button variant="ghost" className="rounded-full">
            Pricing
          </Button>
          <Button variant="ghost" className="rounded-full">
            About
          </Button>
          <Button variant="ghost" className="rounded-full">
            FAQ
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="font-bold rounded-full">
            Log In
          </Button>
          <Button variant="action" className="font-bold rounded-full">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
