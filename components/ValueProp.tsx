"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, MessageSquare, Clock } from "lucide-react";

const values = [
    {
        icon: Zap,
        title: "Mobile-First Mindset",
        description: "I don't port web to mobile. I build for touch, gestures, and native performance from day one."
    },
    {
        icon: ShieldCheck,
        title: "Production Reliability",
        description: "My code runs in critical environments. I value type safety, testing, and error handling over quick hacks."
    },
    {
        icon: MessageSquare,
        title: "Clear Communication",
        description: "No technical jargon. I speak business value. You'll always know the status of your project."
    },
    {
        icon: Clock,
        title: "On Time, Every Time",
        description: "I respect deadlines. As a freelancer, my reputation is my currency. I deliver what I promise."
    }
];

export function ValueProp() {
    return (
        <section className="section-padding bg-secondary/20">
            <div className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
