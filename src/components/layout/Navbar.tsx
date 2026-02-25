import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/logo.png" alt="Opportunity Bridge USA" width={180} height={60} className={styles.logoImage} />
                </Link>
                <div className={styles.links}>
                    <Link href="#jobs" className={styles.navLink}>Jobs</Link>
                    <Link href="#success" className={styles.navLink}>Success Stories</Link>
                    <Link href="#how-it-works" className={styles.navLink}>How it Works</Link>
                    <Link href="#share" className={styles.navLink}>Submit Story</Link>
                </div>
                <div className={styles.cta}>
                    <Link href="#jobs" className="btn btn-primary">
                        Browse Jobs
                    </Link>
                </div>
            </div>
        </header>
    );
}
