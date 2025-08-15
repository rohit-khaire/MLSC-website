import React, { useRef } from "react";
import events from "../utils/upcomingEvents.json";
import styles from "./UpcomingEvents.module.css";

const UpcomingEvents = () => {
  const scrollRef = useRef();

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth"
    });
  };

  return (
    <section className={styles.upcomingSection}>
      <h1 className={styles.upcomingTitle}>Upcoming Events</h1>
      <div className={styles.controls}>
        <button onClick={() => scroll("left")}>&lt;</button>
        <button onClick={() => scroll("right")}>&gt;</button>
      </div>
      <div className={styles.scrollContainer} ref={scrollRef}>
        {events.map((e) => (
          <div key={e.id} className={styles.card}>
            <img src={e.image} alt={e.name} />
            <h3>{e.name}</h3>
            <p>{e.date}</p>
            <p>{e.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
