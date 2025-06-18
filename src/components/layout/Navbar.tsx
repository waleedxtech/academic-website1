import Link from 'next/link';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { User, Zap, FlaskConical, BookText, Briefcase, LayoutGrid, Award, Lightbulb, Code } from 'lucide-react';

const navItems = [
  { href: '/#about', label: 'About', icon: User },
  { href: '/#skills', label: 'Skills', icon: Code },
  { href: '/#education', label: 'Education', icon: Award },
  { href: '/#coursework', label: 'Coursework', icon: BookText },
  { href: '/#research', label: 'Research', icon: FlaskConical },
  { href: '/#publications', label: 'Publications', icon: BookText }, // Consider a different icon if needed
  { href: '/#experience', label: 'Experience', icon: Briefcase },
  { href: '/#projects', label: 'Projects', icon: LayoutGrid },
  { href: '/#awards', label: 'Awards', icon: Award },
  { href: '/#hobbies', label: 'Hobbies', icon: Lightbulb },
];

export default function Navbar() { // This component now renders the application's sidebar
  return (
    <Sidebar collapsible="icon" className="border-r hidden md:flex"> {/* Hidden on mobile, SidebarProvider handles mobile via Sheet */}
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-lg text-sidebar-foreground hover:text-primary transition-colors font-headline">
            Waleed Abdullah
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.label + item.href}>
              <SidebarMenuButton 
                asChild 
                tooltip={{ content: item.label, side: 'right', className: 'font-body' }}
              >
                <Link href={item.href} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
