import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Define the Roboto font with weight 500
const roboto = Roboto({
  weight: "500",
  subsets: ["latin"], // Adding a subset for better performance and compatibility
});

// Metadata for the document
export const metadata: Metadata = {
  title: "Gmail Clone",
  description: "Created by Abhishek Tilkar",
};

// The root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
