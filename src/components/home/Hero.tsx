"use client";

import Link from "next/link";
import { CheckCircle2, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={`section ${styles.hero}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.div
                        className={`badge ${styles.pill}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        🚀 The #1 Verified Remote Job Board
                    </motion.div>

                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    >
                        Get Real Remote Jobs.<br />
                        <span className="gradient-text">See Real Success Stories.</span>
                    </motion.h1>

                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        Discover verified remote opportunities and read testimonials from people who actually got hired. No fluff, just real jobs.
                    </motion.p>

                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        <Link href="#jobs" className="btn btn-primary hover-glow">
                            Browse Remote Jobs
                        </Link>
                        <Link href="#share" className="btn btn-outline">
                            Share Your Success Story
                        </Link>
                    </motion.div>

                    <motion.div
                        className={styles.trust}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        <motion.div whileHover={{ y: -5 }} className={styles.trustItem}>
                            <Users className={styles.trustIcon} />
                            <span>1,200+ Successful Placements</span>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className={styles.trustItem}>
                            <Globe className={styles.trustIcon} />
                            <span>Users in 30+ Countries</span>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className={styles.trustItem}>
                            <CheckCircle2 className={styles.trustIcon} />
                            <span>Jobs from Verified Companies</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <motion.div
                className={styles.blob1}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className={styles.blob2}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.15, 0.1],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
        </section>
    );
}
