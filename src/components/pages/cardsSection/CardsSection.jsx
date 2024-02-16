import scss from "./Cards.module.scss";
import card_1 from "../../../assets/cardsSection/card_1.svg";
import black from "../../../assets/cardsSection/black_card.svg";
import card_2 from "../../../assets/cardsSection/card_2.svg";
import card_3 from "../../../assets/cardsSection/card_3.svg";
import card_4 from "../../../assets/cardsSection/card_4.svg";
import card_4_2 from "../../../assets/cardsSection/card_4_2.svg";

const CardsSection = () => {
  return (
    <section className={scss.CardsSection}>
      <div className="container">
        <div className={scss.Content}>
          <h1>Наши преимущества</h1>
          <div className={scss.cards}>
            <div className={scss.card_one}>
              <img src={card_1} alt="" />
              <img src={black} alt="" />
              <h4>Всегда выполняем ваши запросы</h4>
              <p>
                Разнообразный и богатый опыт консультация с профессионалами из
                IT играет важную роль в формировании
              </p>
            </div>
            <div className={scss.card_second}>
              <img src={card_2} alt="" />
              <h4>Профессиональный подход:</h4>
              <p>
                Рекламные агентства имеют опыт работы в разных отраслях и знают,
                как эффективно привлекать целевую аудиторию.
              </p>
            </div>
            <div className={scss.card_three}>
              <img src={card_3} alt="" />
              <h4>Креативность</h4>
            </div>
            <div className={scss.card_four}>
              <img src={card_4} alt="" />
              <img src={card_4_2} alt="" />
              <h4>Доступ к новейшим технологиям</h4>
              <p>
                Рекламные агентства обычно имеют доступ к самым передовым
                инструментам и технологиям в области маркетинга и рекламы.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
