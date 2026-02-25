import { Play } from "lucide-react";
import styles from "./VideoTestimonials.module.css";

export default function VideoTestimonials() {
    return (
        <section className="section" style={{ backgroundColor: "hsl(var(--bg-color))" }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">See It to Believe It</h2>
                    <p className="section-subtitle">
                        Watch how Opportunity Bridge USA changed lives and careers.
                    </p>
                </div>

                <div className={styles.videoGrid}>
                    {/* Video Placeholder 1 */}
                    <div className={styles.videoCard}>
                        <div className={styles.thumbnailContainer}>
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                                alt="Video Thumbnail"
                                className={styles.thumbnail}
                            />
                            <div className={styles.playButtonWrapper}>
                                <button className={styles.playButton}>
                                    <Play size={32} fill="currentColor" />
                                </button>
                            </div>
                        </div>
                        <div className={styles.videoInfo}>
                            <h3 className={styles.videoTitle}>From Unemployed to Remote Software Engineer in 30 Days</h3>
                            <p className={styles.videoAuthor}>Elena M. — Remote Developer</p>
                        </div>
                    </div>

                    {/* Video Placeholder 2 */}
                    <div className={styles.videoCard}>
                        <div className={styles.thumbnailContainer}>
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
                                alt="Video Thumbnail"
                                className={styles.thumbnail}
                            />
                            <div className={styles.playButtonWrapper}>
                                <button className={styles.playButton}>
                                    <Play size={32} fill="currentColor" />
                                </button>
                            </div>
                        </div>
                        <div className={styles.videoInfo}>
                            <h3 className={styles.videoTitle}>How I Doubled My Salary Working for a US Startup from Brazil</h3>
                            <p className={styles.videoAuthor}>Carlos V. — Product Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
