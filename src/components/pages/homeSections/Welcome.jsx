import scss from "./Welcome.module.scss";
import photo_section from "../../../assets/welcome/photo.svg";
import hyper from "../../../assets/sliders/hyper.svg";
import steels from "../../../assets/sliders/steeles.svg";
import tlauncher from "../../../assets/sliders/tlauncher.svg";
import broad from "../../../assets/sliders/broad.svg";
import acer from "../../../assets/sliders/acer.svg";
import logitech from "../../../assets/sliders/logitec.svg";
import poker from "../../../assets/sliders/poker.svg";
import bg_img from "../../../assets/welcome/Rectangle.svg";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 5000, easing: (t) => t };
const Welcome = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 7,
      spacing: 15,
    },
    created(s) {
      s.moveToIdx(2, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
  });

  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.Content}>
          <p>Рекламное агенство ADVUP</p>
          <div className={scss.welome_sub}>
            <div className={scss.subjeckt}>
              <h1>Новый поток клиентов Вашему продукту</h1>
            </div>
            <div className={scss.bg_content}>
              <img src={bg_img} alt="" />
              <button>Приступим</button>
            </div>
          </div>
          <div className={scss.images}>
            <img src={photo_section} alt="" />
          </div>
        </div>
      </div>

      <div className={scss.ratate_contant}>
        <div className={scss.translate}>
          <div className={scss.slider_content}>
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide number-slide1">
                <img src={hyper} alt="" />
              </div>
              <div className="keen-slider__slide number-slide2">
                <img src={steels} alt="" />
              </div>
              <div className="keen-slider__slide number-slide3">
                <img src={tlauncher} alt="" />
              </div>
              <div className="keen-slider__slide number-slide4">
                <img src={broad} alt="" />
              </div>
              <div className="keen-slider__slide number-slide5">
                <img src={acer} alt="" />
              </div>
              <div className="keen-slider__slide number-slide6">
                <img src={acer} alt="" />
              </div>
              <div className="keen-slider__slide number-slide6">
                <img src={logitech} alt="" />
              </div>
              <div className="keen-slider__slide number-slide6">
                <img src={poker} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
