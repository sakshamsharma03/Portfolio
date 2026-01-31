"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const groups = [
    {
        category: "Mobile",
        techs: ["React Native", "Expo", "Redux Toolkit", "React Navigation", "Reanimated"]
    },
    {
        category: "Backend",
        techs: ["Java", "Spring Boot", "Hibernate", "Microservices", "Kafka"]
    },
    {
        category: "Database & Cloud",
        techs: ["PostgreSQL", "MongoDB", "Redis", "AWS (EC2, S3)", "Docker"]
    },
    {
        category: "Web & Tools",
        techs: ["Next.js", "TypeScript", "Tailwind CSS", "Git/GitHub", "Jira"]
    }
];

export function TechStack() {
    return (
        <section id="tech-stack" className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Arsenal</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {groups.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-6 p-6 rounded-xl bg-secondary/10 border border-border/50 hover:bg-secondary/20 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-foreground border-b border-border pb-3">
                                {group.category}
                            </h3>
                            <ul className="space-y-3">
                                {group.techs.map((tech) => (
                                    <li key={tech} className="flex items-center gap-3 text-muted-foreground text-base">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
