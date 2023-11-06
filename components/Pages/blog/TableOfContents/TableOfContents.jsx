import styles from "./TableOfContents.module.css";
import { useEffect, useState } from "react";

export default function TableOfContents({ data }) {
  // const h2Headings = data
  //   .filter((section) => typeof section === "string")
  //   .map((section) => {
  //     const matches = section.match(/^##\s+(.+)/);
  //     return matches ? matches[1] : null;
  //   });

  const h2Headings = data
    .filter((section) => typeof section === "string")
    .map((section) => {
      const matches = section.match(/^##\s+(.+)/);
      return matches ? matches[1] : null;
    })
    .filter((heading) => heading !== null);

  // Función para fijar la tabla de contenido al hacer scroll
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const toc = document.querySelector(`.${styles.toc}`);
    const initialOffsetTop = toc.getBoundingClientRect().top;

    const handleScroll = () => {
      if (window.scrollY > initialOffsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const tocClassName = isSticky ? `${styles.toc} ${styles.sticky}` : styles.toc;

  return (
    <div className={styles.table_of_contents}>
      <div className={tocClassName}>
        <h2 className={styles.subtitle}>Tabla de contenido</h2>
        <ul>
          {h2Headings.map((item, index) => (
            <li key={index}>
              <a href={`#${index === 0 ? index + 1 : index + 1}`}>{item}</a>
              {/* <a href={`#${index}`}>{item}</a> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
