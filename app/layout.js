import "./globals.css";
import { Roboto_Slab } from "next/font/google";

const roboto_slab = Roboto_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Phillips Netflix Clone",
  description: "Netflix Clone Tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_slab.className}>{children}</body>
    </html>
  );
}
