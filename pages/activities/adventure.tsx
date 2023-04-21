import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import styles from "../../styles/activities.module.css";
import Image from "next/image";
import Banner from "../../public/waves.jpg";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const Adventure = () => {
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
      .then((getData: any) => {
        setApiData(getData.data);
        console.log(getData);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  });

  return (
    <div className="">
      <Navbar />
      <div
        className="flex items-center justify-center"
        style={{
          backgroundImage: 'url("../Image.jpg")',
          minHeight: "560px",
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className={styles.bannertext}>Adventure</h1>
      </div>
      <div className="container mx-auto py-6 px-4">
        <h4 className="text- mt-5">
          <Link href="/">Home </Link>
          <span>
            {<MdKeyboardArrowRight style={{ display: "inline" }} />} Adventure
          </span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-5 gap-10">
          {apidata?.filter((categ:any) => {
                return categ?.name === "Adventure";
              })
              .map((item:any, index) => {
                return (
                  <>
                    {item.activities &&
                      item.activities.map((items:any, index:any) => (
                        <div key={index}>
                          <div
                            className="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
                            style={{ height: "auto" }}
                          >
                            <div className="m-3">
                              <Image
                                src={Banner}
                                alt="banner"
                                className=""
                                style={{ height: "100%" }}
                              />
                              {/* <h3 className="text-lg py-2">{item.name}</h3> */}
                              <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200 pt-3">
                                {items.title}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                );
              })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Adventure;
