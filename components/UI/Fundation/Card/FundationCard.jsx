import { ArrowRight } from "components/Icons";
import styles from "./FundationCard.module.css";
import Link from "next/link";
import Button from "components/UI/Button/Button";
import Image from "next/image";
import useDesktop from "hooks/useDesktop";

const FundationCard = ({ img, title, description, url, url_text }) => {
  const { isDesktop } = useDesktop();

  return (
    <div className={styles.card_container}>
      <Image
        src={img.src}
        alt={title}
        fill={true}
        style={{ objectFit: "cover", position: "absolute" }}
      />

      <div className={styles.description_container}>
        <div className={styles.group}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
        <Link href={url} target="_blank">
          <Button
            variant="white"
            icon={<ArrowRight />}
            size={isDesktop ? "md" : "sm"}
          >
            {url_text}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FundationCard;
