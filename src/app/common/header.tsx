'use client'
import React, { useEffect, useState } from "react";
import HeaderSearch from "../components/headerSearch";
import styles from "./header.module.scss";
import Button from "../components/button";
import classNames from "classnames";
import { FaBell, FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { TEST_HOST } from "../utils/constant";
import axios from "axios";
import { IoMailUnread, IoNotificationsSharp} from "react-icons/io5";
import DisplayMenu from "./sidebar";

export default function Header() {
  const [auth, setAuth] = useState(true);
  const [showNotification, setShowNotification] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      firstname: "", 
      lastname: "", 
      message: "", 
      messageStatus: false, 
      notificationStatus: false
    }
  ])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    axios.get(`${TEST_HOST}/notifications`)
    .then((res) => setNotifications(res.data))
  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <React.Fragment>
      <section className={classNames("container", styles.desktopHeader)}>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrapper}>
            <div className={styles.logo}>
              Regaloso
            </div>
            <div className="w-1/2">
              <HeaderSearch />
            </div>
            {
              auth === true ? <div className={styles.authWrapper}>
                <div className={styles.number}>100</div>
                <div className={styles.bell} onClick={() => setShowNotification(!showNotification) }>
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
          {
            showNotification && <div className="absolute right-0 top-[120px] p-10 bg-white rounded-b-[20px] shadow-normal w-[30%] flex flex-col gap-[20px] -z-10">
              {
                notifications.map((notification, index) => (
                  <div key={index} className={classNames({
                    "flex items-center justify-between py-[15px] px-[30px] rounded-[10px]": true, 
                    "bg-[#F3F3F3]": notification.messageStatus === true || notification.notificationStatus === true, 
                    "bg-[white] border border-[#F3F3F3]": notification.messageStatus === false && notification.notificationStatus === false
                  })}>
                    <div className="text-[14px]">
                      <div className="font-bold">{notification.firstname + " " + notification.lastname}</div>
                      <div className="font-normal">{notification.message}</div>
                    </div>
                    {
                      notification.messageStatus === true 
                      ? <div><IoMailUnread size={24} color="#0ACF83" /></div>
                      : <div><IoNotificationsSharp size={24} color={notification.notificationStatus === true ? "#0ACF83" : "#F3F3F3" } /></div>
                    }
                  </div>
                ))
              }
            </div>
          }
        </div>
      </section>
      <section className={classNames("container", styles.mobileHeader)}>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrapper}>
            <div className={styles.logo}>
              <span>Regaloso</span>
            </div>
            <div className="flex">
              {/* <button onClick={handleClick} className="flex flex-col ml-3 justify-center items-center gap-[2px]">
                <span className={classNames({
                  "bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-[24px] rounded-sm bg-[#0ACF83]":true, 
                  "rotate-45 translate-y-1": isOpen, 
                  "-translate-y-0.5": !isOpen
                })}></span>
                <span className={classNames({
                  "bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-[24px] rounded-sm bg-[#0ACF83]":true, 
                  "opacity-0": isOpen, 
                  "opacity-100": !isOpen
                })}></span>
                <span className={classNames({
                  "bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-[24px] rounded-sm bg-[#0ACF83]":true, 
                  "-rotate-45 -translate-y-1": isOpen, 
                  "translate-y-0.5": !isOpen
                })}></span>
              </button> */}
              <DisplayMenu />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}