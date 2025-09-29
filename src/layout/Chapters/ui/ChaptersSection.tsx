import Flickity from 'react-flickity-component';
import { useRef } from 'react';
import { useChapters } from '../hooks/useChapters';
import { animateInfoIn, animateInfoOut } from '../animations/chapters.gsap';
import { ChaptersList } from './ChaptersList';

export default function ChaptersSection() {
  const {
    t,
    chapters,
    selectedId,
    setSelectedId,
    initialIndex,
    forceReload,
    infoRef,
    carouselRef,
    isDesktop,
  } = useChapters();

  const titleRef = useRef<HTMLHeadingElement>(null);
  const backgroundTitleRef = useRef<HTMLHeadingElement>(null);

  const flickityOptions = {
    dragThreshold: 5,
    friction: 0.15,
    selectedAttraction: 0.01,
    initialIndex: initialIndex,
    pageDots: true,
    wrapAround: false,
    prevNextButtons: false,
  } as const;

  const onImageClick = (id: number) => {
    if (selectedId === undefined) {
      animateInfoOut(infoRef.current, {
        y: -50,
        onComplete: () => setSelectedId(id),
      });
      animateInfoIn(infoRef.current);
    } else if (selectedId !== id) {
      animateInfoOut(infoRef.current, {
        onComplete: () => setSelectedId(id),
      });
      animateInfoIn(infoRef.current);
    }
  };

  return (
    <section className="flex flex-col items-center w-full" id="chapterSection">
      {isDesktop() ? (
        <>
          <div className="relative w-full py-10 mt-28 pl-28">
            {typeof selectedId === 'undefined' ? (
              <>
                <h1 ref={titleRef} className="w-full font-bold text-pink-200 text-8xl">
                  {t('title')}
                </h1>
                <strong
                  ref={backgroundTitleRef}
                  className="text-customBlack opacity-15 text-shadow-pinkGlowDekstop text-[9vw] absolute -top-7 left-12 -z-10"
                >
                  {t('title')}
                </strong>
              </>
            ) : (
              <>
                <h1 className="w-full font-bold text-pink-200 text-8xl">
                  {chapters[selectedId]?.title}
                </h1>
                <strong className="text-customBlack opacity-15 text-shadow-pinkGlowDekstop text-[9vw] absolute -top-7 left-12 -z-10">
                  {chapters[selectedId]?.shortTitle}
                </strong>
              </>
            )}
          </div>

          <div ref={carouselRef as any}>
            <ChaptersList chapters={chapters} />
          </div>
        </>
      ) : (
        <>
          <div className="relative flex justify-center w-full mt-32">
            {typeof selectedId === 'undefined' ? (
              <>
                <h1 className="text-3xl font-bold text-pink-200">{t('title')}</h1>
                <strong className="absolute text-6xl -bottom-3 text-shadow-pinkGlow text-customBlack opacity-15 -z-10">
                  {t('title')}
                </strong>
              </>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-pink-200">{chapters[selectedId]?.title}</h1>
                <strong className="absolute text-6xl -bottom-3 text-shadow-pinkGlow text-customBlack opacity-15 -z-10">
                  {chapters[selectedId]?.shortTitle}
                </strong>
              </>
            )}
          </div>

          <div className="w-screen mt-10" key={forceReload ? 'reload' : 'no-reload'}>
            <Flickity
              key={forceReload ? 'reload' : 'no-reload'}
              className={'flex flex-col gap-5 outline-none'}
              elementType={'div'}
              options={flickityOptions}
              disableImagesLoaded={false}
              reloadOnUpdate
              static
            >
              {chapters.map((chapter) => (
                <div className={`h-[50vh] w-fit`} key={chapter.id} onClick={() => onImageClick(chapter.id)}>
                  <img
                    className={`relative h-full ml-3 mr-3 transition duration-100 rounded-md ${selectedId === chapter.id ? '-translate-y-5' : ''}`}
                    src={chapter.cover}
                    alt={`Capa do capítulo ${chapter.title}`}
                  />
                </div>
              ))}
            </Flickity>
          </div>

          <div className={`flex flex-col items-center w-full mt-5 min-h-52 ${selectedId == undefined ? 'hidden' : ''}`} ref={infoRef}>
            <div className="w-full ">
              <h1 onClick={() => animateInfoOut(infoRef.current, { onComplete: () => setSelectedId(undefined) })} className="relative text-2xl font-bold left-[90%] text-white/50">
                X
              </h1>
            </div>
            <div className="flex w-full h-full pt-3 pb-3 pl-3">
              <div className="flex items-center justify-center w-1/3 h-full ">
                <img
                  className="rounded h-5/6"
                  src={selectedId !== undefined ? chapters[selectedId]?.aditionalCover : ''}
                  alt={`Imagem do capítulo ${selectedId !== undefined ? chapters[selectedId]?.title : ''}`}
                />
              </div>
              <div className="flex flex-col items-center justify-center w-2/3 h-full px-3 min-h-44">
                <h1 className="relative mb-3 text-xl font-bold text-pink-200 border-b">{selectedId !== undefined ? chapters[selectedId]?.title : ''}</h1>
                <p className="text-sm text-center">{selectedId !== undefined ? chapters[selectedId]?.description : ''}</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-12 mb-2">
              <a href={selectedId !== undefined ? chapters[selectedId]?.url : '#'}>
                <button
                  className="px-4 py-2 text-white bg-pink-600 rounded shadow-2xl text-shadow-md"
                  style={{ boxShadow: 'inset 0 0 0 0 #ff009d' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'inset 400px 0 0 0 #ff009d';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'inset 0 0 0 0 #ff009d';
                  }}
                >
                  {t('readNow', { ns: undefined })}
                </button>
              </a>
            </div>

            <hr className="w-5/6 bg-gray-700" />
          </div>
        </>
      )}
    </section>
  );
}
