"use client"

import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";
import styles from "./style.module.scss";
import classNames from "classnames";

const gifts = [
    {
        id: 1,
        name: "near me"
    },
    {
        id: 2,
        name: "regali preferiti"
    },
    {
        id: 3,
        name: "regali a cui sono iscritto"
    },
    {
        id: 4,
        name: "regali vinti"
    },
    {
        id: 5,
        name: "regali assegnati"
    },
]

export default function HeaderSearch() {
    const [giftOption, setGiftOption] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("")

    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setGiftOption(false);
            setSearchKeyword("")
        }
      };
  
      // Attach the event listener
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        // Clean up the event listener when the component unmounts
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [giftOption]);

    return (
        <div className={styles.headerSearchContainer}>
            <div className={classNames("bg-[#f3f3f3] dark:bg-[#202020]", styles.headerSearchWrapper)}>
                <div>
                    <FaSearch size={25} className="text-[#666] dark:text-[#0ACF83]"/>
                </div>
                <div className={classNames("", styles.searchInputWrapper)}>
                    <input value={searchKeyword} placeholder="Ricerca il tuo regalo" onChange={(e) => setSearchKeyword(e.target.value)} />
                </div>
                <div className={styles.giftOption} onClick={() => setGiftOption(!giftOption)}>
                    <FaSlidersH size={21} color={"#363636"} className="dark:hidden" />
                </div>
            </div>
            <div className={classNames(styles.giftOptionsWrapper, giftOption === true ? styles.showOption : styles.hideOption)} ref={modalRef} >
                {
                    gifts.map(gift => {
                        return <div className={styles.giftItem} key={gift.id} onClick={() => setSearchKeyword(gift.name)}> 
                            {
                                gift.name
                            }
                        </div>
                    })
                }
            </div>
        </div>
    );
}