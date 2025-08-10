'use client'

import styles from "@/styles/home.module.scss"
import Image from 'next/image'
import { useState, useEffect } from "react"

import cardDataList from "@/data/cardData.json"

import Card from "@/components/card"
import Footer from "@/components/footer"
import Pagination from "@/components/Pagination";
import SortSelect from "@/components/SortSelect";
import Header from "@/components/header";

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
            <Header />

            <SortSelect sortOrder={sortOrder} onChange={handleSortChange} />

            <div className={styles.CardLayout}>
            {currentCards.map((card, index) => (
                <Card key={index} data={card} />
            ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>

      <Footer />
    </div>
  );
}
