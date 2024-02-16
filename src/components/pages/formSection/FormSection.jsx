import scss from "./FormSection.module.scss";
import sms_right from "../../../assets/Group30.svg";
import sms_left from "../../../assets/Group31.svg";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import bg_one from "../../../assets/Vector1.svg";
import bg_second from "../../../assets/Vector3.svg";

const link_first =
  "https://api.elchocrud.pro/api/v1/004972d1fc3a2ec2be176f8be31d0e95/bloger";
const link_second =
  "https://api.elchocrud.pro/api/v1/94df3b7480788dbb9793403a6979e51a/advertiser";

const FormSection = () => {
  const [blogerData, setBlogerData] = useState([]);
  const [isComplated, setIsComplated] = useState(null);
  console.log(isComplated);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  console.log(blogerData);
  const postAdded = async () => {
    const newDataBlogers = {
      name: name,
      email: email,
      number: number,
      description: description,
    };
    if (name === "" || email === "" || number === "") {
      toast.error("🦄 заполните пустые поли", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        pauseOnHover: true,
        rtl: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      try {
        const link = isComplated ? link_first : link_second;
        const response = (await axios.post(link, newDataBlogers)).data;
        console.log(response);
        setBlogerData(response);
        toast(
          isComplated
            ? " 🦄 Успешно отправлено Блогеру"
            : " 🦄 Успешно отправлено Рекламодателью",
          {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: true,
            pauseOnHover: true,
            rtl: false,
            draggable: true,
            progress: undefined,
            transition: Bounce,
          }
        );
      } catch (e) {
        console.error(e);
      }
    }
    setName("");
    setEmail("");
    setNumber("");
    setDescription("");
  };

  return (
    <section className={scss.FormSection}>
      <img className={scss.bg_firs} src={bg_one} alt="" />
      <img className={scss.bg_second} src={bg_second} alt="" />
      <img className={scss.imgleft_sms} src={sms_right} alt="" />
      <img className={scss.imgrigth_sms} src={sms_left} alt="" />
      <div className="container">
        <div className={scss.Content}>
          <div className={scss.title}>
            <h1>Оставить заявку</h1>
            <p>
              Рекламные агентства имеют опыт работы в разных отраслях и знают,
              как эффективно привлекать целевую аудиторию.
            </p>
          </div>
          <div className={scss.form_container}>
            <div className={scss.box_btn}>
              <p>Кто по жизни?</p>
              <button
                className={
                  isComplated ? `${scss.bloget_btn}` : `${scss.button}`
                }
                onClick={() => setIsComplated(true)}
              >
                Блогер
              </button>
              <button
                className={
                  isComplated ? `${scss.button}` : `${scss.bloget_btn}`
                }
                onClick={() => setIsComplated(false)}
              >
                Рекламодатель
              </button>
            </div>
            <div className={scss.forms}>
              <label>Ваше имя</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Введите ваше имя"
              />
              <label>Почта</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Введите электронную почту"
              />
              <label>Телефон</label>
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="number"
                placeholder="Введите ваш номер телефона"
              />
              <label>Комментарий</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={scss.textarea}
                placeholder="Введите ваш номер телефона"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className={scss.add_btn}>
              <button onClick={postAdded}>Отправить</button>
              <ToastContainer />
              <p>
                Нажав на кнопку, вы соглашаетесь на обработку персональных
                данных
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
