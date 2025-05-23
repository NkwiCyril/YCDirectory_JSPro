import { Suspense } from "react";
import "../globals.css";
import Loading from "../loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1 className="text-3xl">THIS IS THE ROOT</h1>
        {children}
      </body>
    </html>
  );
}
