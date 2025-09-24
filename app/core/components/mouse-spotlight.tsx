import { useEffect, useRef } from "react";

export default function MouseSpotlight() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          const el = overlayRef.current;
          if (!el) return;
          const { x, y } = posRef.current;
          const isDark = document.documentElement.classList.contains("dark");
          const color = isDark
            ? "rgba(139, 92, 246, 0.28)" // dark: violet-500 with alpha
            : "rgba(167, 139, 250, 0.22)"; // light: violet-400 with alpha
          el.style.background = `radial-gradient(240px circle at ${x}px ${y}px, ${color}, transparent 60%)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 transition-[background] duration-150 ease-out"
    />
  );
}
