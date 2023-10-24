import styles from "./social.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

export default function SocialMediaButton() {
  return (
    <ul>
      <li className={`${styles.share} ${styles.top}`}>
        <IoShareSocialSharp size={28} className={styles.socialShare} />
        <ul className={styles.subMenu}>
          <li><FaFacebookF size={28} color="#3b5999" /></li>
          <li><FaTwitter size={28} color="#55acee" /></li>
          <li><FaGooglePlusG size={28} color="#dd4b39" /></li>
          <li><FaInstagram size={28} color="#e4405f" /></li>
        </ul>
      </li>
    </ul>
  )
}