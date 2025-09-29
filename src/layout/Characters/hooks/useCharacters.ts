import { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DESKTOP_BREAKPOINT } from '../model/constants';
import { getCharacters } from '../lib/getCharacters';
import type { Character } from '../model/types';

export function useCharacters() {
  const { t } = useTranslation();

  const isDesktop = typeof window !== 'undefined' && window.innerWidth > DESKTOP_BREAKPOINT;

  const [isCharacterActive, setIsCharacterActive] = useState(false);
  const [waitForAnimation, setWaitForAnimation] = useState(false);
  const [indexOfCharacterClicked, setIndexOfCharacterClicked] = useState(0);

  const characters: Character[] = useMemo(() => getCharacters(t), [t]);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const characterInformationRef = useRef<HTMLDivElement | null>(null);
  const characterInformationRef2 = useRef<HTMLDivElement | null>(null);
  const sideWaysTextRef = useRef<HTMLHeadingElement | null>(null);
  const characterRef = useRef<HTMLImageElement | null>(null);

  const characterInformationDesktopRef = useRef<HTMLDivElement | null>(null);
  const characterDesktopRef = useRef<HTMLImageElement | null>(null);
  const sideWaysTextDesktopRef = useRef<HTMLHeadingElement | null>(null);
  const ageTextDesktopRef = useRef<HTMLHeadingElement | null>(null);
  const informationTextDesktopRef = useRef<HTMLParagraphElement | null>(null);

  return {
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
  };
}
