import scss from "./MainSection.module.scss";
import morgen from "../../../assets/main/morgen.svg";
import fire from "../../../assets/main/newFire.png";
import block from "../../../assets/main/block.svg";
import line from "../../../assets/main/Line.svg";
import mini_morgen from "../../../assets/main/cards/mini_morgen.svg";
import stake from "../../../assets/main/cards/stake.svg";
import free_fire from "../../../assets/main/cards/free_fire.svg";
import vk_music from "../../../assets/main/cards/vk_music.svg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const MainSection = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1300px)": {
        slides: { perView: 4, spacing: 15 },
      },
      "(max-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
      "(max-width: 767px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 390px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  return (
    <section className={scss.MainSection}>
      <div className="container">
        <div className={scss.Content}>
          <h1>Наши кейсы</h1>
          <div className={scss.container}>
            <div className={scss.image_content}>
              <img src={morgen} alt="" />
            </div>
            <div className={scss.info_content}>
              <div className={scss.btns}>
                <button>
                  <img src={fire} alt="" />
                </button>
                <button>Игры</button>
                <button>Коллабарация</button>
              </div>
              <div className={scss.information}>
                <h2>
                  Игровой проект <br /> War Thunder X ДУЛО
                </h2>
                <p>
                  Разнообразный и богатый опыт консультация с профессионалами из
                  IT играет важную роль в формировании всесторонне
                  сбалансированных нововведений. Значимость этих проблем
                  настолько очевидна, что новая модель организационной.
                </p>
              </div>
              <div className={scss.btn}>
                <button>Подробнее</button>
              </div>
            </div>
          </div>
          <div className={scss.info_users}>
            <div className={scss.box}>
              <div className={scss.txt}>
                <p>Общее кол-во просмотров</p>
                <h3>20.000+</h3>
              </div>
              <img src={block} alt="" />
            </div>
            <img src={line} alt="" />
            <div className={scss.box}>
              <div className={scss.txt}>
                <p>Лайков</p>
                <h3>20.000+</h3>
              </div>
              <img src={block} alt="" />
            </div>
            <img src={line} alt="" />
            <div className={scss.box}>
              <div className={scss.txt}>
                <p>охваты</p>
                <h3>20.000+</h3>
              </div>
              <img src={block} alt="" />
            </div>
          </div>
          <div className={scss.cards_container}>
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1">
                <div className={scss.card}>
                  <div className={scss.txt_card}>
                    <h3>Игровой проект War Thunder</h3>
                    <p>Специальный проект с Моргенштерном</p>
                  </div>
                  <img src={mini_morgen} alt="" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide2">
                <div className={scss.card}>
                  <div className={scss.txt_card}>
                    <h3>Казино Stake x Drake </h3>
                    <p>Азарт, Рэп, Реклама</p>
                  </div>
                  <img src={stake} alt="" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide3">
                <div className={scss.card}>
                  <div className={scss.txt_card}>
                    <h3>Игровой проект Free Fire</h3>
                    <p>Уникальная рекламная компания</p>
                  </div>
                  <img src={free_fire} alt="" />
                </div>
              </div>
              <div className="keen-slider__slide number-slide4">
                <div className={scss.card}>
                  <div className={scss.txt_card}>
                    <h3>VK Music</h3>
                    <p>Музыкальный сервис соц. сети ВКонтакте</p>
                  </div>
                  <img src={vk_music} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
