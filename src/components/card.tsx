import styles from "@/styles/card.module.scss"
import Image from 'next/image';

export default function Card() {
    return (
        <div className={styles.CardContainer}>
            <Image
                src="/zeongFace.svg"
                alt=""
                width={1920}
                height={1080}
                className={styles.TitleImage}
            />
            <div className={styles.CardContent}>
                <div className={styles.InCardLayout}>
                    <div className={styles.WritingLayout}>
                        <h1>Title</h1>
                        <p>Hello WorldHello WorldHello WorldHello World</p>
                        <div className={styles.ContentInfo}>
                            <h1>0</h1>
                            <h1>0</h1>
                        </div>
                    </div>
                    <div className={styles.DownLoadLayout}>
                        <h1>0</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}