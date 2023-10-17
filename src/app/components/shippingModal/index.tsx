import React from "react";
import styles from "./page.module.scss"

type Props = {
  onClose: Function, 
  children: any, 
  title: string
}

const ShippingModal = ({ onClose, children, title }: Props) => {
    const handleCloseClick = (e: any) => {
        e.preventDefault();
        onClose();
    };

    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalWrapper}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <a href="#" className="border rounded-full border-[#363636] px-3 absolute top-[30px] right-[30px]" onClick={handleCloseClick}> X </a>
            </div>
            {title && <h1 className="text-center text-[64px] font-semibold">{title}</h1>}
            <div className={styles.modalBody}>{children}</div>
          </div>
        </div>
      </div>
    )
};

export default ShippingModal