import Navbar from '@/components/layout/Navbar'; // This will be the refactored Sidebar
import Footer from '@/components/layout/Footer';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { PanelLeft } from 'lucide-react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true}> {/* Sidebar open by default on desktop */}
      <div className="flex min-h-screen bg-background"> {/* Ensure full height and bg color */}
        <Navbar /> {/* This renders the <Sidebar> component */}
        <SidebarInset className="flex-1 flex flex-col"> {/* flex-1 to take remaining space and flex-col for footer */}
          {/* Mobile Header with Sidebar Toggle */}
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 md:hidden">
            <SidebarTrigger className="-ml-2">
              <PanelLeft className="h-5 w-5" />
              <span className="sr-only">Toggle Sidebar</span>
            </SidebarTrigger>
            {/* You can add a mobile page title here if needed */}
          </header>
          <main className="flex-grow p-4 md:p-6">{children}</main>
          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
