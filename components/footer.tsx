import styles from "../styles/footer.module.css"
import Image from "next/image";
import whitelogo from "../public/white-logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <footer className={styles.footer}>
        <div className="container mx-auto">
        <Link href="/">
        <Image src={whitelogo} alt="Footer" className={styles.footer_img} />
        </Link>
        </div>
        </footer>
    </>
  )
}

export default Footer