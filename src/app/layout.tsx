import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ErrorWrapper } from "./error-wrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Next js",
    template: "Next js | %s",
    absolute: ""
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
            "textAlign": "center"
          }}
        >
          <p>Header</p>
        </header>
        <ErrorWrapper>
          {children}
        </ErrorWrapper>
        <footer 
          style={{
            backgroundColor: "lightGray",
            padding: "1rem",
            textAlign: "center"
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
