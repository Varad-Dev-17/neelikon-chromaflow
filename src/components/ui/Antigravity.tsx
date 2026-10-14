'use client';

/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef, useEffect, useState, type CSSProperties } from 'react';
import * as THREE from 'three';

/**
 * 10 high-purity spectrum colors for Neelikon's world of colour:
 * black, red, blue, green, orange, purple, yellow, violet, maroon, pink
 */
export const ANTIGRAVITY_COLORS = [
  '#111111', // black
  '#dc2626', // red
  '#2563eb', // blue
  '#16a34a', // green
  '#ea580c', // orange
  '#9333ea', // purple
  '#eab308', // yellow
  '#7c3aed', // violet
  '#800000', // maroon
  '#ec4899', // pink
];

export interface AntigravityProps {
  count?: number;
  magnetRadius?: number;
  ringRadius?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  particleSize?: number;
  lerpSpeed?: number;
  color?: string;
  colors?: string[];
  autoAnimate?: boolean;
  particleVariance?: number;
  rotationSpeed?: number;
  depthFactor?: number;
  pulseSpeed?: number;
  particleShape?: 'capsule' | 'sphere' | 'box' | 'tetrahedron';
  fieldStrength?: number;
  minScale?: number;
  fullPage?: boolean;
  className?: string;
  style?: CSSProperties;
}

interface ParticleData {
  t: number;
  factor: number;
  speed: number;
  xFactor: number;
  yFactor: number;
  zFactor: number;
  mx: number;
  my: number;
  mz: number;
  cx: number;
  cy: number;
  cz: number;
  vx: number;
  vy: number;
  vz: number;
  randomRadiusOffset: number;
}

const AntigravityInner = ({
  count = 300,
  magnetRadius = 11,
  ringRadius = 7.5,
  waveSpeed = 0.9,
  waveAmplitude = 1,
  particleSize = 0.85,
  lerpSpeed = 0.07,
  color,
  colors = ANTIGRAVITY_COLORS,
  autoAnimate = true,
  particleVariance = 1,
  rotationSpeed = 0,
  depthFactor = 1,
  pulseSpeed = 3,
  particleShape = 'sphere',
  fieldStrength = 10,
  minScale = 0.18,
}: AntigravityProps) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastMouseMoveTime = useRef(0);
  const virtualMouse = useRef({ x: 0, y: 0 });
  const windowMouse = useRef({ x: 0, y: 0, active: false });

  // Listen to window pointer movements so cursor is captured across all full-page elements
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      windowMouse.current = { x, y, active: true };
    };

    const handlePointerLeave = () => {
      windowMouse.current.active = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  const activePalette = useMemo(() => {
    if (colors && colors.length > 0) return colors;
    if (color) return [color];
    return ANTIGRAVITY_COLORS;
  }, [colors, color]);

  const particles = useMemo<ParticleData[]>(() => {
    const temp: ParticleData[] = [];
    const width = (viewport.width || 100) * 1.25;
    const height = (viewport.height || 100) * 1.25;

    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;

      const x = (Math.random() - 0.5) * width;
      const y = (Math.random() - 0.5) * height;
      const z = (Math.random() - 0.5) * 20;

      const randomRadiusOffset = (Math.random() - 0.5) * 2;

      temp.push({
        t,
        factor,
        speed,
        xFactor,
        yFactor,
        zFactor,
        mx: x,
        my: y,
        mz: z,
        cx: x,
        cy: y,
        cz: z,
        vx: 0,
        vy: 0,
        vz: 0,
        randomRadiusOffset,
      });
    }
    return temp;
  }, [count, viewport.width, viewport.height]);

  // Apply multi-color palette to instanced mesh particles
  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const tempColor = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const c = activePalette[i % activePalette.length] ?? '#111111';
      tempColor.set(c);
      mesh.setColorAt(i, tempColor);
    }
    if (mesh.instanceColor) {
      mesh.instanceColor.needsUpdate = true;
    }
    if (mesh.material) {
      (mesh.material as THREE.Material).needsUpdate = true;
    }
  }, [activePalette, count]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const { viewport: v, pointer } = state;
    const m = windowMouse.current.active ? windowMouse.current : pointer;

    const mouseDist = Math.sqrt(
      Math.pow(m.x - lastMousePos.current.x, 2) + Math.pow(m.y - lastMousePos.current.y, 2)
    );

    if (mouseDist > 0.001) {
      lastMouseMoveTime.current = Date.now();
      lastMousePos.current = { x: m.x, y: m.y };
    }

    let destX = (m.x * v.width) / 2;
    let destY = (m.y * v.height) / 2;

    if (autoAnimate && Date.now() - lastMouseMoveTime.current > 2000) {
      const time = state.clock.getElapsedTime();
      destX = Math.sin(time * 0.5) * (v.width / 4);
      destY = Math.cos(time * 0.5 * 2) * (v.height / 4);
    }

    const smoothFactor = 0.05;
    virtualMouse.current.x += (destX - virtualMouse.current.x) * smoothFactor;
    virtualMouse.current.y += (destY - virtualMouse.current.y) * smoothFactor;

    const targetX = virtualMouse.current.x;
    const targetY = virtualMouse.current.y;

    const globalRotation = state.clock.getElapsedTime() * rotationSpeed;

    particles.forEach((particle, i) => {
      let { t, speed, mx, my, mz, cz, randomRadiusOffset } = particle;

      t = particle.t += speed / 2;

      const projectionFactor = 1 - cz / 50;
      const projectedTargetX = targetX * projectionFactor;
      const projectedTargetY = targetY * projectionFactor;

      const dx = mx - projectedTargetX;
      const dy = my - projectedTargetY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let targetPos = { x: mx, y: my, z: mz * depthFactor };

      if (dist < magnetRadius) {
        const angle = Math.atan2(dy, dx) + globalRotation;

        const wave = Math.sin(t * waveSpeed + angle) * (0.5 * waveAmplitude);
        const deviation = randomRadiusOffset * (5 / (fieldStrength + 0.1));

        const currentRingRadius = ringRadius + wave + deviation;

        targetPos.x = projectedTargetX + currentRingRadius * Math.cos(angle);
        targetPos.y = projectedTargetY + currentRingRadius * Math.sin(angle);
        targetPos.z = mz * depthFactor + Math.sin(t) * (1 * waveAmplitude * depthFactor);
      }

      particle.cx += (targetPos.x - particle.cx) * lerpSpeed;
      particle.cy += (targetPos.y - particle.cy) * lerpSpeed;
      particle.cz += (targetPos.z - particle.cz) * lerpSpeed;

      dummy.position.set(particle.cx, particle.cy, particle.cz);

      dummy.lookAt(projectedTargetX, projectedTargetY, particle.cz);
      dummy.rotateX(Math.PI / 2);

      const currentDistToMouse = Math.sqrt(
        Math.pow(particle.cx - projectedTargetX, 2) + Math.pow(particle.cy - projectedTargetY, 2)
      );

      const distFromRing = Math.abs(currentDistToMouse - ringRadius);
      let scaleFactor = 1 - distFromRing / 10;

      scaleFactor = Math.max(minScale, Math.min(1, scaleFactor));

      const finalScale =
        scaleFactor * (0.8 + Math.sin(t * pulseSpeed) * 0.2 * particleVariance) * particleSize;
      dummy.scale.set(finalScale, finalScale, finalScale);

      dummy.updateMatrix();

      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {particleShape === 'capsule' && <capsuleGeometry args={[0.07, 0.25, 4, 8]} />}
      {particleShape === 'sphere' && <sphereGeometry args={[0.15, 16, 16]} />}
      {particleShape === 'box' && <boxGeometry args={[0.2, 0.2, 0.2]} />}
      {particleShape === 'tetrahedron' && <tetrahedronGeometry args={[0.2]} />}
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  );
};

export const Antigravity = ({ fullPage = false, className, style, ...props }: AntigravityProps) => {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true);
    }
  }, []);

  if (!mounted || reducedMotion) {
    return null;
  }

  const canvasElement = (
    <Canvas
      camera={{ position: [0, 0, 50], fov: 35 }}
      style={{
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style,
      }}
      className={className}
      gl={{ alpha: true, antialias: true }}
    >
      <AntigravityInner {...props} />
    </Canvas>
  );

  if (fullPage) {
    return (
      <div
        className="antigravity-fullpage fixed inset-0 pointer-events-none z-[1] overflow-hidden"
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
      >
        {canvasElement}
      </div>
    );
  }

  return canvasElement;
};

export default Antigravity;
