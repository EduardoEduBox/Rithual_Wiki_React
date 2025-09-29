import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { bgImages as defaultBgImages, parasite as parasiteDefaults } from '../lib/backgrounds';

export function useHeader() {
  const { t } = useTranslation();

  const bgImages = useMemo(() => defaultBgImages, []);
  const parasite = useMemo(() => parasiteDefaults, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isParasiteActive, setIsParasiteActive] = useState(false);
  const [checker, setChecker] = useState(false);
  const [hahaText, setHahaText] = useState('HAHAHA');

  // Preload images once
  useEffect(() => {
    bgImages.forEach((img) => {
      const image = new Image();
      image.src = img.bgImage;
    });
    const parasiteImage = new Image();
    parasiteImage.src = parasite.bgImage;
  }, [bgImages, parasite]);

  // Cycle backgrounds and arm the parasite checker
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 9700);

    const timer = setTimeout(() => setChecker(true), 30000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timer);
    };
  }, [bgImages.length]);

  // Randomly flash parasite background
  useEffect(() => {
    if (checker) {
      const shouldActivateParasite = Math.random() < 0.1;
      if (shouldActivateParasite) {
        setIsParasiteActive(true);
        const timer = setTimeout(() => setIsParasiteActive(false), 250);
        return () => clearTimeout(timer);
      }
    }
  }, [currentImageIndex, checker]);

  // Animate parasite text growth
  useEffect(() => {
    if (isParasiteActive) {
      let currentText = 'HAHAHA';
      const intervalTime = window.innerWidth > 1024 ? 10 : 50;
      const id = setInterval(() => {
        currentText += 'HA';
        setHahaText(currentText);
      }, intervalTime);

      const stop = setTimeout(() => clearInterval(id), 250);
      return () => {
        clearInterval(id);
        clearTimeout(stop);
      };
    }
  }, [isParasiteActive]);

  return {
    t,
    bgImages,
    parasite,
    currentImageIndex,
    isParasiteActive,
    hahaText,
  };
}
