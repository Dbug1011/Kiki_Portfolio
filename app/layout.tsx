import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/UI/Navbar";
import { SwitchProvider } from "./context/switch-context";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "Karis Ruth Jumawan",
  description: "She Goes Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>
        <SwitchProvider>{children}</SwitchProvider>
      </body>
    </html>
  );
}
