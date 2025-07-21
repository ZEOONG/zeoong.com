'use client'

import styles from "@/styles/card.module.scss"
import Image from 'next/image';
import Link from "next/link";
import { MdDownload } from 'react-icons/md';

import { useState } from 'react';

export default function Card() {
    const DownLoadClick = () => {
        console.log('다운로드됨');
    };

    const [isClicked, setIsClicked] = useState(false);

    const handleDownloadClick = () => {
        setIsClicked(true);
        DownLoadClick();
        
        setTimeout(() => {
            setIsClicked(false);
        }, 600); // 강민재 : 0.6초
    };

    return (
        <div className={styles.CardContainer}>
            <div className={styles.CardContainerInLine}>
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
                                <Link href="https://youtube.com" className={styles.IconButton}>
                                    <Image
                                        src="/youtube-svgrepo-com.svg"
                                        alt="youtube"
                                        width={24}
                                        height={24}
                                    />
                                </Link>
                                <Link href="https://instagram.com" className={styles.IconButton}>
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
                            <button onClick={handleDownloadClick} className={`${styles.DownLoadLayoutButton} ${isClicked ? styles.clicked : ''}`}>
                                <MdDownload className={styles.downloadIcon} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.OutInfoContainer}>
                <div className={styles.OutInfoContainerTop}>
                    <div className={styles.infoItem}>
                        <span className={styles.label}>마인크래프트 버전</span>
                        <div className={styles.tags}>
                            <span className={styles.tag}>1.21.8</span>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.label}>장르</span>
                        <div className={styles.tags}>
                            <span className={styles.tag}>어드벤처</span>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.label}>자료종류</span>
                        <div className={styles.tags}>
                            <span className={styles.tag}>모드, 맵, 리소스팩</span>
                        </div>
                    </div>
                </div>
                <div className={styles.OutInfoContainerBottom}>
                    <div className={styles.infoItem}>
                        <span className={styles.label}>다운로드수</span>
                        <span className={styles.value}>123</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.date}>2025-07-21</span>
                    </div>
                </div>
            </div>
        </div>
    )
}