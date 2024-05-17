import SliderImages from "../../components/SliderImages";
import logo from "../../assets/illustrations/logo-atlantida.svg";
import styles from "./ForgotPassword.module.css";
import { Link } from "react-router-dom";

import { IconArrowLeft } from "@tabler/icons-react";

function ForgotPassword() {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <SliderImages />
      </div>

      <div className={styles.login}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo atlântida" />
        </div>

        <h1 className={styles.title}>Redefinição de senha</h1>

        <p className={styles.description}>
          Identifique-se para receber um e-mail com as instruções e o link para
          criar uma nova senha.
        </p>

        <label htmlFor="email">Email</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          placeholder="exemplo@seuemail.com"
        />

        <button className={styles.btn_send_link}>ENVIAR LINK</button>

        <Link to="/login" className={styles.btn_back_login}>
          <IconArrowLeft size={20} /> VOLTAR AO LOGIN
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
