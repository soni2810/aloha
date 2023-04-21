import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles/highlights.module.css";
import {BsArrowRightShort} from 'react-icons/bs'

const Highlights = () => {
  const [apidata, setApiData] = useState([]);

  var url = "https://web-dev.dev.kimo.ai/v1/highlights";
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
    <div className="container mx-auto mt-10 pb-20 px-4">
      <h2 className={styles.sec_title}>Highlights</h2>
      <div className={styles.card_header}>
        {apidata.map((datavalue:any) => {
          console.table(datavalue);
          return (
            <div className={styles.card} key={datavalue.id}>
              <img
                className="w-full h-auto rounded-t-xl"
                src={datavalue.image}
                alt="Image Description"
              />
              <div className={styles.card_body}>
                <h3 className={styles.Card_title}>{datavalue.title}</h3>
                <p className={styles.card_desc}>{datavalue.description}</p>
                <a className={styles.ellipse} href="#">
                  <span><BsArrowRightShort/></span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default Highlights;
