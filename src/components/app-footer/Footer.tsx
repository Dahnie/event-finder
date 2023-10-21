import styles from "./Footer.module.css";
function Footer() {
  return (
    <div id="contact" className={styles.footer_container}>
      <div className={styles.footer_container__inner}>
        {/*  Left Section  */}
        <div className={styles.footer_left_container}>
          {/* Company Logo section */}
          <div className={styles.company_name_wrapper}>eventFindr</div>
        </div>

        {/*  Right Section  */}
        <div className={styles.footer_right_container}>
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}

export default Footer;
