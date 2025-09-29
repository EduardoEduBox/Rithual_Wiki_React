import { useEffect, useMemo, useRef, useState } from 'react';
import { useT } from '@/shared/i18n/useT';
import { mapChapters } from '../lib/mapChapters';
import type { Chapter } from '../model/types';
import { DESKTOP_BREAKPOINT } from '../model/constants';

export function useChapters() {
  const t = useT('chapters');
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  const [initialIndex, setInitialIndex] = useState(0);
  const [forceReload, setForceReload] = useState(false);

  const chapters = useMemo<Chapter[]>(() => {
    // Namespaced arrays
    const raw = t('list', { returnObjects: true }) as unknown;
    return mapChapters(raw);
  }, [t]);

  useEffect(() => {
    setSelectedId(undefined);
    setInitialIndex(0);
    const timer = setTimeout(() => setForceReload(true), 100);
    return () => clearTimeout(timer);
  }, [t]);

  const infoRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      if (window.innerWidth > DESKTOP_BREAKPOINT) {
        carouselRef.current?.scrollBy(48, 0);
      }
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  const isDesktop = () => window.innerWidth > DESKTOP_BREAKPOINT;

  return {
    t,
    chapters,
    selectedId,
    setSelectedId,
    initialIndex,
    setInitialIndex,
    forceReload,
    infoRef,
    carouselRef,
    isDesktop,
  };
}
