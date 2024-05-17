import styles from "./Error404.module.css"
import { Link } from "react-router-dom"

// Import Images
import illustration from "../../assets/illustrations/illustration-errorpage.svg"
import leftCoral from "../../assets/illustrations/left-corals.svg"
import rightCoralsi from "../../assets/illustrations/right-corals.svg"

export function Error404() {
  return (
    <>
      <div className={styles.container_error}>
        <div className={styles.img_container}>
          <img src={illustration} className={styles.img_illustration} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.h1_error}>OOPS! PÁGINA NÃO <br /> ENCONTRADA<span className={styles.dot}>.</span></h1>

          <p className={styles.p_error}>Parece que você mergulhou em <br /> águas desconhecidas. <br />Vamos tentar novamente?</p>
          <Link className={styles.btn_back_to_login} to="/login">VOLTAR AO LOGIN</Link>
        </div>
      </div>
      <div className={styles.corals}>
        <img className={styles.left_corals} src={leftCoral} />
        <img className={styles.right_corals} src={rightCoralsi} />
      </div>
    </>
  )
}

export default Error404
