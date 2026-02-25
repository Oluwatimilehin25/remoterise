"use client";

import { Search, MapPin, Send } from "lucide-react";
import { motion, Variants } from "framer-motion";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
    const steps = [
        {
            id: 1,
            title: "Browse Verified Jobs",
            description: "Find high-quality remote opportunities curated from verified global companies.",
            icon: <Search className={styles.icon} size={32} />
        },
        {
            id: 2,
            title: "Apply Directly",
            description: "No middlemen or complex forms. Apply straight to the source and get hired faster.",
            icon: <Send className={styles.icon} size={32} />
        },
        {
            id: 3,
            title: "Share Your Story",
            description: "Get hired? Share your success and inspire others on their remote journey.",
            icon: <MapPin className={styles.icon} size={32} />
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
        }
    };

    return (
        <section id="how-it-works" className="section" style={{ backgroundColor: "hsl(var(--surface-color))" }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Simple 3-Step System</h2>
                    <p className="section-subtitle">
                        Your path to a remote career shouldn't be complicated.
                    </p>
                </div>

                <motion.div
                    className={styles.stepsContainer}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {steps.map((step, index) => (
                        <motion.div key={step.id} className={styles.stepWrapper} variants={itemVariants}>
                            <div className={styles.stepCard}>
                                <div className={styles.iconContainer}>
                                    {step.icon}
                                </div>
                                <h3 className={styles.stepTitle}>
                                    <span className={styles.stepNumber}>{step.id}.</span> {step.title}
                                </h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className={styles.arrow}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="hsl(var(--border-hover))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
