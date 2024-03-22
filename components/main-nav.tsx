import Link from "next/link";

import { siteConfig } from "@/config/site";

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/0bda0293-e6b0-4ed0-9201-d8858fb1fdb7/dexz0rs-117517cc-0a48-44ca-b04d-310f807d5a54.png" // Substitua "URL_DA_IMAGEM" pela URL da imagem desejada
          alt="Logo"
          className="h-7 w-7" 
        />
        <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  );
};