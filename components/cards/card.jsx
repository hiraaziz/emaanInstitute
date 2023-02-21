import React from "react";
import { cardlist } from "./cardlist";
import styles from "./styles.module.css";

const Card = () => {
  return (
    <section className={styles.cardsection}>
      <h1 className="font-black text-3xl tracking-widest">
        Available <span className="text-pink">Courses</span>
      </h1>
      <div className={styles.card}>
        {cardlist.map((card, index) => (
          <div
            key={index}
            class="max-w-xs rounded overflow-hidden shadow-lg border-t-4 border-pink"
          >
            <img class="w-full" src="/ai.jpg" alt="Card image" />
            <div class="px-6 py-4">
              <div class="mb-2">
                {card.tags.map((tag, ind) => (
                  <span
                    key={ind}
                    class="inline-block bg-lightpink rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div class="font-bold text-xl mb-2">{card.title}</div>
              <div class="mt-4">
                <span class="text-gray-600 text-sm">
                  {card.years} years Course
                </span>
              </div>
            </div>
            <div class="border-t border-gray-200">
              <div class="px-6 py-4 flex justify-end space-x-1">
                <button class="bg-pink hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View More
                </button>
                <button class="bg-pink hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
