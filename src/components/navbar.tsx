"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils"; // Assuming you have the standard shadcn utility

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Helper to determine if a link is active
  const getIsActive = (href: string) => pathname === href;

  const NavItem = ({ 
    href, 
    label, 
    icon: Icon, 
    isExternal = false 
  }: { 
    href: string; 
    label: string; 
    icon: any; 
    isExternal?: boolean 
  }) => {
    const isActive = getIsActive(href);

    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={() => setIsMobileOpen(false)}
        className="relative group flex flex-col items-center gap-1 py-3 w-full transition-all"
        title={label}
        aria-current={isActive ? "page" : undefined}
      >
        {/* Animated Active Indicator */}
        {isActive && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 bg-purple-500/10 dark:bg-white/5 border-r-2 border-purple-500"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

        <div
          className={cn(
            "relative z-10 p-3 rounded-xl transition-all duration-300 group-hover:scale-110",
            isActive
              ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/40"
              : "bg-secondary/50 text-muted-foreground group-hover:bg-secondary group-hover:text-foreground"
          )}
        >
          <Icon className="size-5" />
        </div>
        
        <span className={cn(
          "relative z-10 text-[10px] font-bold uppercase tracking-tighter transition-colors duration-200",
          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
        )}>
          {label}
        </span>
      </Link>
    );
  };

  const NavContent = (
    <div className="flex flex-col items-center h-full w-full">
      {/* Main Navigation */}
      <div className="flex flex-col gap-2 items-center py-6 w-full">
        {DATA.navbar.map((item) => (
          <NavItem 
            key={item.href} 
            href={item.href} 
            label={item.label} 
            icon={item.icon} 
            isExternal={item.href.startsWith("http")}
          />
        ))}
      </div>

      <Separator className="w-10 opacity-50" />

      {/* Social Links */}
      <div className="flex flex-col gap-2 items-center py-6 w-full">
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <NavItem 
              key={name} 
              href={social.url} 
              label={name} 
              icon={social.icon} 
              isExternal 
            />
          ))}
      </div>

      {/* Theme Toggle at Bottom */}
      <div className="mt-auto flex flex-col items-center gap-4 py-8">
        <Separator className="w-10 opacity-50" />
        <div className="hover:scale-110 transition-transform">
          <ModeToggle />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-screen w-24 flex-col items-center z-50 border-r border-border/40 bg-background/60 backdrop-blur-xl transition-all"
        style={{
          boxShadow: "1px 0 20px rgba(0,0,0,0.05)"
        }}
      >
        {NavContent}
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-border/40 px-4 flex items-center justify-between">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
        <div className="font-bold tracking-tighter text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          SB
        </div>
        <ModeToggle />
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed left-0 top-0 h-full w-72 bg-background z-50 border-r border-border shadow-2xl pt-20"
            >
              {NavContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}