import MealsGrid from '../../components/meals/MealsGrid';
import styles from '../../styles/page.module.css';

export default function MealsPage() {
  // Przykładowe dane, które mogą pochodzić z bazy danych lub API
  const meals = [
    {
      id: 1,
      title: 'Curry',
      slug: 'Curry',
      image: '/images/curry.jpg',
      summary: 'Curry.',
      creator: 'Chef Mario',
    },
    {
      id: 2,
      title: 'Schnitzel',
      slug: 'Schnitzel',
      image: '/images/schnitzel.jpg',
      summary: 'A spicy and flavorful chicken curry dish.',
      creator: 'Chef Aditi',
    },
    {
      id: 3,
      title: 'Tomato Salad',
      slug: 'Tomato salad',
      image: '/images/tomato-salad.jpg',
      summary: 'A fresh and healthy salad for vegetarians.',
      creator: 'Chef Emily',
    },
  ];

  return (
    <div>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <div className={styles.cta}>
          <a href="/meals/share" className={styles.button}>
            Share Your Favorite Recipe
          </a>
        </div>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </div>
  );
}
