import React from "react";

// Import core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';

// Import images
import imgTurtle from "../../assets/images/turtle.png";
import imgDiverMan from "../../assets/images/diver-man.png";
import imgDiverWoman from "../../assets/images/diver-woman.png";

// Import CSS
import styles from "./SliderImages.module.css"
import "./SliderImages.global.css";

const SlideImages = () => {
  return (
    <Swiper
      className={styles.slides}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay, EffectFade]}
      effect="fade"
      pagination={{
        clickable: false,
        type: "bullets",
      }}
      navigation={false}
      spaceBetween={0}

    >
      <SwiperSlide>
        <div className={styles.img_txt}>
          <img
            src={imgTurtle}
            alt="Imagem de uma tartaruga marinha, Autor: Jesse Schoff, retirado de Unsplash"
          />
          <p>
            Memórias visualmente incríveis! <br /> Adicione fotos nos registros
            de mergulho.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.img_txt}>
          <img
            src={imgDiverWoman}
            alt="Imagem de uma mulher mergulhando e tirando foto com uma câmera aquatica, Autor: NEOM, retirado de Unsplash"
          />
          <p>
            Explore águas extraordinárias com confiança e <br />reviva cada momento subaquático.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.img_txt}>
          <img
            src={imgDiverMan}
            alt="Imagem de um homem mergulhando, Autor: Maël BALLAND, retirado de Unsplash"
          />
          <p>
            Guia subaquático pessoal! <br /> Descubra, registre, compartilhe e acompanhe <br /> sua evolução!
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideImages;
