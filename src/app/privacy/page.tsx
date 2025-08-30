"use client";

import { useRouter } from "next/navigation";
import { MdArrowBack } from "react-icons/md";

import Footer from "@/components/footer";

import styles from "@/styles/info-page.module.scss";

export default function PrivacyPage() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <button onClick={handleBackClick} className={styles.backButton}>
        <MdArrowBack />
      </button>

      <div className={styles.content}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>개인정보 처리방침</h1>
          <p className={styles.subtitle}>개인정보 보호에 관한 정책입니다</p>
        </div>

        <div className={styles.section}>
          <h2>1. 개인정보의 처리목적</h2>
          <p>
            제옹(ZEONG)은 다음의 목적을 위하여 개인정보를 처리합니다:
            <br />
            - 서비스 제공 및 이용자 지원
            <br />
            - 문의사항 처리 및 고객 서비스
            <br />- 서비스 개선 및 통계 분석
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. 처리하는 개인정보의 항목</h2>
          <p>
            본 웹사이트는 기본적으로 개인정보를 수집하지 않습니다.
            <br />
            다만, 문의사항 접수 시 다음 정보를 수집할 수 있습니다:
            <br />
            - 이메일 주소
            <br />- 문의 내용
          </p>
        </div>

        <div className={styles.section}>
          <h2>3. 개인정보의 처리 및 보유기간</h2>
          <p>
            수집된 개인정보는 수집 목적 달성 시까지 보유하며, 관련 법령에 따라
            일정 기간 보관할 수 있습니다.
            <br />
            문의사항: 처리 완료 후 1년간 보관
          </p>
        </div>

        <div className={styles.section}>
          <h2>4. 개인정보의 제3자 제공</h2>
          <p>
            제옹은 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
            <br />
            다만, 다음의 경우에는 예외로 합니다:
            <br />
            - 이용자가 사전에 동의한 경우
            <br />- 법령의 규정에 의한 경우
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. 개인정보의 파기</h2>
          <p>
            개인정보 처리목적이 달성된 경우 지체없이 해당 개인정보를 파기합니다.
            <br />
            파기방법: 전자적 파일의 경우 복구 불가능한 방법으로 삭제
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. 이용자의 권리</h2>
          <p>
            이용자는 언제든지 개인정보 처리 현황에 대해 열람을 요구할 수 있으며,
            <br />
            오류가 있는 경우 정정 또는 삭제를 요구할 수 있습니다.
            <br />
            문의처: zeong0509@gmail.com
          </p>
        </div>

        <div className={styles.section}>
          <h2>7. 개인정보 보호책임자</h2>
          <p>
            성명: 제옹
            <br />
            연락처: zeong0509@gmail.com
            <br />
            개인정보 처리와 관련한 문의사항은 위 연락처로 연락해주시기 바랍니다.
          </p>
        </div>

        <div className={styles.lastUpdated}>최종 업데이트: 2025년 8월 30일</div>
      </div>

      <Footer />
    </div>
  );
}
