"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" }
];

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <div>
      {navLinks.map(link => {
        const isActive = pathname === link.path || (pathname.startsWith(link.path) && link.path !== "/")

        return (
          <Link 
            href={link.path} 
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        )
      })}
      {children}
    </div>

    // <html lang="en">
    //   <body>
    //     <header
    //       style={{
    //         backgroundColor: "lightgreen",
    //         padding: "1rem",}}
    //     >
    //     </header>
    //     {children}
    //   </body>
    // </html>
  )
}