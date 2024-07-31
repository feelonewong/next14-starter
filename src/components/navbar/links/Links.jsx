"use client";
import styles from "./Links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];
const Links = () => {
  const session = true;
  const isAdmin = true;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => {
          return <NavLink item={link} key={link.title}></NavLink>;
        })}
        {session ? (
          <>
            {isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>
            )}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
        )}
      </div>
      <button className={styles.menuButton} onClick={()=>setOpen((prev) => !prev)}>menu</button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => {
            return <NavLink item={link} key={link.title}></NavLink>;
          })}
        </div>
      )}
    </div>
  );
};

export default Links;
