import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <section className="flex flex-row md:flex-col w-full h-full justify-evenly items-center">
        <div>
          <h1 className="text-6xl font-black animate-pulse">
            EMAAN <span className="text-pink">Institute</span>{" "}
          </h1>
          <h3 className="text-3xl font-normal tracking-widest">
            of management and sciences
          </h3>
          <p className="w-96 mt-6 font-normal">
            We offer a wide range of high quality of teaching and
            extra-curricular activities. Providing state-of-the-art campus
            building in order to create congenial academic environment. Hiring
            the highly qualified, profoundly experienced and veteran faculty
            members, who will uplift the standard of education and transform the
            students’ lives.
          </p>
          <div
            className="bg-gradient-to-r from-darkpink to-lightpink 
          rounded flex flex-col justify-center items-start w-72 p-4 "
          >
            <h2 className="text-white text-2xl font-extrabold ">
              ADMISSIONS OPEN
            </h2>
            <button
              className="transition ease-in-out delay-150 hover:scale-105 
            duration-300 bg-white text-pink font-bold py-2 px-4 rounded w-32 "
            >
              Enroll Now
            </button>
          </div>
        </div>

        <div className=" bg-pink rounded-full h-80 w-80 flex justify-center mt-36">
          <img src={"/graduate.png"} className="w-80 h-4/5 absolute -mt-48 " />
        </div>
      </section>
    </div>
  );
};

export default Banner;
