import styles from "./ContentItem.module.css";
import React, { useState } from "react";

import TimeAgo from 'javascript-time-ago'
// English.
import en from 'javascript-time-ago/locale/en'
TimeAgo.addLocale(en);

const ContentItem = ({title, date, description, image}) => {
    // Create formatter (English).
    const {src, alt} = image;

    const timeAgo = new TimeAgo('en-US')

    let date_component = <></>
    if (date) {
        date_component = (<>
                        <p className={styles.date}>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
                        <em className={styles.muted}>{timeAgo.format(date)}</em>
                    </>)
    } else {
        date_component = <></>
    }
    

    return(
        <div className={styles.item}>
            <img className={styles.image} src={src} alt={alt} />
            <h3 className={styles.title}>{title}</h3>
            {date_component}
            
            <div className={styles.desc}>
                {description}
            </div>
        </div>
    );
}

export default ContentItem;
