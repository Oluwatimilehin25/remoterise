import Link from "next/link";
import { Twitter } from "lucide-react";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <Image src="/logo.png" alt="Opportunity Bridge USA" width={180} height={60} className={styles.logoImage} />
                        </Link>
                        <p className={styles.desc}>
                            Get Real Remote Jobs. See Real Success Stories. The world's most trusted remote job board.
                            <br /><br />
                            <strong>Contact Us:</strong><br />
                            47 W 13th St, New York, NY 10011<br />
                            +1 (581) 385-1813
                        </p>
                    </div>

                    <div className={styles.linksGrid}>
                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Platform</h4>
                            <Link href="#jobs" className={styles.link}>Browse Jobs</Link>
                            <Link href="#success" className={styles.link}>Success Stories</Link>
                            <Link href="#share" className={styles.link}>Submit Story</Link>
                            <Link href="#how-it-works" className={styles.link}>How it Works</Link>
                        </div>

                        <div className={styles.linkGroup}>
                            <h4 className={styles.linkTitle}>Company</h4>
                            <Link href="#" className={styles.link}>About Us</Link>
                            <Link href="#" className={styles.link}>Contact</Link>
                            <Link href="#" className={styles.link}>Privacy Policy</Link>
                            <Link href="#" className={styles.link}>Terms of Service</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} Opportunity Bridge USA. All rights reserved.
                    </p>
                    <div className={styles.social}>
                        <Link href="https://x.com/DavidEmman81354" className={styles.socialLink} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                            <Twitter size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
