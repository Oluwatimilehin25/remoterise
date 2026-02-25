"use client";

import { CheckCircle2, MapPin, Briefcase, Clock, DollarSign, FileSignature } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./JobListings.module.css";
import Link from "next/link";

const JOBS = [
    {
        id: 1,
        title: "Senior UI Designer",
        company: "CloudTech",
        salary: "$70k–$90k",
        type: "Contract",
        location: "Remote – Worldwide",
    },
    {
        id: 2,
        title: "Frontend Engineer (React)",
        company: "FinCore",
        salary: "$90k–$120k",
        type: "Full-time",
        location: "Remote – US Only",
    },
    {
        id: 3,
        title: "Product Marketing Manager",
        company: "GrowthStack",
        salary: "$85k–$110k",
        type: "Full-time",
        location: "Remote – EMEA",
    },
    {
        id: 4,
        title: "Remote Customer Success",
        company: "HelpScout",
        salary: "$50k–$70k",
        type: "Full-time",
        location: "Remote – Worldwide",
    },
    {
        id: 5,
        title: "Lead Backend Developer",
        company: "DataSync",
        salary: "$120k–$150k",
        type: "Full-time",
        location: "Remote – US/Canada",
    },
    {
        id: 6,
        title: "UX Researcher",
        company: "UserFirst",
        salary: "$80k–$100k",
        type: "Contract",
        location: "Remote – Worldwide",
    },
];

export default function JobListings() {
    return (
        <section id="jobs" className="section" style={{ backgroundColor: "hsl(var(--surface-color))" }}>
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Verified Remote Jobs
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Curated opportunities from verified companies actively hiring remote talent.
                        No phantom jobs. No scams.
                    </motion.p>
                </div>

                <div className={styles.grid}>
                    {JOBS.map((job, index) => (
                        <motion.div
                            key={job.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <div>
                                    <h3 className={styles.jobTitle}>{job.title}</h3>
                                    <div className={styles.companyWrap}>
                                        <Briefcase size={16} className={styles.icon} />
                                        <span className={styles.company}>{job.company}</span>
                                        <motion.span
                                            className="badge badge-verified"
                                            animate={{
                                                boxShadow: ["0 0 0 0 rgba(29, 155, 240, 0)", "0 0 0 4px rgba(29, 155, 240, 0.2)", "0 0 0 0 rgba(29, 155, 240, 0)"]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <CheckCircle2 size={12} className={styles.verifiedIcon} />
                                            Verified
                                        </motion.span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.details}>
                                <div className={styles.detail}>
                                    <DollarSign size={16} className={styles.icon} />
                                    <span>{job.salary}</span>
                                </div>
                                <div className={styles.detail}>
                                    <MapPin size={16} className={styles.icon} />
                                    <span>{job.location}</span>
                                </div>
                                <div className={styles.detail}>
                                    <Clock size={16} className={styles.icon} />
                                    <span>{job.type}</span>
                                </div>
                            </div>

                            <div className={styles.tcBlock}>
                                <div className={styles.tcHeader}>
                                    <FileSignature size={16} className={styles.tcHeaderIcon} />
                                    <span>Opportunity Bridge USA Agreement</span>
                                </div>
                                <p className={styles.tcText}>
                                    By proceeding, I agree to the terms of service and acknowledge the remote work guidelines set forth by Opportunity Bridge USA.
                                </p>
                                <label className={styles.tcSignature}>
                                    <input type="checkbox" className={styles.signatureInput} />
                                    <span className={styles.signatureLabel}>I agree to the terms and authorize this application.</span>
                                </label>
                            </div>

                            <div className={styles.actions}>
                                <Link href={`#apply-${job.id}`} className={`btn btn-primary ${styles.applyBtn}`}>
                                    Apply Now
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.viewMore}>
                    <Link href="#jobs" className="btn btn-outline">
                        Load More Jobs
                    </Link>
                </div>
            </div>
        </section>
    );
}
