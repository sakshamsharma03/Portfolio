"use client";

import { Button } from "./ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contact" className="section-padding border-t border-border">
            <div className="container-custom max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-gradient">
                        Let's build something reliable.
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Ready to bring your mobile app idea to life or scale your backend?
                        {/* Currently accepting new freelance projects for Q2 2026. */}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <Button size="lg" className="h-12 px-8 text-lg" asChild>
                            <Link href="mailto:sakshamsharmaa03@gmail.com">
                                <Mail className="w-5 h-5 mr-2" />
                                Email Me
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-12 px-8 text-lg" asChild>
                            <Link href="https://www.linkedin.com/in/sakshamsharma03/" target="_blank">
                                <Linkedin className="w-5 h-5 mr-2" />
                                LinkedIn
                            </Link>
                        </Button>
                    </div>

                    <div className="flex flex-col items-center gap-4 pt-10 border-t border-border/50">
                        <p className="text-sm text-muted-foreground">© 2026 Saksham Sharma. Built with Passion.</p>
                        <div className="flex items-center gap-6">
                            <Link href="https://github.com/sakshamm03" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/sakshamsharma03/" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
