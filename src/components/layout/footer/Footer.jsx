import scss from "./Footer.module.scss";
import footer_logo from "../../../assets/footer/footer-logo.svg";
import button_sms from "../../../assets/footer/button_sms.svg";
import footer_line from "../../../assets/footer/footer_line.svg";
import twitter from "../../../assets/footer/tw.svg";
import vk from "../../../assets/footer/vk.svg";
import telegram from "../../../assets/footer/telegram.svg";
import insta from "../../../assets/footer/insta.svg";
import facebook from "../../../assets/footer/facebook.svg";
import twitch from "../../../assets/footer/twitch.svg";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.title_content}>
            <div className={scss.left_content}>
              <img src={footer_logo} alt="" />
              <p>
                С другой стороны рамки и место обучения кадров позволяет оценить
                значение направлений прогрессивного развития!
              </p>
              <ul>
                <li>Блогерам</li>
                <li>Рекламодателям</li>
                <li>Пользовательское соглашение</li>
                <li>Наши кейсы</li>
                <li>Помощь</li>
              </ul>
            </div>
            <div className={scss.right_content}>
              <p>Остались вопросы?</p>
              <button>
                <img src={button_sms} alt="" />
                Почта
              </button>
            </div>
          </div>
          <img src={footer_line} alt="" />
          <div className={scss.info_content}>
            <div className={scss.footer_left}>
              <p>© 2024 Elcho911. All rights reserved.</p>
            </div>
            <div className={scss.footer_right}>
              <img src={twitter} alt="" />
              <img src={vk} alt="" />
              <img src={telegram} alt="" />
              <img src={facebook} alt="" />
              <img src={twitch} alt="" />
              <img src={insta} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
