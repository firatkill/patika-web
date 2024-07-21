import { Card, CardActionArea, CardContent, Grid } from "@mui/material";
import styles from "./TotalResult.module.css";

const TotalResult = (props) => {
  return (
    <div classname={styles.totalResultContainer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.oceanResultsHalf}>
            <h1>Ocean Test Results Here</h1>
            Ocean Results hereOcean Results here Ocean Results here Ocean
            Results here Ocean Results here Ocean Results here Ocean Results
            here Ocean Results here Ocean Results here Ocean Results here Ocean
            Results here Ocean Results here Ocean Results here Ocean Results
            here Ocean Results here Ocean Results here Ocean Results here Ocean
            Results here Ocean Results hereOcean Results here Ocean Results
            hereOcean Results here Ocean Results here Ocean Results here Ocean
            Results here Ocean Results here Ocean Results here Ocean Results
            here Ocean Results here Ocean Results here Ocean Results here Ocean
            Results here Ocean Results here Ocean Results here Ocean Results
            here Ocean Results hereOcean Results here Ocean Results here Ocean
            Results hereOcean Results here Ocean Results hereOcean Results here
            Ocean Results here Ocean Results here Ocean Results here
          </div>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <div className={styles.surveyResultsHalf}>
            <h1>Total Results Here</h1>
            Total Results Here Total Results Here Total Results Here Total
            Results HereTotal Results HereTotal Results HereTotal Results Here
            Total Results Here Total Results Here Total Results Here Total
            Results Here Total Results Here Total Results Here Total Results
            Here Total Results Here Total Results Here Total Results Here Total
            Results Here Total Results Here Total Results Here Total Results
            Here Total Results Here Total Results Here Total Results HereTotal
            Results HereTotal Results Here Total Results HereTotal Results Here
            Total Results HereTotal Results HereTotal Results Here Total Results
            Here Total Results HereTotal Results Here Total Results Here
          </div>
        </Grid>
        <Grid item xs={12}>
          <h2 style={{ textAlign: "center", width: "100%" }}>
            KAMPANYA ÖNERİLERİ
          </h2>
          <Grid container spacing={2}>
            {/* Cards */}
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ width: "100%" }}>
                <CardActionArea>
                  <CardContent>
                    <h5>Lizard</h5>
                    <p>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ width: "100%" }}>
                <CardActionArea>
                  <CardContent>
                    <h5>Lizard</h5>
                    <p>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card sx={{ width: "100% !important" }}>
                <CardActionArea>
                  <CardContent>
                    <h5>Lizard</h5>
                    <p>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Card sx={{ width: "100% !important" }}>
                <CardActionArea>
                  <CardContent>
                    <h5>Lizard</h5>
                    <p>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Card sx={{ width: "100% !important" }}>
                <CardActionArea>
                  <CardContent>
                    <h5>Lizard</h5>
                    <p>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <button className={styles.prevButton} onClick={props.previousStep}>
            Geri
          </button>
        </Grid>
      </Grid>
    </div>
  );
};
export default TotalResult;
