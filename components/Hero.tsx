"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Terminal, Code2, Database } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container-custom flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/50 border border-secondary text-sm md:text-base font-medium text-secondary-foreground mb-8"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    Available for new projects
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
                >
                    Freelance <span className="text-primary">Mobile App Developer</span> <br className="hidden md:block" />
                    with <span className="text-white">Java Backend</span> Expertise
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                >
                    I build high-performance React Native mobile applications backed by scalable Java Spring Boot systems. From concept to production, I deliver robust end-to-end solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button size="lg" asChild className="gap-2 text-base">
                        <Link href="#projects">
                            View Work <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="gap-2 text-base">
                        <Link href="#contact">
                            Contact Me
                        </Link>
                    </Button>
                </motion.div>

                {/* Tech Badges / Floating Elements (Optional Visuals) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-20 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    {/* Simple tech icons or text to reinforce stack immediately */}
                    <div className="flex flex-col items-center gap-2">
                        <Code2 className="w-6 h-6 text-blue-400" />
                        <span className="text-xs font-mono">React Native</span>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div className="flex flex-col items-center gap-2">
                        <Database className="w-6 h-6 text-orange-400" />
                        <span className="text-xs font-mono">Java Spring</span>
                    </div>
                    <div className="w-px h-8 bg-border" />
                    <div className="flex flex-col items-center gap-2">
                        <Terminal className="w-6 h-6 text-green-400" />
                        <span className="text-xs font-mono">TypeScript</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
