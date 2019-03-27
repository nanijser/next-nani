import React from "react";
import Link from "next/link";
import styles from "./index.less";

export default () => (
  <>
    <p className={styles.red}>AboutAboutAbout</p>
    <Link href="/contact">
      <div className={styles.btn}>跳转</div>
    </Link>
  </>
);
