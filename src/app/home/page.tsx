'use client'

import styles from "@/styles/home.module.scss"
import Image from 'next/image'
import Card from "@/components/card"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"

import cardDataList from "@/data/cardData.json"

export default function Home() {
  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("latest");

  const sortedCards = [...cardDataList].sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.info.date).getTime() - new Date(a.info.date).getTime();
    } else if (sortOrder === "oldest") {
      return new Date(a.info.date).getTime() - new Date(b.info.date).getTime();
    } else if (sortOrder === "downloads_desc") {
      return b.info.downloads - a.info.downloads;
    } else if (sortOrder === "downloads_asc") {
      return a.info.downloads - b.info.downloads;
    }
    return 0;
  });

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = sortedCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(sortedCards.length / cardsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, sortOrder]);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="/Eye.png"
            alt=""
            width={236}
            height={143}
            style={{ width: '50px', height: 'auto' }}
            priority
          />
        </div>
      </div>

      <div className={styles.mainlayout}>
        <div className={styles.headerlayout}>
          <div className={styles.profile}>
            <Image
              src="/TitleImage.png"
              alt=""
              width={300}
              height={120}
              style={{ width: '300px', height: 'auto' }}
              priority
            />
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label htmlFor="sortSelect" style={{ marginRight: 10, fontWeight: 'bold' }}>
            정렬 기준:
          </label>
          <select
            id="sortSelect"
            value={sortOrder}
            onChange={handleSortChange}
            style={{ padding: 6, borderRadius: 4 }}
          >
            <option value="latest">최신순</option>
            <option value="oldest">오래된 순</option>
            <option value="downloads_desc">다운로드 많은순</option>
            <option value="downloads_asc">다운로드 적은순</option>
          </select>
        </div>

        <div className={styles.CardLayout}>
          {currentCards.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            className={styles.arrowButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ←
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={
                currentPage === i + 1
                  ? styles.activePageButton
                  : styles.pageButton
              }
            >
              {i + 1}
            </button>
          ))}

          <button
            className={styles.arrowButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
