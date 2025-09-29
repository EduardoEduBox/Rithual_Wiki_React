import React from "react";
import Navbar from "./layout/NavBar";
import Header from "@/layout/Header/Header"
import CharactersSection from "./layout/Characters/ui/CharactersSection";
import Footer from "./layout/Footer";
import ChaptersSection from "./layout/Chapters/ui/ChaptersSection";
import "@/layout/Chapters/i18n";
import Loading from "./Loading";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Loading />

      <Navbar />
      <Header />
      <CharactersSection />
      <ChaptersSection /> 
      <Footer />
      <div className="flex items-end justify-center h-screen pb-16 opacity-20">
        {t("nothingText")}
      </div>
    </>
  );
};

export default App;
