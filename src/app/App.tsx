import React from "react";
import Navbar from "../layout/NavBar";
import Header from "../features/header/Header";
import CharacterSection from "../features/characters/CharacterSection";
import Footer from "../layout/Footer";
import ChapterSection from "../features/chapters/ChapterSection";
import Loading from "../components/common/Loading";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Loading />

      <Navbar />
      <Header />
      <CharacterSection />
      <ChapterSection />
      <Footer />
      <div className="flex items-end justify-center h-screen pb-16 opacity-20">
        {t("nothingText")}
      </div>
    </>
  );
};

export default App;
