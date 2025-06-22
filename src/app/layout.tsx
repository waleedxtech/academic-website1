import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Waleed Abdullah',
  description: 'Personal portfolio showcasing projects and skills in electrical engineering.',
  icons: {
    icon: 'https://res.cloudinary.com/dcajabot9/image/upload/v1750574746/favicon_txl4mt.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Removed Google Font links for Inter and Space Grotesk */}
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
