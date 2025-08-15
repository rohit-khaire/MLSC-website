import { Link } from "react-router-dom";
import Events from "./Events";

import Footer from "../layouts/Footer"
import styles from './Works.module.css';
import UpcomingEvents from "../components/UpcomingEvents";

const Works = () => {
    return (
        <section className={styles.work_section}>
            <UpcomingEvents />
            <Events count={8}/>
            
            <div className={styles.footer_container}>
                <Footer />
            </div>
        </section>
    )
}
export default Works;