// Example: page.js

import styles from "./page.module.css";
import Header from "../../Components/Header";
import BannerSection from "../../Components/BannerSection";
import BrandsSlider from "../../Components/BrandsSlider";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}> {/* Applying the container class */}
        <div className={styles.HomePageContainer}>
             <Header/>
             <BannerSection/>
             <BrandsSlider/>
        </div>
      </div>
    </main>
  );
}


