import CardsSection from "./cardsSection/CardsSection";
import FormSection from "./formSection/FormSection";
import Welcome from "./homeSections/Welcome";
import MainSection from "./mainSection/MainSection";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <MainSection />
      <CardsSection/>
      <FormSection/>
    </>
  );
};

export default HomePage;
