import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({href, children}) => {
  const pathname = usePathname();

  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={`py-2.5 px-4 flex items-center justify-center gap-1 rounded-lg font-medium ${
        isActive
          ? "bg-[#244D3F] text-white"
          : "text-[#64748B]"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
