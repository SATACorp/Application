import React from "react";
import styles from "./Login.module.css";

export default function Login() {
  // Pre-condition: valid username and password is entered (user exists)
  // Post-condition: retrieves user information, valid API usage
  // loginUser(id, username, password) {
  //   if (id) {
  //     call to UserModel in database
  //     userState = true;
  //   }
  // }

  return <div className={styles.container}>Login</div>;
}
