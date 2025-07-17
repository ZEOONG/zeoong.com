import styles from "@/styles/card.module.scss"

export default function Card() {
    return (
        <div className={styles.CardContainer}>
            <h1>Card</h1>
            <div className={styles.CardContent}>
                <div className={styles.InCardLayout}>
                    <div className="WritingLayout">
                        <h1>Title</h1>
                        <p>Hello WorldHello WorldHello WorldHello World</p>
                        <div className="ContentInfo">
                            <h1>0</h1>
                            <h1>0</h1>
                        </div>
                    </div>
                    <div className="DownLoadLayout">
                    <h1>0</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}