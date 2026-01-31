"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";


const projects = [
    {
        title: "Rentablez",
        subtitle: "SaaS Rental Platform",
        description: "A comprehensive ERP system for rental businesses. I architected the entire Java Spring Boot backend to handle complex inventory management across multiple organizations and built the React Native mobile app for field agents.",
        tags: ["React Native", "Java Spring Boot", "PostgreSQL", "Microservices", "Docker"],
        impact: [
            "Reduced inventory conflicts by 40% with real-time tracking.",
            "Scaled to support 50+ concurrent organization tenants.",
            "Implemented role-based access control (RBAC) specifically for field agents."
        ],
        link: "https://rentablez.com/",
        github: "#",
        images: [
            "/rentablez/rentablez01.webp",
            "/rentablez/rentablez02.webp",
            "/rentablez/rentablez03.webp"
        ]
    },
    {
        title: "Kridas",
        subtitle: "Sports Venue Booking (Singapore)",
        description: "Migrated the legacy Node.js backend to a robust Java Spring Boot architecture while simultaneously rebuilding the mobile app for better performance. Integrated local payment gateways for seamless booking.",
        tags: ["React Native", "Java Spring Boot", "HitPay Integration", "Redis", "AWS RDS"],
        impact: [
            "Improved API response time by 60% after migration.",
            "Seamlessly integrated HitPay for secure local transactions.",
            "Achieved 99.9% uptime during peak booking hours."
        ],
        link: "https://www.kridas.com/",
        github: "#",
        images: [
            "/kridas/kridas-feed.png",
            "/kridas/kridas-events.png",
            "/kridas/kridas-page.png",
            "/kridas/kridas-profile.png"
        ]
    },
    {
        title: "Namma Kutira",
        subtitle: "Community / Property Management",
        description: "A community management platform streamlining property workflows. Focused on delivering a seamless mobile-first user experience backed by complex, backend-driven logic for day-to-day operations.",
        tags: ["React Native", "Java Spring Boot", "PostgreSQL", "Workflow Automation"],
        impact: [
            "Digitized core property operations, reducing manual paperwork by 70%.",
            "Designed a mobile-focused UX for non-technical staff.",
            "Implemented robust backend workflows for maintenance tracking."
        ],
        link: "#",
        github: "#",
        images: [
            "/nammakutira/nammakutira-Dash.png",
            "/nammakutira/nammakutira-cart.png",
            "/nammakutira/nammakutira-propdetails.png",
            "/nammakutira/nammakutira-search.png"
        ]
    },
    {
        title: "iSNEE",
        subtitle: "Digital Platform",
        description: "A digital ecosystem platform emphasizing clean UI and structural integrity. Built with a focus on long-term reliability and maintainability, serving as a production-grade system rather than a prototype.",
        tags: ["React Native", "Java", "System Design", "Scalable Architecture"],
        impact: [
            "Delivered a polished, crash-free mobile interface.",
            "Architected a modular backend for easy future extensibility.",
            "Ensured high availability and system reliability in production."
        ],
        link: "https://isnee.in/",
        github: "#",
        images: [
            "/isnee/isnee-dash.png",
            "/isnee/isnee-events.png",
            "/isnee/isnee-leaderboard.png",
            "/isnee/isnee-members.png"
        ]
    }
];

function Carousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl flex items-center justify-center bg-background/50">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[index]}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-contain p-4"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-primary" : "bg-primary/20"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="section-padding bg-secondary/20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
                    <p className="text-muted-foreground">
                        Real-world systems running in production. Not just toy projects.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="group grid md:grid-cols-12 gap-8 md:gap-12 items-start"
                        >
                            {/* Content Side */}
                            <div className="md:col-span-12 lg:col-span-8 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                        {project.subtitle}
                                    </span>
                                </div>

                                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Key Impact</h4>
                                    <ul className="space-y-2">
                                        {project.impact.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <Button variant="outline" size="sm" className="gap-2" asChild>
                                        <Link href={project.github} target="_blank">
                                            <Github className="w-4 h-4" /> Code (Private)
                                        </Link>
                                    </Button>
                                    <Button size="sm" className="gap-2" asChild>
                                        <Link href={project.link} target="_blank">
                                            Visit Site <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Visual Side (Carousel) */}
                            <div className="hidden lg:flex lg:col-span-4 h-full min-h-[400px] rounded-2xl bg-card border border-border p-2 overflow-hidden items-center justify-center relative group/carousel">
                                <Carousel images={project.images} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
