import gsap from 'gsap';

export function animateInfoIn(el: HTMLElement | null) {
  if (!el) return;
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.2,
    ease: 'power3.out',
  });
}

export function animateInfoOut(el: HTMLElement | null, opts?: { y?: number; onComplete?: () => void }) {
  if (!el) return;
  gsap.to(el, {
    opacity: 0,
    y: opts?.y ?? -50,
    duration: 0.2,
    ease: 'power3.out',
    onComplete: opts?.onComplete,
  });
}
