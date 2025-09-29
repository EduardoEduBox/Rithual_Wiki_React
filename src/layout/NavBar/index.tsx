import React from 'react';
import { FaEye } from 'react-icons/fa';
import { RiEyeCloseLine } from 'react-icons/ri';
import Navigation from './Navigation.tsx';
import Swal from 'sweetalert2';
import LanguageSwitcher from '../../components/common/LanguageSwitcher';
import { useNavbar } from './hooks/useNavbar';

const Navbar: React.FC = () => {
  const { t, isActive, tracker, showNavigation, toggleNav, isMobile, randomProfile } = useNavbar();

  const navClass = 'ml-auto h-[75%] w-auto z-[999] active';

  const readerInProduction = () => {
    return Swal.fire({
      title: `<strong style="color: pink">${t("readerTitle")}</strong>`,
      text: t("readerText"),
  imageUrl: randomProfile(),
      background: "rgb(31, 31, 31)",
      color: "white",
      imageWidth: "60%",
      imageHeight: "auto",
      imageAlt: "san pensativo",
      showCancelButton: true,
      cancelButtonText: "Ok",
      confirmButtonText: `<strong style="color: lightblue"><a href="${t('readerLinkText')}">Tapas.io</a></strong>`,
      confirmButtonColor: "#ff009d",
    });
  };

  return (
    <nav
      className={`fixed top-0 w-full h-16 z-50 bg-customPink opacity-90 flex items-center px-[2vw] transform transition-transform duration-300`}
    >
      <img
        src="/Icons/Logo.png"
        alt="rithual logo"
        className="h-[70%] lg:ml-32 lg:h-[75%] w-auto rounded-lg border-rose-100 border-2"
      />

      <div className="w-[94vw] -z-10 h-full absolute flex items-center justify-center">
        <h1 className="absolute text-3xl font-bold lg:text-4xl">(૨¡Ƭષαℓ</h1>
      </div>

      {showNavigation && (
        <Navigation
          tracker={tracker}
          position={isActive ? "left" : "right"}
          toggleNav={toggleNav}
        />
      )}

      {isMobile && (tracker ? <RiEyeCloseLine className={navClass} onClick={toggleNav} /> : <FaEye className={navClass} onClick={toggleNav} />)}

      {!isMobile && (
        <div className="ml-auto text-2xl">
          <ul className="flex gap-8">
            <li className="relative transition-transform hover:scale-110 group">
              <a href="#home" className="block py-2">
                {t("home")}
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 ease-in-out bg-white rounded-full opacity-70 group-hover:w-full"></div>
            </li>

            <li className="relative transition-transform hover:scale-110 group">
              <a href="#characterSection" className="block py-2">
                {t("characters")}
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 ease-in-out bg-white rounded-full opacity-70 group-hover:w-full"></div>
            </li>

            <li className="relative transition-transform hover:scale-110 group">
              <a href="#chapterSection" className="block py-2">
                {t("chapters")}
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 ease-in-out bg-white rounded-full opacity-70 group-hover:w-full"></div>
            </li>

            <li className="relative transition-transform hover:scale-110 group">
              <a href="#" className="block py-2" onClick={() => readerInProduction()}>
                {t("readNow")}
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 ease-in-out bg-white rounded-full opacity-70 group-hover:w-full"></div>
            </li>
          </ul>
        </div>
      )}

      <div className="hidden ml-8 lg:block">
        <LanguageSwitcher />
      </div>

      <div className="absolute bottom-[-1.48rem] left-0 right-0 h-[1.5rem] bg-gradient-to-b from-[#622c47] to-transparent"></div>
    </nav>
  );
};

export default Navbar;
