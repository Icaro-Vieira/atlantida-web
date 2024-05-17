import axios from "axios";
import { Link } from "react-router-dom";
import logoAtlantida from "../../assets/illustrations/logo-atlantida.svg";
import styles from "./Home.module.css";

function Home() {
  async function getUser(userId) {
    try {
      console.log(userId);
      await axios(`http://localhost:3000/api/addresses/${userId}`)
      .then(function (response) {
        // handle success
        console.log(response);
      })

      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  }

  return (
    <>
      <nav>
        <img src={logoAtlantida} alt="" />
        <div className={styles.link_box}>
          <a href="#">Home</a>
          <a href="#">Locais de mergulho</a>
          <a href="#">Contato</a>
        </div>
        <Link to="/login" className={styles.btn_login}>
          LOGIN
        </Link>
      </nav>

      <div className="teste">
        
        <button onClick={() => getUser("66317d29a0a6e29c140f5169")}>CLICA NE MIM</button>
      </div>
    </>
  );
}

export default Home;
