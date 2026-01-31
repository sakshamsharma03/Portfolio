"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function About() {
    return (
        <section id="about" className="section-padding bg-secondary/20">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Not just a coder. <br />
                            <span className="text-primary">A technical partner.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-muted-foreground leading-relaxed space-y-4"
                    >
                        <p>
                            I don't just "write code"—I solve business problems. As an independent freelancer, I bridge the gap between complex backend logic and smooth mobile experiences.
                        </p>
                        <p>
                            Whether you need a high-performance React Native app or a scalable Java Spring Boot architecture, I take full ownership from idea to production. No hand-holding required.
                        </p>
                        <div className="pt-4">
                            <Button variant="link" className="px-0 text-foreground" asChild>
                                <Link href="#contact" className="gap-2">
                                    Let's discuss your project <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
