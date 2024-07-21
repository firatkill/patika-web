import { BarChart } from "@mui/x-charts";
import styles from "./OceanResults.module.css";

const OceanResults = (props) => {
  const dataset = [
    {
      value: 2.5,
      key: "Openness (Açıklık)",
    },
    {
      value: 3,
      key: "C",
    },
    {
      value: 3,
      key: "E",
    },
    {
      value: 4,
      key: "A",
    },
    {
      value: 3.5,
      key: "N",
    },
  ];
  const series = [
    {
      label: "Açıklık",
      data: [3.5],
    },
    {
      label: "Sorumluluk",
      data: [4],
    },
    {
      label: "DışaDönüklük",
      data: [4.5],
    },
    {
      label: "Uyumluluk",
      data: [5],
    },
    {
      label: "Duygusal Denge",
      data: [1],
    },
  ];
  const valueFormatter = (value) => `${value * 20}`;

  return (
    <div className={styles.oceanResultsContainer}>
      <h1 style={{ textAlign: "center" }}>Ocean Testi Sonuçları</h1>
      <ul className={styles.list}>
        <li>Yorum 1</li>
        <li>Yorum 2</li>
        <li>Yorum 3</li>
        <li>Yorum 4</li>
        <li>Yorum 5</li>
      </ul>
      {/* <Image
        className={styles.resultFig}
        src="/result.png"
        alt="result"
        width={1000}
        height={1000}
        priority
      /> */}
      <BarChart
        height={300}
        margin={{
          left: 60,

          top: 100,
        }}
        layout="horizontal"
        yAxis={[
          {
            scaleType: "band",
            data: ["OCEAN"],
          },
        ]}
        xAxis={[{ valueFormatter }]}
        series={series.map((s) => ({
          ...s,
          data: s.data.slice(0, 1),
          valueFormatter,
        }))}
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
