import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from "@/components/Navbar";
// import Image from "next/image";
// import Banner from "../public/Image.jpg";
import styles from "../styles/home.module.css";
import Highlights from "./highlights";
import Catergories from "./catergories";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>My Website</title>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet"></link>
  </Head>
  <div className="">
        <Navbar />
        <div className="flex items-center justify-center" style={{
      backgroundImage: 'url("./Image.jpg")',minHeight: "560px",
      height: "100%",width: "100%",backgroundSize: "cover", backgroundRepeat: "no-repeat"
    }}>
        {/* <Image src={Banner} alt="banner" className={styles.bannerimg} /> */}
        <h1 className={styles.bannertext}>Welcome<br/> to Hawaii</h1>
        </div>
       
        <Highlights/>
        <Catergories/>
        <Footer/>
      </div>
   </>
  )
}
