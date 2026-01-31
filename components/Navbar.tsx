"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Saksham<span className="text-primary">.</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-3 pr-4 border-r border-border">
                        <Link href="https://github.com/sakshamm03" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/sakshamsharma03/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                    <Button asChild size="sm">
                        <Link href="#contact">Hire Me</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="container-custom flex flex-col gap-4 py-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex gap-4 mt-4">
                                <Link href="https://github.com/sakshamm03" target="_blank" className="text-muted-foreground hover:text-foreground">
                                    <Github className="w-6 h-6" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/sakshamsharma03/" target="_blank" className="text-muted-foreground hover:text-foreground">
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                            </div>
                            <Button asChild className="mt-4 w-full">
                                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Hire Me</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
