import React from 'react'
import styles from "./Loader.module.css";

const Loader = () => {
  return (
  <section className='h-screen w-full grid place-items-center'>
    <div className={styles.loader}></div>
  </section>
  );
}

export default Loader;