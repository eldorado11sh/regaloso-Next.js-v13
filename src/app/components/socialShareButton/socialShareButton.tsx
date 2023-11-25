'use client'
import classNames from "classnames";
import styles from "./social.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FacebookShareButton, TwitterShareButton, EmailShareButton, InstapaperShareButton } from "react-share";

export default function SocialMediaButton() {
  return (
    <ul>
      <li className={`${styles.share} ${styles.top}`}>
        <IoShareSocialSharp size={28} className={classNames("dark:text-[#F3F3F3]", styles.socialShare)} />
        <ul className={styles.subMenu}>
          <li>
            <FacebookShareButton url={'http://38.54.108.214/'}>
              <FaFacebookF size={28} color="#3b5999" />
            </FacebookShareButton>
            </li>
          <li>
            <TwitterShareButton url={'http://38.54.108.214/'}>
              <FaTwitter size={28} color="#55acee" />
            </TwitterShareButton>
          </li>
          <li>
            <EmailShareButton url={'http://38.54.108.214/'}>
              <FaGooglePlusG size={28} color="#dd4b39" />
            </EmailShareButton>
          </li>
          <li>
            <InstapaperShareButton url={'http://38.54.108.214/'}>
              <FaInstagram size={28} color="#e4405f" />
            </InstapaperShareButton>
          </li>
        </ul>
      </li>
    </ul>
  )
}