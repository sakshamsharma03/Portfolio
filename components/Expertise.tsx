"use client";

import { motion } from "framer-motion";
import { Smartphone, Server, Layers } from "lucide-react";

const expertiseItems = [
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Building cross-platform apps with React Native that feel native. I focus on smooth 60fps animations, intuitive UI/UX, and optimizing bundle size for performance on both Android and iOS.",
        skills: ["React Native", "TypeScript", "Redux/Zustand", "Native Modules"]
    },
    {
        icon: Server,
        title: "Backend Engineering",
        description: "Designing robust, scalable backends using Java and Spring Boot. I handle complex business logic, secure authentication (Oauth2/JWT), and high-volume data processing with ease.",
        skills: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Docker"]
    },
    {
        icon: Layers,
        title: "End-to-End Delivery",
        description: "I manage the entire lifecycle. From database schema design to deploying on AWS/DigitalOcean and publishing to App Stores. You get a complete, production-ready system.",
        skills: ["Architecture", "CI/CD", "AWS", "App Store Deployment"]
    }
];

export function Expertise() {
    return (
        <section id="expertise" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
                    <p className="text-muted-foreground">
                        I specialize in the sweet spot between mobile agility and backend stability.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map(skill => (
                                        <span key={skill} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-secondary font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
