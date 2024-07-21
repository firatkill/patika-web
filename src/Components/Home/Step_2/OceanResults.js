import Image from "next/image";
import styles from "./OceanResults.module.css";

const OceanResults = (props) => {
  return (
    <div className={styles.oceanResultsContainer}>
      <h1>Ocean Testi Sonuçları</h1>
      <ul className={styles.list}>
        <li>Yorum 1</li>
        <li>Yorum 2</li>
        <li>Yorum 3</li>
        <li>Yorum 4</li>
        <li>Yorum 5</li>
      </ul>
      <Image
        className={styles.resultFig}
        src="/result.png"
        alt="result"
        width={1000}
        height={1000}
        priority
      />
      <div className={styles.buttons}>
        <button onClick={props.previousStep} className={styles.prevButton}>
          Geri
        </button>
        <button onClick={props.nextStep} className={styles.nextButton}>
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default OceanResults;
