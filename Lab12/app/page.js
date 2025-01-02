import styles from '../styles/page.module.css';
import ImageSlideshow from '../components/images/ImageSlideshow';
import MainHeader from '../components/MainHeader'; // Import komponentu MainHeader
import Image from 'next/image';
export default function Home() {
  return (
    <div className={styles.page}>
      {/* Menu główne */}
      <MainHeader />

      <header className={styles.header}>
        <div className={styles.logo}>
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
          <h1>NextLevel Food</h1>
        </div>
      </header>

      <main className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Slideshow po lewej */}
          <div className={styles.slideshowContainer}>
            <ImageSlideshow />
          </div>
          {/* Tekst i przyciski po prawej */}
          <div className={styles.textContainer}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
            <div className={styles.cta}>
              <a href="/community" className={styles.buttonSecondary}>
                Join the Community
              </a>
              <a href="/meals" className={styles.buttonPrimary}>
                Explore Meals
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
