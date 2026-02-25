"use client";

import { motion } from "framer-motion";
import styles from "./SocialProofCounters.module.css";
import { Briefcase, Heart, Globe, Star } from "lucide-react";

export default function SocialProofCounters() {
    const stats = [
        {
            id: 1,
            name: "Remote Jobs Posted",
            value: "3,482",
            icon: <Briefcase size={24} className={styles.icon} />
        },
        {
            id: 2,
            name: "Success Stories",
            value: "1,257",
            icon: <Heart size={24} className={styles.icon} />
        },
        {
            id: 3,
            name: "Countries Represented",
            value: "47",
            icon: <Globe size={24} className={styles.icon} />
        },
        {
            id: 4,
            name: "User Satisfaction",
            value: "4.8/5",
            icon: <Star size={24} className={styles.icon} />
        }
    ];

    return (
        <section className={`section ${styles.container}`}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            className={styles.statCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.iconContainer}>
                                {stat.icon}
                            </div>
                            <div className={styles.value}>{stat.value}</div>
                            <div className={styles.name}>{stat.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
