import Flickity from 'react-flickity-component';
import { MdClose } from 'react-icons/md';
import { useCharacters } from '../hooks/useCharacters';
import { CharactersList } from './CharactersList';
import { fadeIn, fadeOut, scaleIn, slideX } from '../animations/characters.gsap';

export default function CharactersSection() {
  const {
    t,
    isDesktop,
    isCharacterActive,
    setIsCharacterActive,
    waitForAnimation,
    setWaitForAnimation,
    indexOfCharacterClicked,
    setIndexOfCharacterClicked,
    characters,
    carouselRef,
    characterInformationRef,
    characterInformationRef2,
    sideWaysTextRef,
    characterRef,
    characterInformationDesktopRef,
    characterDesktopRef,
    sideWaysTextDesktopRef,
    ageTextDesktopRef,
    informationTextDesktopRef,
  } = useCharacters();

  const flickityOptions = isDesktop
    ? { groupCells: 4, draggable: false }
    : { pageDots: true, initialIndex: indexOfCharacterClicked, wrapAround: true, prevNextButtons: false };

  const handleCharacterClick = (index: number) => {
    if (waitForAnimation) return;
    setWaitForAnimation(true);
    setIndexOfCharacterClicked(index);

    if (isDesktop) {
      fadeOut(carouselRef.current, () => {
        setIsCharacterActive(true);
        fadeIn(characterInformationDesktopRef.current, 0.5);
        slideX(sideWaysTextDesktopRef.current, -200, 0, 0.5);
        scaleIn(characterDesktopRef.current, 0.6, 200, 0, 0.5);
        // age/info appear from top
        if (ageTextDesktopRef.current) ageTextDesktopRef.current.style.opacity = '0';
        if (informationTextDesktopRef.current) informationTextDesktopRef.current.style.opacity = '0';
        setTimeout(() => {
          if (ageTextDesktopRef.current) {
            ageTextDesktopRef.current.style.opacity = '1';
            ageTextDesktopRef.current.style.transform = 'translateY(0)';
          }
          if (informationTextDesktopRef.current) {
            informationTextDesktopRef.current.style.opacity = '1';
            informationTextDesktopRef.current.style.transform = 'translateY(0)';
          }
        }, 100);
      });
    } else {
      fadeOut(carouselRef.current, () => {
        setIsCharacterActive(true);
        fadeIn(characterInformationRef.current, 0.5);
        fadeIn(characterInformationRef2.current, 0.8);
        slideX(sideWaysTextRef.current, -100, 0, 0.5);
        scaleIn(characterRef.current, 0.8, 100, 0, 0.5);
      });
    }
  };

  const handleCloseButtonClick = () => {
    if (!waitForAnimation) return;
    setWaitForAnimation(false);
    fadeOut(characterInformationRef.current);
    fadeOut(characterInformationRef2.current);
    fadeOut(characterInformationDesktopRef.current, () => {
      setIsCharacterActive(false);
      // show carousel back
      const el = carouselRef.current;
      if (el) el.style.opacity = '1';
    });
  };

  const calculateNumberOfCharactersToFixCarousel = () => {
    const numberOfCharacters = characters.length;
    const mod = numberOfCharacters % 4;
    return mod === 0 ? 0 : 4 - mod;
  };

  return (
    <>
      {/* background bar for desktop */}
      <div
        className={`transition-all top-[150svh] border duration-500 absolute w-screen h-[52vh] after:h-[52vh]  bg-white opacity-15 bottom-[10%]
        -z-10 after:content-[''] after:transition-all after:duration-500 after:absolute  after:w-full after:bg-[#1c1c1c]  ${!isDesktop ? 'hidden' : ''}
        ${
          isCharacterActive
            ? 'skew-y-[-3deg] h-[62vh] after:skew-y[7deg] after:bottom-[-50%] top-[152svh]'
            : 'after:skew-y-[-9deg] skew-y-6 after:bottom-[-60%]'
        }
        `}
      />

      <section className="relative" id="characterSection">
        <div className="relative flex items-center justify-center w-full mt-2 h-36 lg:h-52 lg:mb-5 lg:items-end">
          <h1 className="text-3xl font-bold text-pink-200 lg:text-8xl">{t('characters')}</h1>
          <strong className="absolute text-6xl lg:text-[9vw] text-customBlack -z-10 opacity-15 transform -translate-x-1/2 -translate-y-1/2 top-1/2 lg:bottom-14 left-1/2 text-shadow-pinkGlow lg:text-shadow-pinkGlowDekstop">
            {t('characters')}
          </strong>
        </div>

        {/* mobile info containers */}
        <div className={`relative flex flex-col items-center justify-center w-full lg:hidden ${!isCharacterActive ? 'hidden' : ''}`} ref={characterInformationRef}>
          <h1 className="absolute font-bold left-3 vertical-rl text-7xl -z-10" ref={sideWaysTextRef} style={{ color: characters[indexOfCharacterClicked].colorTheme }}>
            {characters[indexOfCharacterClicked].name}
          </h1>
          <img src={characters[indexOfCharacterClicked].withoutText} alt={characters[indexOfCharacterClicked].name} ref={characterRef} />
          <div className="absolute flex flex-col justify-center right-5 top-5">
            <MdClose className="text-black scale-y-50 text-7xl" onClick={handleCloseButtonClick} />
            <strong>
              {t('ageOfCharacter')}: {characters[indexOfCharacterClicked].appeared ? (
                <span style={{ color: characters[indexOfCharacterClicked].colorTheme }}>{characters[indexOfCharacterClicked].age}</span>
              ) : (
                <span className="opacity-50">?</span>
              )}
            </strong>
          </div>
        </div>

        <div className={`flex w-full lg:hidden mt-5 ${!isCharacterActive ? 'hidden' : 'opacity-0'}`} ref={characterInformationRef2}>
          <div className="flex items-center flex-shrink-0 w-1/3">
            <img className="object-cover w-full h-auto rounded-full aspect-square" src={characters[indexOfCharacterClicked].profile} alt={`${characters[indexOfCharacterClicked].name} profile picture`} />
          </div>
          <div className="flex items-center justify-center w-2/3 pl-2 pr-5">
            <p className={`text-sm text-center ${!characters[indexOfCharacterClicked].appeared ? 'opacity-50' : ''}`}>
              {characters[indexOfCharacterClicked].information}
            </p>
          </div>
        </div>

        {/* desktop info container */}
        <div className={`h-screen w-full flex-col relative items-center justify-center ${!isCharacterActive ? 'hidden' : 'flex'} ${!isDesktop ? 'hidden' : ''}`} ref={characterInformationDesktopRef}>
          <img src={characters[indexOfCharacterClicked].profile} alt={`${characters[indexOfCharacterClicked].name} profile picture`} className="absolute left-12 top-0 h-[35vh] rounded-full" />
          <MdClose onClick={handleCloseButtonClick} className="absolute text-black scale-y-50 top-20 right-28 text-9xl" />
          <img ref={characterDesktopRef} className="h-[90%]" src={characters[indexOfCharacterClicked].withoutText} alt={`${characters[indexOfCharacterClicked].name} background picture`} />
          <div className="flex flex-col bottom-[40%] min-w-[67rem] absolute -z-10">
            <h1 ref={sideWaysTextDesktopRef} className="font-bold flex justify-center text-[9vw] whitespace-nowrap" style={{ color: characters[indexOfCharacterClicked].colorTheme }}>
              {characters[indexOfCharacterClicked].name}
            </h1>
            <div className="flex w-full">
              <h1 ref={ageTextDesktopRef} className="relative text-2xl font-bold -top-8">
                {t('ageOfCharacter')}: {characters[indexOfCharacterClicked].appeared ? (
                  <span style={{ color: characters[indexOfCharacterClicked].colorTheme }}>{characters[indexOfCharacterClicked].age}</span>
                ) : (
                  <span className="opacity-50">?</span>
                )}
              </h1>
              <div className="relative ml-auto w-96">
                <p ref={informationTextDesktopRef} className="absolute text-xl font-semibold text-center -top-8">
                  {characters[indexOfCharacterClicked].appeared ? characters[indexOfCharacterClicked].information : <span className="opacity-50">{t('noRegister')}</span>}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref={carouselRef as any} className={`${isCharacterActive ? 'hidden' : ''} overflow-hidden lg:pl-8 lg:pr-16`}>
          <Flickity className={'carousel outline-none'} elementType={'div'} options={flickityOptions as any} disableImagesLoaded={false} reloadOnUpdate static>
            <CharactersList
              characters={characters}
              onItemClick={(index) => {
                // preload images of each item before showing
                const { profile, withoutText } = characters[index];
                const preload = [profile, withoutText];
                preload.forEach((src) => {
                  const img = new Image();
                  img.src = src;
                });
                handleCharacterClick(index);
              }}
            />

            {/* invisible divs to fix the carousel layout */}
            {isDesktop &&
              Array.from({ length: calculateNumberOfCharactersToFixCarousel() }).map((_, i) => (
                <div key={`ghost-${i}`} className="w-screen lg:w-1/4 lg:h-[85vh] flex items-end">
                  <div className="w-full h-full"></div>
                </div>
              ))}
          </Flickity>
        </div>
      </section>
    </>
  );
}
