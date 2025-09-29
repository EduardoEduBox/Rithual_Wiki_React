import { gsap } from 'gsap';

export function fadeOut(el: HTMLElement | null, onComplete?: () => void) {
  if (!el) return;
  gsap.to(el, { opacity: 0, duration: 0.5, onComplete });
}

export function fadeIn(el: HTMLElement | null, duration = 0.5) {
  if (!el) return;
  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration });
}

export function slideX(el: HTMLElement | null, fromX: number, toX = 0, duration = 0.5) {
  if (!el) return;
  gsap.fromTo(el, { x: fromX }, { x: toX, duration });
}

export function scaleIn(el: HTMLElement | null, fromScale = 0.8, fromX = 0, toX = 0, duration = 0.5) {
  if (!el) return;
  gsap.fromTo(el, { scale: fromScale, x: fromX }, { scale: 1, x: toX, duration });
}
