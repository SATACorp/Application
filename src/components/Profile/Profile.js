import React from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  // Pre-condition: user exists and has a valid id
  // Post-condition: returns user's personal data (id, points, articles read, feed)
  // const getUserData = () => {
  //   call to UserModel in database
  // return userData;
  // }
  return <div className={styles.container}>Profile</div>;
}
