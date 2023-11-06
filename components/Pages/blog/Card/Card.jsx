import styles from "./Card.module.css";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Image from "next/image";
import { AspectRatio } from "./AspectRatio.js";
import { useState, useEffect } from "react";

export default function Card({ data, ratio = 1.466 }) {
  const date = new Date(data.attributes.publishedAt);
  const formattedDate = format(date, "dd 'de' MMMM 'de' yyyy", { locale: es });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Link href={`/blog/${data.attributes.slug}`}>
        <div className={styles.card}>
          <AspectRatio ratio={isMobile ? 1.466 : ratio}>
            <Image
              src={data.attributes.cover.data.attributes.url}
              alt="A house in a forest"
              className={styles.image}
              fill
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                borderRadius: "4px",
                backgroundPosition: "top",
              }}
            />
          </AspectRatio>
          <div className={styles.content}>
            <div className={styles.category}>
              {data.attributes.categories.data[0].attributes.name}
            </div>
            <h3 className={styles.title}>{data.attributes.title}</h3>
            <p className={styles.date}>Publicado el {formattedDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
