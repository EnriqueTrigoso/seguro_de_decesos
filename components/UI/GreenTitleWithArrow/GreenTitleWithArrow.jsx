import ArrowRight from 'components/Icons/ArrowRight'
import Link from 'next/link';
import styles from './GreenTitleWithArrow.module.css'

const GreenTitleWithArrow = ({ children, href, onClick }) => {

    return (

        href ? (
            <Link
                className={styles.white_button}
                href={href}
            >
                {children}
                <ArrowRight width={17} height={17} fill={'var(--green-primary'} />
            </Link>
        ) : (
            <button
                className={styles.white_button}
                onClick={onClick}
            >
                {children}
                <ArrowRight width={17} height={17} fill={'var(--green-primary'} />
            </button>
        )

    )
}

export default GreenTitleWithArrow;