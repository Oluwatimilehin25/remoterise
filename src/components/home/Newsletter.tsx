"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
    };
    return (
        <section className="section" style={{ backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.iconWrapper}>
                        <Mail size={32} />
                    </div>
                    <h2 className={styles.title}>Get Handpicked Remote Jobs Weekly</h2>
                    <p className={styles.subtitle}>
                        Join 50,000+ professionals getting the best verified remote jobs delivered straight to their inbox every Tuesday. No spam, ever.
                    </p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className={styles.input}
                            required
                            disabled={isLoading || isSuccess}
                        />
                        <select className={styles.select} required defaultValue="" disabled={isLoading || isSuccess}>
                            <option value="" disabled>Job Category</option>
                            <option value="engineering">Engineering</option>
                            <option value="design">Design</option>
                            <option value="marketing">Marketing</option>
                            <option value="product">Product</option>
                            <option value="sales">Sales & CS</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit" className={`btn ${styles.subscribeBtn}`} disabled={isLoading || isSuccess}>
                        {isLoading ? (
                            <><Loader2 className="animate-spin" size={20} /> Subscribing...</>
                        ) : isSuccess ? (
                            <><CheckCircle size={20} /> Subscribed!</>
                        ) : (
                            "Subscribe"
                        )}
                    </button>
                    {isSuccess && (
                        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', textAlign: 'center' }}>
                            Success! You'll receive our next newsletter on Tuesday.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
