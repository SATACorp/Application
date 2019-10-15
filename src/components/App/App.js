import React from "react";
import styles from "./App.module.css";
import { Navbar } from "../../components/Navbar";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}

export default App;
