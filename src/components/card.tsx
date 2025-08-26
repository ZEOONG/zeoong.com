"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdDownload } from "react-icons/md";

import styles from "@/styles/card.module.scss";

interface LinkType {
  href: string;
  icon: string;
  alt: string;
}

interface InfoType {
  versionOptions: string[];
  defaultVersion: string;
  genre: string;
  type: string;
  downloads: number;
  date: string;
}

interface CardData {
  titleImage: string;
  overlay: {
    title: string;
    subtitle: string;
  };
  content: {
    title: string;
    description: string;
  };
  links: LinkType[];
  info: InfoType;
}

export default function Card({ data }: { data: CardData }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleDownloadClick = () => {
    setIsClicked(true);
    console.log("다운로드됨");

    setTimeout(() => {
      setIsClicked(false);
    }, 600);
  };

  return (
    <div className={styles.CardContainer}>
      <div className={styles.CardContainerInLine}>
        <div className={styles.ImageContainer}>
          <Image
            src={data.titleImage}
            alt=""
            width={1920}
            height={1080}
            className={styles.TitleImage}
          />
          <div className={styles.ImageOverlay}>
            <h2 className={styles.OverlayTitle}>{data.overlay.title}</h2>
            <p className={styles.OverlaySubtitle}>{data.overlay.subtitle}</p>
          </div>
        </div>
        <div className={styles.CardContent}>
          <div className={styles.InCardLayout}>
            <div className={styles.WritingLayout}>
              <h1>{data.content.title}</h1>
              <p>{data.content.description}</p>
              <div className={styles.ContentInfo}>
                {data.links.map((link, index) => (
                  <Link
                    href={link.href}
                    className={styles.IconButton}
                    key={index}
                  >
                    <Image
                      src={link.icon}
                      alt={link.alt}
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className={styles.DownLoadLayout}>
              <button
                onClick={handleDownloadClick}
                className={`${styles.DownLoadLayoutButton} ${isClicked ? styles.clicked : ""}`}
              >
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
              <select
                className={styles.tagSelect}
                defaultValue={data.info.defaultVersion}
              >
                {data.info.versionOptions.map((version) => (
                  <option value={version} key={version}>
                    {version}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>장르</span>
            <div className={styles.tags}>
              <span className={styles.tag}>{data.info.genre}</span>
            </div>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>자료종류</span>
            <div className={styles.tags}>
              <span className={styles.tag}>{data.info.type}</span>
            </div>
          </div>
        </div>
        <div className={styles.OutInfoContainerBottom}>
          <div className={styles.infoItem}>
            <span className={styles.label}>다운로드수</span>
            <span className={styles.value}>{data.info.downloads}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.date}>{data.info.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
