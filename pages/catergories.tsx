import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles/catergories.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import Contact from "../public/contact-avatar.png";
import Link from "next/link";


const Catergories = () => {
  const [apidata, setApiData] = useState([]);

  var url = "https://web-dev.dev.kimo.ai/v1/categories";
  url = "https://cors.iamnd.eu.org/?url=" + url;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((getData) => {
        setApiData(getData.data);
        console.log(getData);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }, []);

  return (
    <>
      <section className={styles.sec_cate}>
        <div className="container mx-auto">
          <div className="h-full grid lg:grid-cols-2 lg:gap-6 md:grid-cols-1 sm:grid-cols-1 md:gap-4 sm:gap-2 my-6 h-80">
            <div>
              <h2 className={styles.sec_title}>catergories</h2>
              {/* {apidata.map((datavalue) => { */}
                {/* console.table(datavalue); */}
                {/* return ( */}
                  <div className={styles.categ_box}>
                    <p><Link href="/activities/adventure">Adventure</Link></p>
                    <span className={styles.cate_arrow}>
                      <Link href="/activities/adventure">{<AiOutlineArrowRight size={16} />}</Link>
                    </span>
                  </div>
                  <div className={styles.categ_box}>
                    <p><Link href="/activities/culinary">Culinary</Link></p>
                    <span className={styles.cate_arrow}>
                      <Link href="/activities/culinary">{<AiOutlineArrowRight size={16} />}</Link>
                    </span>
                  </div>
                  <div className={styles.categ_box}>
                    <p><Link href="/activities/ecotourism">Eco-tourism</Link></p>
                    <span className={styles.cate_arrow}>
                      <Link href="/activities/ecotourism">{<AiOutlineArrowRight size={16} />}</Link>
                    </span>
                  </div>
                  <div className={styles.categ_box}>
                    <p><Link href="/activities/family">Family</Link></p>
                    <span className={styles.cate_arrow}>
                      <Link href="/activities/family">{<AiOutlineArrowRight size={16} />}</Link>
                    </span>
                  </div>
                  <div className={styles.categ_box}>
                    <p><Link href="/activities/sport">Sport</Link></p>
                    <span className={styles.cate_arrow}>
                      <Link href="/activities/sport">{<AiOutlineArrowRight size={16} />}</Link>
                    </span>
                  </div>
                {/* ); */}
              {/* // })} */}
            </div>
            <div>
              <h2 className={styles.sec_title}>Travel Guide</h2>
              <div className={styles.contact_card}>
                    
                    <div className="mt-3 mx-auto w-3/4 self-center">
                      <p className={styles.contact_title}>
                      Hadwin Malone
                      </p>
                      <p className={styles.contact_subtitle}>
                      Guide since 2012
                      </p>
                      <Link href="/" className={styles.contact_btn}>Contact</Link>
                      
                    </div>
                    <div className={styles.contactimg}>
                      <Image src={Contact} alt="Contact" className={styles.contactimg} />
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catergories;
