import React from "react";
import winners from "../utils/winners.json";
import styles from "./Winners.module.css";

const Winners = () => {
  return (
    <section className={styles.winnersSection}>
      <h2 className={styles.title}>Winners of Recent Events</h2>
      <div className={styles.winnerContainer}>
        {winners.map((w) => (
          <div key={w.id} className={styles.winnerCard}>
            <h3>{w.name ? w.name : w.team}</h3>
            <p>{w.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Winners;
