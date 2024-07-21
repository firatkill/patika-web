import Image from "next/image";
import styles from "./BizKimiz.module.css";
const BizKimiz = () => {
  return (
    <div className={styles.bizKimizContainer}>
      <div className={styles.profile_cards}>
        <div className={styles.card}>
          <div className={styles.card_description}>
            <h2 className={styles.card_description_title}>Fırat Kıl </h2>

            <span className={styles.card_description_profession}>
              Full Stack Web Geliştirici{" "}
            </span>

            <span className={styles.card_description_company}>
              Bilgisayar Mühendisliği 3/4
            </span>

            <div className={styles.card_description_social}>
              <ul className={styles.list}>
                <li>
                  <a href="#">
                    <Image
                      src="/mail_icon.svg"
                      alt="mail icon"
                      width={25}
                      height={25}
                      priority
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Image
                      src="/github_icon.svg"
                      alt="github icon"
                      width={25}
                      height={25}
                      priority
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <Image
                      src="/linkedin_icon.svg"
                      alt="linkedin icon"
                      width={25}
                      height={25}
                      priority
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Image
            width={1260}
            height={750}
            priority
            src="/dummy.webp"
            alt="profile"
            className={styles.card_image}
          />
        </div>
        <div className={styles.card}>
          <div className={styles.card_description}>
            <h2 className={styles.card_description_title}>Sezer Küçükcan </h2>

            <span className={styles.card_description_profession}>
              Full Stack Web Geliştirici{" "}
            </span>

            <span className={styles.card_description_company}>
              Bilgisayar Mühendisliği
              <Image
                src="/graduate.svg"
                width={30}
                height={30}
                priority
                alt="profile"
              />
            </span>

            <div className={styles.card_description_social}>
              <ul className={styles.list}>
                <li>
                  <a href="#">
                    <Image
                      src="/mail_icon.svg"
                      alt="mail icon"
                      width={25}
                      height={25}
                      priority
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Image
                      src="/github_icon.svg"
                      alt="github icon"
                      width={25}
                      height={25}
                      priority
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <Image
                      src="/linkedin_icon.svg"
                      alt="linkedin icon"
                      width={25}
                      height={25}
                      priority
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Image
            width={1260}
            height={750}
            priority
            src="/dummy.webp"
            alt="profile"
            className={styles.card_image}
          />
        </div>
        <div className={styles.card}>
          <div className={styles.card_description}>
            <h2 className={styles.card_description_title}>Mehmet Emin </h2>

            <span className={styles.card_description_profession}>
              Full Stack Web Geliştirici{" "}
            </span>

            <span className={styles.card_description_company}>
              Bilgisayar Mühendisliği 4/4
            </span>

            <div className={styles.card_description_social}>
              <ul className={styles.list}>
                <li>
                  <a href="#">
                    <Image
                      src="/mail_icon.svg"
                      alt="mail icon"
                      width={25}
                      height={25}
                      priority
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Image
                      src="/github_icon.svg"
                      alt="github icon"
                      width={25}
                      height={25}
                      priority
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <Image
                      src="/linkedin_icon.svg"
                      alt="linkedin icon"
                      width={25}
                      height={25}
                      priority
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Image
            width={1260}
            height={750}
            priority
            src="/dummy.webp"
            alt="profile"
            className={styles.card_image}
          />
        </div>
      </div>{" "}
    </div>
  );
};
export default BizKimiz;
