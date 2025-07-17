import Image from 'next/image';
import styles from "@/styles/home.module.scss"

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/Eye.png"
                        alt=""
                        width={236}
                        height={143}
                        style={{
                            width: '50px',
                            height: 'auto',
                        }}
                        priority
                    />
                </div>
            </div>
            <header className={styles.header}>
                <div className={styles.headerlayout}>
                    <div className={styles.profile}>
                        <h1>ZEOONG</h1>
                    </div>
                </div>
            </header>
        </div>
    )
}
