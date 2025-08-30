"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  MdArrowBack,
  MdDownload,
  MdOndemandVideo,
  MdPeople,
} from "react-icons/md";

import Footer from "@/components/footer";

import styles from "@/styles/info-page.module.scss";

export default function AboutPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const stats = [
    { icon: <MdDownload />, label: "총 다운로드", value: "0+" },
    { icon: <MdPeople />, label: "이용자", value: "0+" },
    { icon: <MdOndemandVideo />, label: "유튜브 구독자", value: "40,000+" },
  ];

  return (
    <div className={styles.container}>
      <button onClick={handleBackClick} className={styles.backButton}>
        <MdArrowBack />
      </button>

      <div className={styles.content}>
        <div className={styles.heroSection}>
          <div className={styles.aboutHero}>
            <Image
              src="/zeongFace.svg"
              alt="제옹"
              width={120}
              height={120}
              className={styles.profileImage}
            />
            <div className={styles.heroText}>
              <h1 className={styles.title}>제옹 (ZEONG)</h1>
              <p className={styles.subtitle}>마인크래프트 콘텐츠 크리에이터</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>소개</h2>
          <p>
            안녕하세요! 마인크래프트를 사랑하는 콘텐츠 크리에이터 제옹입니다.
            <br />
            창의적이고 재미있는 맵, 커맨드, 리소스팩을 제작하여 많은 분들과
            공유하고 있습니다.
          </p>
          <p>
            특히 마인크래프트의 커맨드 블록 시스템을 활용한 독창적인 게임플레이
            메카닉 구현에 관심이 많으며, 플레이어들이 새로운 경험을 할 수 있도록
            다양한 콘텐츠를 개발하고 있습니다.
          </p>
        </div>

        <div className={styles.statsSection}>
          <h2>통계</h2>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>제작 철학</h2>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyItem}>
              <h3>창의성</h3>
              <p>
                기존의 틀을 벗어난 새로운 아이디어와 독창적인 게임플레이를
                추구합니다.
              </p>
            </div>
            <div className={styles.philosophyItem}>
              <h3>품질</h3>
              <p>
                모든 콘텐츠는 철저한 테스트를 거쳐 안정성과 완성도를 보장합니다.
              </p>
            </div>
            <div className={styles.philosophyItem}>
              <h3>소통</h3>
              <p>
                커뮤니티와의 활발한 소통을 통해 더 나은 콘텐츠를 만들어갑니다.
              </p>
            </div>
            <div className={styles.philosophyItem}>
              <h3>공유</h3>
              <p>좋은 콘텐츠는 많은 사람들과 함께 나누어야 한다고 믿습니다.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>주요 성과</h2>
          <p>
            <br />• --
          </p>
        </div>

        <div className={styles.section}>
          <h2>협업 및 문의</h2>
          <p>
            콘텐츠 제작 협업이나 커스텀 의뢰에 관심이 있으시다면 언제든
            연락주세요.
            <br />
            이메일: zeong0509@gmail.com
            <br />
            유튜브 채널을 통해서도 소통 가능합니다.
          </p>
        </div>

        <div className={styles.teamSection}>
          <h2>팀</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <Image
                src="/zeongFace.svg"
                alt="제옹"
                width={80}
                height={80}
                className={styles.memberImage}
              />
              <h3>제옹</h3>
              <p>크리에이터</p>
            </div>
            <div className={styles.teamMember}>
              <Image
                src="/kongduckFace.svg"
                alt="콩덕"
                width={80}
                height={80}
                className={styles.memberImage}
              />
              <h3>핑구</h3>
              <p>누구죠?</p>
            </div>
          </div>
        </div>

        <div className={styles.lastUpdated}>최종 업데이트: 2025년 8월 30일</div>
      </div>

      <Footer />
    </div>
  );
}
