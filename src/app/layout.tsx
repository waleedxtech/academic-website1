import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Waleed Abdullah',
  description: 'Personal portfolio showcasing projects and skills in electrical engineering.',
  icons: {
    icon: 'https://drive.google.com/uc?export=view&id=1ZvDFyk3RdBEw7qC1INEvq0y4UrxogHJZ',
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
