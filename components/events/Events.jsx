import React from "react";
import styles from "./styles.module.css";

const Events = () => {
  return (
    <div className={styles.eventsection}>
      <h1 className="font-black text-3xl tracking-widest">
        Recent <span className="text-pink">Events</span>
      </h1>
      <div className={styles.event}>
        <div>
          <img
            alt="Art"
            src="/pic1.jpeg"
            class="h-64 w-96 object-cover sm:h-80 lg:h-96 rounded"
          />

          <div className="bg-gradient-to-r from-pink to-lightpink text-white flex justify-center items-center flex-col p-4">
            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Hec Inspection
            </h3>

            <p class="mt-2 max-w-sm text-gray-700">January 23, 2022-7:58 am</p>
          </div>
        </div>

        <div>
          <img
            alt="Art"
            src="/pic2.jpeg"
            class="h-64 w-96 object-cover sm:h-80 lg:h-96 rounded"
          />

          <div className="bg-gradient-to-r from-pink to-lightpink text-white flex justify-center items-center flex-col p-4">
            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Picnic 2021
            </h3>

            <p class="mt-2 max-w-sm text-gray-700">January 24, 2022-9:49 am</p>
          </div>
        </div>

        <div>
          <img
            alt="Art"
            src="/pic3.jpeg"
            class="h-64 w-96 object-cover sm:h-80 lg:h-96 rounded"
          />

          <div className="bg-gradient-to-r from-pink to-lightpink  text-white flex justify-center items-center flex-col p-4">
            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
              Information Seminar
            </h3>

            <p class="mt-2 max-w-sm text-gray-700">
              March 5, 2022@March 6, 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
