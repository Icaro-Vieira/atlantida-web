import SliderImages from "../../components/SliderImages";
import logo from "../../assets/illustrations/logo-atlantida.svg"
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <SliderImages />
      </div>

      <div className={styles.login}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo atlântida" />
        </div>

        <h1 className={styles.title}>Faça seu login</h1>

        <label htmlFor="email">Email</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          placeholder="exemplo@seuemail.com"
        />

        <label htmlFor="password" className={styles.label_password}>
          Senha <Link to="/forgotpassword"> esqueceu a senha? </Link>
        </label>
        <input
          className={styles.input}
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
        />

        <button className={styles.btn_login}>LOGIN</button>

        <p className={styles.paragraph}>
          Não tem uma conta? <Link to="/register">Criar conta</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
