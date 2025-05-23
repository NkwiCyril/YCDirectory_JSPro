import "../../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1 className="text-3xl">Welcome to the Dashboard!</h1>
        {children}
      </body>
    </html>
  );
}
