import styles from "@/styles/card.module.scss"
import Image from 'next/image';
import Link from "next/link";

export default function Card() {
    // const DownLoadClick = () => {
    //     console.log('다운로드됨');
    // };

    return (
        <div className={styles.CardContainer}>
            <Image
                src="/background-img.png"
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
                            <Link href="https://example.com" className={styles.IconButton}>
                                <Image
                                    src="/youtube-svgrepo-com.svg"
                                    alt="youtube"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                            <Link href="https://example.com" className={styles.IconButton}>
                                <Image
                                    src="/instagram-svgrepo-com.svg"
                                    alt="youtube"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                            <Link href="https://example.com" className={styles.IconButton}>
                                <Image
                                    src="/tiktok-svgrepo-com.svg"
                                    alt="youtube"
                                    width={24}
                                    height={24}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.DownLoadLayout}>
                        {/* <button onClick={DownLoadClick} className="border-none bg-transparent">
                            <Image
                                src="/Eye.png"
                                alt="down"
                                width={50}
                                height={50}
                                className="hover:opacity-80 transition-opacity"
                            />
                        </button> */}
                        <Image
                            src="/DownLoadButton.svg"
                            alt="youtube"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}