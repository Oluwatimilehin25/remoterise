"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

const FAQS = [
    {
        id: 1,
        question: "Are these jobs verified?",
        answer: "Yes. Every job listed on Opportunity Bridge USA undergoes a manual verification process. We ensure the company is legitimate, the role is 100% remote (or has clear geographic restrictions), and the salary ranges are transparent where legally required."
    },
    {
        id: 2,
        question: "Do you charge fees?",
        answer: "No. Opportunity Bridge USA is completely free for job seekers. We never charge you to apply for roles, read testimonials, or join our newsletter. We monetize by charging companies to feature their open listings."
    },
    {
        id: 3,
        question: "How often are jobs updated?",
        answer: "Our team updates the job board daily. We actively remove expired or filled positions and add fresh opportunities every single day from Monday to Friday."
    },
    {
        id: 4,
        question: "Can I submit my own testimonial?",
        answer: "Absolutely! If you've found a job using our platform, we encourage you to share your story through our 'Submit Story' form. Real success stories are the foundation of our community."
    },
    {
        id: 5,
        question: "How do you prevent fake reviews?",
        answer: "We review every testimonial submission before publishing. We often ask for a screenshot of an offer letter (redacted for privacy) or a LinkedIn profile link to verify that the person actually works at the company they claim."
    }
];

export default function FAQ() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="section" style={{ backgroundColor: "hsl(var(--bg-color))" }}>
            <div className={`container ${styles.container}`}>
                <div className="section-header">
                    <h2 className="section-title">Common Questions</h2>
                    <p className="section-subtitle">
                        Everything you need to know about how Opportunity Bridge USA works.
                    </p>
                </div>

                <div className={styles.accordion}>
                    {FAQS.map((faq) => (
                        <div
                            key={faq.id}
                            className={`${styles.item} ${openId === faq.id ? styles.open : ""}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggle(faq.id)}
                                aria-expanded={openId === faq.id}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown
                                    className={`${styles.icon} ${openId === faq.id ? styles.iconOpen : ""}`}
                                />
                            </button>
                            <div
                                className={styles.answerWrapper}
                                style={{
                                    maxHeight: openId === faq.id ? "300px" : "0",
                                    opacity: openId === faq.id ? 1 : 0
                                }}
                            >
                                <div className={styles.answer}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
