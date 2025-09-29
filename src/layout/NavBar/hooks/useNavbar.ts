import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function useNavbar() {
  const { t } = useTranslation();
  const [isActive, setActive] = useState(false);
  const [tracker, setTracker] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNav = () => {
    if (isActive && tracker) {
      setActive(false);
      setTracker(false);
    } else {
      setTracker(true);
      setActive(true);
    }
  };

  useEffect(() => {
    if (!showNavigation) {
      const id = setTimeout(() => setShowNavigation(true), 500);
      return () => clearTimeout(id);
    }
  }, [isActive, showNavigation]);

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 640 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const profilePictures = useMemo(
    () => [
      '/CharacterSection/profile/Aika Profile.png',
      '/CharacterSection/profile/Madger Profile.png',
      '/CharacterSection/profile/Málanus Profile.png',
      '/CharacterSection/profile/San Profile.png',
      '/CharacterSection/profile/Singer Profile.png',
    ],
    []
  );

  const randomProfile = () => profilePictures[Math.floor(Math.random() * profilePictures.length)];

  return { t, isActive, tracker, showNavigation, toggleNav, isMobile, randomProfile };
}
