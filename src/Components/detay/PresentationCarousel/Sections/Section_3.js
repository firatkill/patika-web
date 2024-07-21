import Image from "next/image";
import styles from "./Sections.module.css";
const Section_3 = () => {
  return (
    <div
      id="section_3"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className={styles.sectionContainer}
    >
      <Image
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "30vh",
        }}
        width={100}
        height={100}
        priority
        src="/third_section.svg"
        alt="profile"
        className={styles.third_section_image}
      />

      <Image
        style={{
          height: "auto",
          maxHeight: "30vh",
        }}
        width={100}
        height={75}
        priority
        src="/gear.gif"
        alt="profile"
        className={styles.third_section_gif}
      />

      <h4
        className={styles.mobileIntegText}
        style={{ fontSize: "1rem", textAlign: "center" }}
      >
        Müşteriden elde edilmiş tüm bilgiler ( kişilik testleri, anketler ve
        seçilmiş kampanyalar ) güncel bilgilerle tekrar tahmin modeline
        gönderilerek, müşteri memnuniyeti ve önerilebilecek kampanyaların
        isabeti arttırılmış olunur.
      </h4>
    </div>
  );
};
export default Section_3;
