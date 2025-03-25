import Link from 'next/link';
import styles from  '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        {/* Left navbar-side */}
        <ul className={styles.menu}>
          <li>
            <Link href="/inacap" className={styles.link}>
              Inacap
            </Link>
          </li>
          <li>
            <Link href="/bootcamps" className={styles.link}>
              Bootcamp
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className={styles.link}>
              Portfolio
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          SaukCode
        </Link>

        {/* Right navbar-side */}
        <ul className={styles.menu}>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
