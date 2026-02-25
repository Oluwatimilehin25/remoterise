"use client";

import { useState } from "react";
import { Star, MapPin, Briefcase, Clock, X } from "lucide-react";
import styles from "./SuccessStories.module.css";
import Image from "next/image";

const STORIES = [
    {
        id: 1,
        name: "David A.",
        country: "Nigeria",
        jobTitle: "Remote Data Analyst",
        company: "FinCore",
        timeline: "Hired in 4 weeks",
        quote: "I applied through Opportunity Bridge USA and got my first international remote job. The job listings were legit and updated daily.",
        fullStory: "Before Opportunity Bridge USA, I spent months applying on generic job boards with zero responses. The verified jobs here made all the difference. Within 4 weeks of actively using the platform, I secured interviews with three different companies and ultimately joined FinCore.",
        image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=150&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Sarah M.",
        country: "Canada",
        jobTitle: "Senior Product Designer",
        company: "DesignHub",
        timeline: "Hired in 2 weeks",
        quote: "Found my dream role within 14 days. This platform saves so much time by filtering out the noise.",
        fullStory: "As a senior designer, finding high-quality remote opportunities that aren't just 'hybrid disguised as remote' was challenging. Opportunity Bridge USA's curation is top-notch. I applied to 5 roles, interviewed at 2, and accepted an amazing offer.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Javier R.",
        country: "Spain",
        jobTitle: "Frontend Engineer",
        company: "TechScale",
        timeline: "Hired in 6 weeks",
        quote: "The compensation transparency and verified company status gave me the confidence to apply.",
        fullStory: "I honestly thought remote jobs paying well were a myth until I joined Opportunity Bridge USA. The community and the quality of the jobs posted are unmatched. It took me a bit longer, but it was worth the wait to find a company that respects work-life balance.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Aisha K.",
        country: "South Africa",
        jobTitle: "Remote Backend Developer",
        company: "CloudSync Core",
        timeline: "Hired in 3 weeks",
        quote: "Getting an international salary while staying close to home in Cape Town changed everything for me.",
        fullStory: "I always believed I had to move to Europe to get a top-tier tech job. Opportunity Bridge USA connected me directly with global companies hiring in my timezone. The verification process meant I didn't waste time on ghost jobs.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=150&auto=format&fit=crop",
    },
    {
        id: 5,
        name: "Kenji Y.",
        country: "Japan",
        jobTitle: "Senior UX Researcher",
        company: "GlobalNet Insights",
        timeline: "Hired in 5 weeks",
        quote: "It let me break away from the traditional office culture here and find a globally-minded remote team.",
        fullStory: "Traditional corporate culture in Tokyo can be exhausting. I wanted true flexibility. Opportunity Bridge USA offered legitimate roles that didn't just claim to be remote to attract talent, but truly embraced asynchronous work. My new team is amazing.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
    },
    {
        id: 6,
        name: "Emma W.",
        country: "Australia",
        jobTitle: "Content Marketing Manager",
        company: "BrandCraft",
        timeline: "Hired in 2 weeks",
        quote: "The best part is knowing upfront what the salary band looks like before I even apply.",
        fullStory: "Working from Perth, finding teams that tolerate the timezone difference is hard. Opportunity Bridge USA had filters that clearly showed which jobs hired in APAC regions. It streamlined my entire job hunt and got me hired in record time.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
    },
];

export default function SuccessStories() {
    const [selectedStory, setSelectedStory] = useState<typeof STORIES[0] | null>(null);

    return (
        <section id="success" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">💬 Real People. Real Remote Jobs.</h2>
                    <p className="section-subtitle">
                        Don't just take our word for it. Read how Opportunity Bridge USA helped professionals globalize their careers.
                    </p>
                </div>

                <div className={styles.carousel}>
                    {STORIES.map((story) => (
                        <div key={story.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <img
                                    src={story.image}
                                    alt={story.name}
                                    className={styles.avatar}
                                    width={48}
                                    height={48}
                                />
                                <div>
                                    <h3 className={styles.name}>{story.name}</h3>
                                    <div className={styles.meta}>
                                        <MapPin size={12} className={styles.icon} />
                                        <span>{story.country}</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.jobDetails}>
                                <div className={styles.jobBadge}>
                                    <Briefcase size={12} />
                                    <span>{story.jobTitle} at {story.company}</span>
                                </div>
                                <div className={styles.timeline}>
                                    <Clock size={12} />
                                    <span>{story.timeline}</span>
                                </div>
                            </div>

                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="hsl(48, 96%, 53%)" color="hsl(48, 96%, 53%)" />
                                ))}
                            </div>

                            <p className={styles.quote}>"{story.quote}"</p>

                            <button
                                className={`btn btn-outline ${styles.readMoreBtn}`}
                                onClick={() => setSelectedStory(story)}
                            >
                                View Full Story
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedStory && (
                <div className={styles.modalOverlay} onClick={() => setSelectedStory(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedStory(null)}>
                            <X size={24} />
                        </button>
                        <div className={styles.modalHeader}>
                            <img
                                src={selectedStory.image}
                                alt={selectedStory.name}
                                className={styles.modalAvatar}
                                width={80}
                                height={80}
                            />
                            <div>
                                <h2>{selectedStory.name}</h2>
                                <div className={styles.modalMeta}>
                                    <MapPin size={14} className={styles.icon} />
                                    <span>{selectedStory.country}</span>
                                    <span className={styles.dot}>•</span>
                                    <Clock size={14} className={styles.icon} />
                                    <span>{selectedStory.timeline}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.modalJob}>
                            <h3 className={styles.modalJobTitle}>{selectedStory.jobTitle}</h3>
                            <span className={styles.modalCompany}>@ {selectedStory.company}</span>
                        </div>

                        <div className={styles.modalBody}>
                            <p>"{selectedStory.fullStory}"</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
