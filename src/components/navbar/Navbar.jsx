import NavLinks from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>lama</Link>
      <div>
        <NavLinks></NavLinks>
      </div>
    </div>
  );
};

export default Navbar;
