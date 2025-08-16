import React, { useEffect, useState } from "react";
import styles from "./Notices.module.css";
import Footer from "../layouts/Footer"

function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetch("/api/notices")
      .then((res) => res.json())
      .then((data) => setNotices(data))
      .catch((err) => console.error("Error in fetching notices:", err));
  }, []);

  return (
    <>
    <div className={styles.noticePage}>
      <h1 className={styles.heading}>📢 Latest Notices</h1>

      <ul className={styles.noticeList}>
        {notices.map((notice) => (
          <li key={notice.id} className={styles.noticeItem}>
            <a 
              href={notice.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.noticeLink}
            >
              {notice.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
    
  );
}

export default Notices;
