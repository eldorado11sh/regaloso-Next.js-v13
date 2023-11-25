import React from "react";
import classNames from "classnames";
import styles from "./footer.module.scss";
import Link from "next/link";

const links = [
    {
        id: 1,
        text: "Come Funziona",
        link: ""
    },
    {
        id: 2,
        text: "Utente",
        link: ""
    },
    {
        id: 3,
        text: "Note Legali",
        link: ""
    },
    {
        id: 4,
        text: "Privacy | Cookie",
        link: ""
    }
]

export default function Footer() {
    return (
        <React.Fragment>
            <section className={styles.footer}>
                <div className={classNames("container", styles.footerWrapper)}>
                    <div className={styles.logo}>
                        <span>Regaloso</span>
                    </div>
                    <ul className={styles.links}>
                        {
                            links.map((link, i) => {
                                return <li key={i}>
                                    <Link className="dark:text-[#F3F3F3]" href={link.link}>
                                        {
                                            link.text
                                        }
                                    </Link>
                                </li>;
                            })
                        }
                    </ul>
                </div>
            </section>
        </React.Fragment>
    );
}