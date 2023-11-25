'use client'
import React, { useEffect, useState } from "react";
import HeaderSearch from "../components/headerSearch";
import styles from "./header.module.scss";
import Button from "../components/button";
import classNames from "classnames";
import { FaBell } from "react-icons/fa";
import { IoMailUnread, IoNotificationsSharp, IoSettings, IoLogOut } from "react-icons/io5";
import DisplayMenu from "./sidebar";
import { apiService } from "@/app/_services/apiService";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoGift } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

import ThemeSwitcher from "../components/themeSwitcher";

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
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    apiService.get('notifications')
      .then((res) => setNotifications(res))
      .catch((error: any) => console.error(error));
  }, [])

  const handleClick = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <React.Fragment>
      <section className={classNames("container", styles.desktopHeader)}>
        <div className={classNames("bg-[#FFFFFF] dark:bg-[#2B2B2B]", styles.headerContainer)}>
          <div className={styles.headerWrapper}>
            <div className={styles.logo}>
              Regaloso
            </div>
            <div className="w-1/2">
              <HeaderSearch />
            </div>
            {
              auth === true ? <div className={styles.authWrapper}>
                <ThemeSwitcher />
                <div className={classNames("text-[#FFFFFF] dark:text-[#221F1F]", styles.number)}>100</div>
                <div className={classNames("bg-[#F3F3F3] dark:bg-[#221F1F]", styles.bell)} onClick={() => setShowNotification(!showNotification) }>
                  <FaBell />
                </div>
                <div className={classNames("bg-[#F3F3F3] dark:bg-[#221F1F]", styles.quickSearch)}>
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
            showNotification && <div className="absolute right-0 top-[120px] p-10 bg-white dark:bg-[#2B2B2B] rounded-b-[20px] shadow-normal w-[30%] flex flex-col gap-[20px] -z-10">
              {
                notifications.map((notification, index) => (
                  <div key={index} className={classNames({
                    "flex items-center justify-between py-[15px] px-[30px] rounded-[10px]": true, 
                    "bg-[#F3F3F3] dark:bg-[#202020] dark:text-[#F3F3F3]": notification.messageStatus === true || notification.notificationStatus === true, 
                    "bg-[white] dark:bg-[#202020] dark:text-[#F3F3F3] border border-[#F3F3F3]": notification.messageStatus === false && notification.notificationStatus === false
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
      <section className={classNames("container text-[#2B2B2B] dark:text-[#F3F3F3]", styles.mobileHeader)}>
        <div className={styles.headerContainer}>
          <div className={classNames({
            "bg-[#FFFFFF] dark:bg-[#2B2B2B] flex flex-col gap-[20px] ease-in-out duration-300  shadow-normal":true, 
            "h-fit":showSidebar, 
            "l": !showSidebar
          }, styles.headerWrapper)}>
            <div className="flex items-center justify-between">
              <div className={styles.logo}>
                <span>Regaloso</span>
              </div>
              <div className="flex items-center gap-3">
                <ThemeSwitcher />
                <div className={classNames("text-[#FFFFFF] dark:text-[#2B2B2B]", styles.number)}>100</div>
                <div className={classNames("bg-[#F3F3F3] dark:bg-[#221F1F]", styles.bell)} onClick={() => setShowNotification(!showNotification) }>
                  <FaBell />
                </div>
                <div>
                  <button onClick={handleClick} className="flex flex-col ml-3 justify-center items-center gap-[2px]">
                    <span className={classNames({
                      "bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-[24px] rounded-sm bg-[#0ACF83]":true, 
                      "rotate-45 translate-y-1": showSidebar, 
                      "-translate-y-0.5": !showSidebar
                    })}></span>
                    <span className={classNames({
                      "bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-[24px] rounded-sm bg-[#0ACF83]":true, 
                      "opacity-0": showSidebar, 
                      "opacity-100": !showSidebar
                    })}></span>
                    <span className={classNames({
                      "bg-steel-500 block transition-all duration-300 ease-out h-0.5 w-[24px] rounded-sm bg-[#0ACF83]":true, 
                      "-rotate-45 -translate-y-1": showSidebar, 
                      "translate-y-0.5": !showSidebar
                    })}></span>
                  </button>
                </div>
                {/* <DisplayMenu /> */}
              </div>
            </div>
            {
              showSidebar && <div className="flex flex-col gap-[20px]">
                <HeaderSearch />
                <button className="w-full border border-[#0ACF83] flex items-center gap-5 justify-center py-2 rounded-[200px]">
                  <AiFillPlusCircle color="#0ACF83" size={25} />
                  <div className="text-[#0ACF83] text-[16px] font-normal">Inserisci regalo</div>
                </button>
                <div className="flex flex-col gap-[25px]">
                  <div className="flex items-center gap-6">
                    <IoGift color="#0ACF83" size={35} />
                    <div className="text-[18px] font-semibold">Feed</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <AiFillHeart color="#0ACF83" size={35} />
                    <div className="text-[18px] font-semibold">Preferiti</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <BiSolidUser color="#0ACF83" size={35} />
                    <div className="text-[18px] font-semibold">Profilo</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <IoNotificationsSharp color="#0ACF83" size={35} />
                    <div className="text-[18px] font-semibold">Notifiche</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <IoSettings color="#0ACF83" size={35} />
                    <div className="text-[18px] font-semibold">Impostazioni</div>
                  </div>
                  <div className="flex items-center gap-6">
                    <IoLogOut color="#0ACF83" size={35} />
                    <div className="text-[18px] font-semibold">Logout</div>
                  </div>
                </div>
              </div>
            }
          </div>
          
        </div>
      </section>
    </React.Fragment>
  );
}