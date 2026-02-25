"use client";

import { useState } from "react";
import { Star, Upload, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SubmitTestimonial.module.css";

export default function SubmitTestimonial() {
    const [rating, setRating] = useState(5);
    const [hoverRating, setHoverRating] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API form post
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
        }, 2000);
    };

    return (
        <section id="share" className="section">
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.contentInfo}>
                        <h2 className={styles.title}>Your Success is Our Fuel</h2>
                        <p className={styles.subtitle}>
                            Did you land a remote job using Opportunity Bridge USA? Share your story to inspire the next generation of remote workers and get featured on our homepage.
                        </p>

                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <div className={styles.benefitIcon}>✨</div>
                                <div>
                                    <h4 className={styles.benefitTitle}>Inspire Others</h4>
                                    <p className={styles.benefitDesc}>Show the world that remote work is accessible to everyone.</p>
                                </div>
                            </div>
                            <div className={styles.benefitItem}>
                                <div className={styles.benefitIcon}>🤝</div>
                                <div>
                                    <h4 className={styles.benefitTitle}>Build Your Brand</h4>
                                    <p className={styles.benefitDesc}>Get visibility in our newsletter and social channels.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formContainer}>
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    className={styles.successState}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ textAlign: 'center', padding: '3rem 0' }}
                                >
                                    <CheckCircle2 size={64} color="hsl(var(--accent))" style={{ margin: '0 auto 1rem' }} />
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'hsl(var(--text-primary))' }}>Thanks for Sharing!</h3>
                                    <p style={{ color: 'hsl(var(--text-secondary))', marginBottom: '1.5rem' }}>Your success story has been submitted and is under review.</p>
                                    <button onClick={() => setIsSuccess(false)} className="btn btn-outline" style={{ margin: '0 auto' }}>
                                        Submit Another Story
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    className={styles.form}
                                    onSubmit={handleSubmit}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className={styles.formGrid}>
                                        <div className={styles.inputGroup}>
                                            <label htmlFor="name" className={styles.label}>Full Name</label>
                                            <input type="text" id="name" className={styles.input} placeholder="Jane Doe" required disabled={isLoading} />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="country" className={styles.label}>Country</label>
                                            <input type="text" id="country" className={styles.input} placeholder="Brazil" required disabled={isLoading} />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="jobTitle" className={styles.label}>Job Title Secured</label>
                                            <input type="text" id="jobTitle" className={styles.input} placeholder="Product Designer" required disabled={isLoading} />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label htmlFor="company" className={styles.label}>Company Hired At</label>
                                            <input type="text" id="company" className={styles.input} placeholder="AwesomeTech Inc." required disabled={isLoading} />
                                        </div>

                                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                            <label htmlFor="timeline" className={styles.label}>Time to Get Hired</label>
                                            <select id="timeline" className={styles.input} required defaultValue="" disabled={isLoading}>
                                                <option value="" disabled>Select an option</option>
                                                <option value="under_2_weeks">Under 2 weeks</option>
                                                <option value="2_to_4_weeks">2-4 weeks</option>
                                                <option value="1_to_3_months">1-3 months</option>
                                                <option value="over_3_months">Over 3 months</option>
                                            </select>
                                        </div>

                                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                            <label htmlFor="story" className={styles.label}>Short Story</label>
                                            <textarea id="story" className={styles.textarea} placeholder="Tell us how Opportunity Bridge USA helped you..." required rows={4} disabled={isLoading}></textarea>
                                        </div>

                                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                            <label className={styles.label}>Rating</label>
                                            <div className={styles.starRating}>
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        type="button"
                                                        key={star}
                                                        className={styles.starBtn}
                                                        onClick={() => !isLoading && setRating(star)}
                                                        onMouseEnter={() => !isLoading && setHoverRating(star)}
                                                        onMouseLeave={() => !isLoading && setHoverRating(0)}
                                                        disabled={isLoading}
                                                        aria-label={`Rate ${star} out of 5 stars`}
                                                    >
                                                        <Star
                                                            size={28}
                                                            fill={(hoverRating || rating) >= star ? "hsl(48, 96%, 53%)" : "transparent"}
                                                            color={(hoverRating || rating) >= star ? "hsl(48, 96%, 53%)" : "hsl(var(--border-hover))"}
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                            <label className={styles.label}>Upload Screenshot (Optional proof)</label>
                                            <div className={styles.uploadArea}>
                                                <Upload size={24} className={styles.uploadIcon} />
                                                <span>Click to browse or drag and drop</span>
                                                <span className={styles.uploadSub}>PNG, JPG or PDF (max. 5MB)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="submit" className={`btn btn-accent ${styles.submitBtn}`} disabled={isLoading}>
                                        {isLoading ? (
                                            <><Loader2 className="animate-spin" size={20} style={{ marginRight: '8px' }} /> Submitting...</>
                                        ) : (
                                            "Share My Success"
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
