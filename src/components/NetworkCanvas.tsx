import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-motion";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

const linkDistance = 130;
const pointerDistance = 190;

const readColor = (name: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim();

/** A drifting node graph — a nod to distributed systems — that links up around the pointer. */
export const NetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const context = canvas.getContext("2d")!;
    const pointer = { x: -9999, y: -9999 };
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.round(Math.min(90, (width * height) / 14000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const draw = () => {
      const ink = readColor("--net-ink");
      const accent = readColor("--accent");
      context.clearRect(0, 0, width, height);

      for (const node of nodes) {
        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance > linkDistance) continue;
          context.globalAlpha = (1 - distance / linkDistance) * 0.35;
          context.strokeStyle = ink;
          context.lineWidth = 0.6;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }

        const toPointer = Math.hypot(a.x - pointer.x, a.y - pointer.y);
        if (toPointer < pointerDistance) {
          context.globalAlpha = (1 - toPointer / pointerDistance) * 0.9;
          context.strokeStyle = accent;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(pointer.x, pointer.y);
          context.stroke();
        }

        context.globalAlpha = toPointer < pointerDistance ? 1 : 0.7;
        context.fillStyle = toPointer < pointerDistance ? accent : ink;
        context.beginPath();
        context.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    };

    const tick = () => {
      draw();
      if (running) frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reducedMotion) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      if (reducedMotion) draw();
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      if (reducedMotion) draw();
    };

    const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()));
    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });

    const host = canvas.parentElement!;
    host.addEventListener("pointermove", onPointerMove);
    host.addEventListener("pointerleave", onPointerLeave);
    visibility.observe(canvas);
    resizeObserver.observe(canvas);

    return () => {
      stop();
      visibility.disconnect();
      resizeObserver.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />;
};
