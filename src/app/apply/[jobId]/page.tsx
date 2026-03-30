"use client";

import { useState, FormEvent } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    User,
    Mail,
    Phone,
    Home,
    Briefcase,
    MapPin,
    DollarSign,
    Clock,
    CheckCircle2,
    Shield,
    Send,
    AlertCircle,
} from "lucide-react";
import styles from "./page.module.css";

/* ── Job data (mirrors JobListings.tsx) ────────────────────── */
const JOBS: Record<
    number,
    { title: string; company: string; salary: string; type: string; location: string }
> = {
    1: { title: "Senior UI Designer", company: "CloudTech", salary: "$70k–$90k", type: "Contract", location: "Remote – Worldwide" },
    2: { title: "Frontend Engineer (React)", company: "FinCore", salary: "$90k–$120k", type: "Full-time", location: "Remote – US Only" },
    3: { title: "Product Marketing Manager", company: "GrowthStack", salary: "$85k–$110k", type: "Full-time", location: "Remote – EMEA" },
    4: { title: "Remote Customer Success", company: "HelpScout", salary: "$50k–$70k", type: "Full-time", location: "Remote – Worldwide" },
    5: { title: "Lead Backend Developer", company: "DataSync", salary: "$120k–$150k", type: "Full-time", location: "Remote – US/Canada" },
    6: { title: "UX Researcher", company: "UserFirst", salary: "$80k–$100k", type: "Contract", location: "Remote – Worldwide" },
};

/* ── Types ─────────────────────────────────────────────────── */
interface FormErrors {
    fullName?: string;
    email?: string;
    phone?: string;
    address?: string;
}

export default function ApplyPage() {
    const params = useParams();
    const jobId = Number(params.jobId);
    const job = JOBS[jobId];

    /* form state */
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    /* ── Validation ─────────────────────────────────────────── */
    function validate(): FormErrors {
        const errs: FormErrors = {};
        if (!fullName.trim()) errs.fullName = "Full name is required.";
        if (!email.trim()) {
            errs.email = "Email address is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            errs.email = "Please enter a valid email address.";
        }
        if (!phone.trim()) {
            errs.phone = "Phone number is required.";
        } else if (!/^[+]?[\d\s()-]{7,20}$/.test(phone)) {
            errs.phone = "Please enter a valid phone number.";
        }
        if (!address.trim()) errs.address = "House address is required.";
        return errs;
    }

    /* ── Submit ──────────────────────────────────────────────── */
    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setIsSubmitting(true);
        // Simulated API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    }

    /* ── Unknown job fallback ───────────────────────────────── */
    if (!job) {
        return (
            <div className={styles.page}>
                <div className={styles.wrapper} style={{ textAlign: "center", paddingTop: "6rem" }}>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                        <AlertCircle size={48} style={{ color: "hsl(var(--text-secondary))", marginBottom: "1rem" }} />
                        <h2 style={{ marginBottom: "0.5rem" }}>Job Not Found</h2>
                        <p style={{ marginBottom: "2rem" }}>
                            We couldn&apos;t find the job listing you&apos;re looking for.
                        </p>
                        <Link href="/#jobs" className="btn btn-primary">
                            Browse All Jobs
                        </Link>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            {/* Decorative blurred circles */}
            <div className={styles.decorCircle1} />
            <div className={styles.decorCircle2} />

            {/* Back link */}
            <Link href="/#jobs" className={styles.backLink}>
                <ArrowLeft size={18} />
                Back to Job Listings
            </Link>

            <div className={styles.wrapper}>
                {/* ── Job Summary Card ───────────────────────────────── */}
                <motion.div
                    className={styles.jobCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className={styles.jobCardTitle}>{job.title}</h1>
                    <div className={styles.jobCardCompany}>
                        <Briefcase size={16} />
                        <span>{job.company}</span>
                        <span className="badge badge-verified">
                            <CheckCircle2 size={12} style={{ marginRight: 2 }} />
                            Verified
                        </span>
                    </div>
                    <div className={styles.jobCardMeta}>
                        <div className={styles.metaItem}>
                            <DollarSign size={16} className={styles.metaIcon} />
                            <span>{job.salary}</span>
                        </div>
                        <div className={styles.metaItem}>
                            <MapPin size={16} className={styles.metaIcon} />
                            <span>{job.location}</span>
                        </div>
                        <div className={styles.metaItem}>
                            <Clock size={16} className={styles.metaIcon} />
                            <span>{job.type}</span>
                        </div>
                    </div>
                </motion.div>

                {/* ── Application Form ──────────────────────────────── */}
                <motion.div
                    className={styles.formCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            /* ── Success View ──────────────────────────────── */
                            <motion.div
                                key="success"
                                className={styles.successOverlay}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <motion.div
                                    className={styles.successIcon}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                >
                                    <CheckCircle2 size={40} />
                                </motion.div>
                                <h2 className={styles.successTitle}>Application Submitted!</h2>
                                <p className={styles.successMessage}>
                                    Thank you, <strong>{fullName}</strong>. Your application for{" "}
                                    <strong>{job.title}</strong> at <strong>{job.company}</strong> has been received.
                                    We&apos;ll reach out to you at <strong>{email}</strong> with next steps.
                                </p>
                                <div className={styles.successActions}>
                                    <Link href="/#jobs" className="btn btn-primary">
                                        Browse More Jobs
                                    </Link>
                                    <Link href="/" className="btn btn-outline">
                                        Back to Home
                                    </Link>
                                </div>
                            </motion.div>
                        ) : (
                            /* ── Form View ─────────────────────────────────── */
                            <motion.div key="form" exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                                <h2 className={styles.formTitle}>Apply for this Position</h2>
                                <p className={styles.formSubtitle}>
                                    Fill out the form below and we&apos;ll connect you with the hiring team.
                                </p>

                                <form onSubmit={handleSubmit} noValidate>
                                    {/* Full Name */}
                                    <div className={styles.formGroup}>
                                        <label htmlFor="fullName" className={styles.label}>
                                            Full Name<span className={styles.required}>*</span>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <User size={18} className={styles.inputIcon} />
                                            <input
                                                id="fullName"
                                                type="text"
                                                className={`${styles.input} ${errors.fullName ? styles.inputError : ""}`}
                                                placeholder="e.g. John Doe"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                            />
                                        </div>
                                        {errors.fullName && (
                                            <span className={styles.errorText}>
                                                <AlertCircle size={12} /> {errors.fullName}
                                            </span>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>
                                            Active Email Address<span className={styles.required}>*</span>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <Mail size={18} className={styles.inputIcon} />
                                            <input
                                                id="email"
                                                type="email"
                                                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                                                placeholder="you@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <span className={styles.helperText}>
                                            We&apos;ll send updates and next steps to this email.
                                        </span>
                                        {errors.email && (
                                            <span className={styles.errorText}>
                                                <AlertCircle size={12} /> {errors.email}
                                            </span>
                                        )}
                                    </div>

                                    {/* Phone */}
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.label}>
                                            Active Phone Line<span className={styles.required}>*</span>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <Phone size={18} className={styles.inputIcon} />
                                            <input
                                                id="phone"
                                                type="tel"
                                                className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                                                placeholder="+1 (555) 123-4567"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                        <span className={styles.helperText}>
                                            A reachable number for interview scheduling.
                                        </span>
                                        {errors.phone && (
                                            <span className={styles.errorText}>
                                                <AlertCircle size={12} /> {errors.phone}
                                            </span>
                                        )}
                                    </div>

                                    {/* Address */}
                                    <div className={styles.formGroup}>
                                        <label htmlFor="address" className={styles.label}>
                                            House Address<span className={styles.required}>*</span>
                                        </label>
                                        <div className={styles.inputWrapper}>
                                            <Home size={18} className={styles.inputIcon} />
                                            <input
                                                id="address"
                                                type="text"
                                                className={`${styles.input} ${errors.address ? styles.inputError : ""}`}
                                                placeholder="123 Main St, Apt 4B, New York, NY 10001"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                        {errors.address && (
                                            <span className={styles.errorText}>
                                                <AlertCircle size={12} /> {errors.address}
                                            </span>
                                        )}
                                    </div>

                                    {/* Submit */}
                                    <motion.button
                                        type="submit"
                                        className={`btn btn-primary ${styles.submitBtn}`}
                                        disabled={isSubmitting}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <>Submitting…</>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Submit Application
                                            </>
                                        )}
                                    </motion.button>

                                    {/* Privacy notice */}
                                    <div className={styles.privacyNotice}>
                                        <Shield size={16} className={styles.privacyIcon} />
                                        <span>
                                            Your information is secure. We only share your details with the hiring
                                            company for this specific role and never sell your data to third parties.
                                        </span>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
