'use client'
import React, { useState } from "react";
import HeaderSearch from "../components/headerSearch";
import styles from "./header.module.scss";
import Button from "../components/button";
import classNames from "classnames";
import { FaBell, FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [auth, setAuth] = useState(false);

  return (
    <React.Fragment>
      <section className={classNames("container", styles.desktopHeader)}>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrapper}>
            <div className={styles.logo}>
              <span>Regaloso</span>
            </div>
            <HeaderSearch />
            {
              auth ? <div className={styles.authWrapper}>
                <div className={styles.number}>100</div>
                <div className={styles.bell}>
                  <FaBell />
                </div>
                <div className={styles.quickSearch}>
                  G
                </div>
              </div>
                :
              <div className={styles.authWrapper}>
                <Button text="Accedi" color="#666" bgColor="#fff" fontSize="18px" lineHeight="18px" borderRadius="200px" />
                <Button text="Registrati" color="#fff" bgColor="#0ACF83" fontSize="18px" lineHeight="18px"  borderRadius="200px" />
              </div>
            }
          </div>
        </div>
      </section>
      <section className={classNames("container", styles.mobileHeader)}>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrapper}>
            <div className={styles.logo}>
              <span>Regaloso</span>
            </div>
            <div className="flex">
              <div className={styles.number}>100</div>
              <div className={styles.bell}>
                <FaBell />
              </div>
              <div className={styles.quickSearch}>
                <FaSearch />
              </div>
              <div className={styles.menu}>
                <AiOutlineMenu />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}