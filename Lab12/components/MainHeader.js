import NavLink from './NavLink';
import styles from './main-header.module.css';

export default function MainHeader() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink href="/meals">Browse Meals</NavLink>
        </li>
        <li>
          <NavLink href="/community">Foodies Community</NavLink>
        </li>
      </ul>
    </nav>
  );
}
