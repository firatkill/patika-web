import Image from "next/image";
import styles from "./Sections.module.css";
import { Grid } from "@mui/material";
const Section_2 = () => {
  return (
    <div id="section_2" className={styles.sectionContainer}>
      <Grid
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
        }}
        container
        spacing={2}
      >
        <Grid sx={{ height: "100%" }} item xs={6} md={4}>
          <Image
            width={100}
            height={100}
            priority
            src="/second_section.svg"
            alt="profile"
            className={styles.second_section_image}
          />
        </Grid>
        <Grid item xs={6} md={8}>
          <h3>
            Daha önce edinilmiş kişilik testi tahminleri ve anketlere dayanarak
            önerilen anketler arasında müşteri en çok istediğini seçer.
            Müşterinin istediği kampanyayı seçebilme özgürlüğü memnuniyeti
            arttırarak müşteriyi kaybetme riskini düşürür.
          </h3>
        </Grid>
      </Grid>
    </div>
  );
};
export default Section_2;
