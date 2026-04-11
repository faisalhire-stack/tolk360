"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Country coordinates with languages
const countryData: { name: string; lat: number; lng: number; languages: string[] }[] = [
  { name: "Danmark", lat: 56.26, lng: 9.50, languages: ["Dansk"] },
  { name: "Sverige", lat: 60.13, lng: 18.64, languages: ["Svensk"] },
  { name: "Norge", lat: 60.47, lng: 8.47, languages: ["Norsk"] },
  { name: "Finland", lat: 61.92, lng: 25.75, languages: ["Finsk"] },
  { name: "Island", lat: 64.96, lng: -19.02, languages: ["Islandsk"] },
  { name: "Storbritannien", lat: 55.38, lng: -3.44, languages: ["Engelsk"] },
  { name: "Irland", lat: 53.14, lng: -7.69, languages: ["Irsk", "Engelsk"] },
  { name: "Tyskland", lat: 51.17, lng: 10.45, languages: ["Tysk"] },
  { name: "Frankrig", lat: 46.23, lng: 2.21, languages: ["Fransk"] },
  { name: "Spanien", lat: 40.46, lng: -3.75, languages: ["Spansk", "Catalansk", "Baskisk"] },
  { name: "Portugal", lat: 39.40, lng: -8.22, languages: ["Portugisisk"] },
  { name: "Italien", lat: 41.87, lng: 12.57, languages: ["Italiensk"] },
  { name: "Nederlandene", lat: 52.13, lng: 5.29, languages: ["Hollandsk"] },
  { name: "Belgien", lat: 50.50, lng: 4.47, languages: ["Flamsk", "Fransk", "Tysk"] },
  { name: "Schweiz", lat: 46.82, lng: 8.23, languages: ["Tysk", "Fransk", "Italiensk", "Rætoromansk"] },
  { name: "Østrig", lat: 47.52, lng: 14.55, languages: ["Tysk"] },
  { name: "Polen", lat: 51.92, lng: 19.15, languages: ["Polsk"] },
  { name: "Tjekkiet", lat: 49.82, lng: 15.47, languages: ["Tjekkisk"] },
  { name: "Slovakiet", lat: 48.67, lng: 19.70, languages: ["Slovakisk"] },
  { name: "Ungarn", lat: 47.16, lng: 19.50, languages: ["Ungarsk"] },
  { name: "Rumænien", lat: 45.94, lng: 24.97, languages: ["Rumænsk"] },
  { name: "Bulgarien", lat: 42.73, lng: 25.49, languages: ["Bulgarsk"] },
  { name: "Grækenland", lat: 39.07, lng: 21.82, languages: ["Græsk"] },
  { name: "Kroatien", lat: 45.10, lng: 15.20, languages: ["Kroatisk"] },
  { name: "Serbien", lat: 44.02, lng: 21.01, languages: ["Serbisk"] },
  { name: "Bosnien-Hercegovina", lat: 43.92, lng: 17.68, languages: ["Bosnisk"] },
  { name: "Montenegro", lat: 42.71, lng: 19.37, languages: ["Montenegrinsk"] },
  { name: "Nordmakedonien", lat: 41.51, lng: 21.75, languages: ["Makedonsk"] },
  { name: "Slovenien", lat: 46.15, lng: 14.99, languages: ["Slovensk"] },
  { name: "Albanien", lat: 41.15, lng: 20.17, languages: ["Albansk"] },
  { name: "Kosovo", lat: 42.60, lng: 20.90, languages: ["Albansk", "Serbisk"] },
  { name: "Estland", lat: 58.60, lng: 25.01, languages: ["Estisk"] },
  { name: "Letland", lat: 56.88, lng: 24.60, languages: ["Lettisk"] },
  { name: "Litauen", lat: 55.17, lng: 23.88, languages: ["Litauisk"] },
  { name: "Ukraine", lat: 48.38, lng: 31.17, languages: ["Ukrainsk"] },
  { name: "Rusland", lat: 61.52, lng: 105.32, languages: ["Russisk"] },
  { name: "Belarus", lat: 53.71, lng: 27.95, languages: ["Hviderussisk"] },
  { name: "Moldova", lat: 47.41, lng: 28.37, languages: ["Rumænsk"] },
  { name: "Georgien", lat: 42.32, lng: 43.36, languages: ["Georgisk"] },
  { name: "Armenien", lat: 40.07, lng: 45.04, languages: ["Armensk"] },
  { name: "Aserbajdsjan", lat: 40.14, lng: 47.58, languages: ["Aserbajdsjansk"] },
  { name: "Tyrkiet", lat: 38.96, lng: 35.24, languages: ["Tyrkisk", "Kurdisk"] },
  { name: "Irak", lat: 33.22, lng: 43.68, languages: ["Arabisk", "Kurdisk"] },
  { name: "Iran", lat: 32.43, lng: 53.69, languages: ["Farsi", "Kurdisk"] },
  { name: "Saudi-Arabien", lat: 23.89, lng: 45.08, languages: ["Arabisk"] },
  { name: "Yemen", lat: 15.55, lng: 48.52, languages: ["Arabisk"] },
  { name: "Oman", lat: 21.51, lng: 55.92, languages: ["Arabisk"] },
  { name: "De Forenede Arabiske Emirater", lat: 23.42, lng: 53.85, languages: ["Arabisk"] },
  { name: "Qatar", lat: 25.35, lng: 51.18, languages: ["Arabisk"] },
  { name: "Bahrain", lat: 26.07, lng: 50.56, languages: ["Arabisk"] },
  { name: "Kuwait", lat: 29.31, lng: 47.48, languages: ["Arabisk"] },
  { name: "Jordan", lat: 30.59, lng: 36.24, languages: ["Arabisk"] },
  { name: "Libanon", lat: 33.85, lng: 35.86, languages: ["Arabisk", "Fransk"] },
  { name: "Syrien", lat: 34.80, lng: 39.00, languages: ["Arabisk", "Kurdisk"] },
  { name: "Israel", lat: 31.05, lng: 34.85, languages: ["Hebraisk", "Arabisk"] },
  { name: "Palæstina", lat: 31.95, lng: 35.23, languages: ["Arabisk"] },
  { name: "Afghanistan", lat: 33.94, lng: 67.71, languages: ["Dari", "Pashto"] },
  { name: "Pakistan", lat: 30.38, lng: 69.35, languages: ["Urdu", "Panjabi", "Pashto"] },
  { name: "Indien", lat: 20.59, lng: 78.96, languages: ["Hindi", "Urdu", "Bengali", "Tamil", "Telugu", "Gujarati", "Panjabi"] },
  { name: "Bangladesh", lat: 23.68, lng: 90.36, languages: ["Bengali"] },
  { name: "Sri Lanka", lat: 7.87, lng: 80.77, languages: ["Singalesisk", "Tamil"] },
  { name: "Nepal", lat: 28.39, lng: 84.12, languages: ["Nepalesisk"] },
  { name: "Myanmar", lat: 21.91, lng: 95.96, languages: ["Burmesisk"] },
  { name: "Thailand", lat: 15.87, lng: 100.99, languages: ["Thai"] },
  { name: "Vietnam", lat: 14.06, lng: 108.28, languages: ["Vietnamesisk"] },
  { name: "Cambodja", lat: 12.57, lng: 104.99, languages: ["Khmer"] },
  { name: "Laos", lat: 19.86, lng: 102.50, languages: ["Laotisk"] },
  { name: "Indonesien", lat: -0.79, lng: 113.92, languages: ["Indonesisk"] },
  { name: "Malaysia", lat: 4.21, lng: 101.98, languages: ["Malaysisk"] },
  { name: "Filippinerne", lat: 12.88, lng: 121.77, languages: ["Filipino", "Tagalog"] },
  { name: "Kina", lat: 35.86, lng: 104.20, languages: ["Kinesisk (Mandarin)", "Kantonesisk"] },
  { name: "Japan", lat: 36.20, lng: 138.25, languages: ["Japansk"] },
  { name: "Sydkorea", lat: 35.91, lng: 127.77, languages: ["Koreansk"] },
  { name: "Nordkorea", lat: 40.34, lng: 127.51, languages: ["Koreansk"] },
  { name: "Mongoliet", lat: 46.86, lng: 103.85, languages: ["Mongolsk"] },
  { name: "Egypten", lat: 26.82, lng: 30.80, languages: ["Arabisk"] },
  { name: "Libyen", lat: 26.34, lng: 17.23, languages: ["Arabisk"] },
  { name: "Tunesien", lat: 33.89, lng: 9.54, languages: ["Arabisk", "Fransk"] },
  { name: "Algeriet", lat: 28.03, lng: 1.66, languages: ["Arabisk", "Berbisk", "Fransk"] },
  { name: "Marokko", lat: 31.79, lng: -7.09, languages: ["Arabisk", "Berbisk", "Fransk"] },
  { name: "Somalia", lat: 5.15, lng: 46.20, languages: ["Somali", "Arabisk"] },
  { name: "Etiopien", lat: 9.15, lng: 40.49, languages: ["Amharisk", "Tigrinya", "Oromo"] },
  { name: "Eritrea", lat: 15.18, lng: 39.78, languages: ["Tigrinya", "Arabisk"] },
  { name: "Sudan", lat: 12.86, lng: 30.22, languages: ["Arabisk"] },
  { name: "Sydsudan", lat: 6.88, lng: 31.31, languages: ["Engelsk", "Arabisk"] },
  { name: "Kenya", lat: -0.02, lng: 37.91, languages: ["Swahili", "Engelsk"] },
  { name: "Tanzania", lat: -6.37, lng: 34.89, languages: ["Swahili"] },
  { name: "Uganda", lat: 1.37, lng: 32.29, languages: ["Swahili", "Engelsk"] },
  { name: "Rwanda", lat: -1.94, lng: 29.87, languages: ["Kinyarwanda", "Fransk"] },
  { name: "Burundi", lat: -3.37, lng: 29.92, languages: ["Kirundi", "Fransk"] },
  { name: "DR Congo", lat: -4.04, lng: 21.76, languages: ["Fransk", "Lingala", "Swahili"] },
  { name: "Congo", lat: -0.23, lng: 15.83, languages: ["Fransk"] },
  { name: "Nigeria", lat: 9.08, lng: 8.68, languages: ["Engelsk", "Hausa", "Yoruba", "Igbo"] },
  { name: "Ghana", lat: 7.95, lng: -1.02, languages: ["Engelsk", "Akan"] },
  { name: "Senegal", lat: 14.50, lng: -14.45, languages: ["Fransk", "Wolof"] },
  { name: "Sydafrika", lat: -30.56, lng: 22.94, languages: ["Afrikaans", "Engelsk", "Zulu"] },
  { name: "Mozambique", lat: -18.67, lng: 35.53, languages: ["Portugisisk"] },
  { name: "Angola", lat: -11.20, lng: 17.87, languages: ["Portugisisk"] },
  { name: "Cameroun", lat: 7.37, lng: 12.35, languages: ["Fransk", "Engelsk"] },
  { name: "Elfenbenskysten", lat: 7.54, lng: -5.55, languages: ["Fransk"] },
  { name: "Mali", lat: 17.57, lng: -4.00, languages: ["Fransk", "Bambara"] },
  { name: "Burkina Faso", lat: 12.24, lng: -1.56, languages: ["Fransk"] },
  { name: "Niger", lat: 17.61, lng: 8.08, languages: ["Fransk", "Hausa"] },
  { name: "Tchad", lat: 15.45, lng: 18.73, languages: ["Fransk", "Arabisk"] },
  { name: "USA", lat: 37.09, lng: -95.71, languages: ["Engelsk", "Spansk"] },
  { name: "Canada", lat: 56.13, lng: -106.35, languages: ["Engelsk", "Fransk"] },
  { name: "Mexico", lat: 23.63, lng: -102.55, languages: ["Spansk"] },
  { name: "Brasilien", lat: -14.24, lng: -51.93, languages: ["Portugisisk"] },
  { name: "Argentina", lat: -38.42, lng: -63.62, languages: ["Spansk"] },
  { name: "Colombia", lat: 4.57, lng: -74.30, languages: ["Spansk"] },
  { name: "Peru", lat: -9.19, lng: -75.02, languages: ["Spansk", "Quechua"] },
  { name: "Chile", lat: -35.68, lng: -71.54, languages: ["Spansk"] },
  { name: "Cuba", lat: 21.52, lng: -77.78, languages: ["Spansk"] },
  { name: "Australien", lat: -25.27, lng: 133.78, languages: ["Engelsk"] },
  { name: "New Zealand", lat: -40.90, lng: 174.89, languages: ["Engelsk", "Maori"] },
  { name: "Tibet", lat: 29.65, lng: 91.10, languages: ["Tibetansk"] },
  { name: "Usbekistan", lat: 41.38, lng: 64.59, languages: ["Usbekisk"] },
  { name: "Kasakhstan", lat: 48.02, lng: 66.92, languages: ["Kasakhisk", "Russisk"] },
  { name: "Tadsjikistan", lat: 38.86, lng: 71.28, languages: ["Tadsjikisk"] },
  { name: "Turkmenistan", lat: 38.97, lng: 59.56, languages: ["Turkmensk"] },
  { name: "Kirgisistan", lat: 41.20, lng: 74.77, languages: ["Kirgisisk", "Russisk"] },
];

export const allLanguages: string[] = Array.from(
  new Set(countryData.flatMap((c) => c.languages))
).sort((a, b) => a.localeCompare(b, "da"));

export const languageCountryMap: Record<string, string[]> = {};
for (const c of countryData) {
  for (const lang of c.languages) {
    if (!languageCountryMap[lang]) languageCountryMap[lang] = [];
    languageCountryMap[lang].push(c.name);
  }
}

// Convert lat/lng to 3D position on sphere
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// Create a curved arc between two points on the globe
function createArc(start: THREE.Vector3, end: THREE.Vector3, radius: number): THREE.BufferGeometry {
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const dist = start.distanceTo(end);
  mid.normalize().multiplyScalar(radius + dist * 0.4);

  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  const points = curve.getPoints(48);
  return new THREE.BufferGeometry().setFromPoints(points);
}

// Glow sprite for markers
function createGlowSprite(color: THREE.Color, size: number): THREE.Sprite {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, `rgba(${Math.round(color.r * 255)},${Math.round(color.g * 255)},${Math.round(color.b * 255)},1)`);
  gradient.addColorStop(0.3, `rgba(${Math.round(color.r * 255)},${Math.round(color.g * 255)},${Math.round(color.b * 255)},0.6)`);
  gradient.addColorStop(1, `rgba(${Math.round(color.r * 255)},${Math.round(color.g * 255)},${Math.round(color.b * 255)},0)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(size, size, 1);
  return sprite;
}

interface GlobeProps {
  focusLang?: string | null;
}

const DENMARK = { lat: 56.26, lng: 9.50 };
const GLOBE_RADIUS = 1;

export function Globe({ focusLang }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    globe: THREE.Mesh;
    markerGroup: THREE.Group;
    arcGroup: THREE.Group;
    animId: number;
  } | null>(null);
  const rotationRef = useRef({ y: 0, targetY: 0, targetZoom: 3.2, zoom: 3.2 });
  const pointerRef = useRef({ down: false, x: 0, reachedTarget: false });

  // Init scene once
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const w = container.clientWidth;
    const h = container.clientHeight || w;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.z = 3.2;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xbbccff, 0.6);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    // Earth globe
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load("/earth-blue-marble.jpg");
    earthTexture.colorSpace = THREE.SRGBColorSpace;

    const globeGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const globeMat = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpScale: 0.02,
      specular: new THREE.Color(0x333333),
      shininess: 15,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // Atmosphere glow
    const atmosGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.03, 64, 64);
    const atmosMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
    scene.add(atmosphere);

    // Groups for markers and arcs
    const markerGroup = new THREE.Group();
    scene.add(markerGroup);
    const arcGroup = new THREE.Group();
    scene.add(arcGroup);

    // Initial rotation to show Europe
    globe.rotation.y = -0.2;
    markerGroup.rotation.y = -0.2;
    arcGroup.rotation.y = -0.2;
    rotationRef.current.y = -0.2;
    rotationRef.current.targetY = -0.2;

    // Store refs
    sceneRef.current = { renderer, scene, camera, globe, markerGroup, arcGroup, animId: 0 };

    // Animation loop
    function animate() {
      const ref = rotationRef.current;
      const ptr = pointerRef.current;

      if (ptr.down) {
        // User is dragging
        ptr.reachedTarget = true;
      } else if (!ptr.reachedTarget && ref.targetY !== undefined) {
        // Lerp to target
        ref.y += (ref.targetY - ref.y) * 0.04;
        if (Math.abs(ref.targetY - ref.y) < 0.005) ptr.reachedTarget = true;
      } else if (!focusLang) {
        // Auto rotate
        ref.y += 0.002;
        ptr.reachedTarget = false;
      }

      // Smooth zoom
      ref.zoom += (ref.targetZoom - ref.zoom) * 0.05;
      camera.position.z = ref.zoom;

      globe.rotation.y = ref.y;
      markerGroup.rotation.y = ref.y;
      arcGroup.rotation.y = ref.y;
      atmosphere.rotation.y = ref.y;

      renderer.render(scene, camera);
      sceneRef.current!.animId = requestAnimationFrame(animate);
    }
    sceneRef.current.animId = requestAnimationFrame(animate);

    // Resize handler
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight || w;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // Pointer events for drag
    const onPointerDown = (e: PointerEvent) => {
      pointerRef.current.down = true;
      pointerRef.current.x = e.clientX;
    };
    const onPointerUp = () => { pointerRef.current.down = false; };
    const onPointerMove = (e: PointerEvent) => {
      if (pointerRef.current.down) {
        const delta = e.clientX - pointerRef.current.x;
        pointerRef.current.x = e.clientX;
        rotationRef.current.y += delta * 0.005;
      }
    };
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);

    return () => {
      cancelAnimationFrame(sceneRef.current!.animId);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  // Update markers & arcs when focusLang changes
  useEffect(() => {
    if (!sceneRef.current) return;
    const { markerGroup, arcGroup } = sceneRef.current;

    // Clear previous markers and arcs
    while (markerGroup.children.length) {
      markerGroup.remove(markerGroup.children[0]);
    }
    while (arcGroup.children.length) {
      arcGroup.remove(arcGroup.children[0]);
    }

    const highlighted = focusLang
      ? countryData.filter((c) => c.languages.includes(focusLang))
      : null;

    const dkPos = latLngToVector3(DENMARK.lat, DENMARK.lng, GLOBE_RADIUS * 1.005);

    if (highlighted && highlighted.length > 0) {
      // Zoom in and rotate to first highlighted country
      const target = highlighted[0];
      const targetRotY = -(target.lng * Math.PI) / 180 - Math.PI / 2;
      rotationRef.current.targetY = targetRotY;
      rotationRef.current.targetZoom = 2.4;
      pointerRef.current.reachedTarget = false;

      // Denmark marker (origin)
      const dkSprite = createGlowSprite(new THREE.Color(0x2e75b6), 0.08);
      dkSprite.position.copy(dkPos);
      markerGroup.add(dkSprite);

      // Highlighted country markers + arcs from Denmark
      for (const country of highlighted) {
        const pos = latLngToVector3(country.lat, country.lng, GLOBE_RADIUS * 1.005);

        // Glowing marker
        const sprite = createGlowSprite(new THREE.Color(0xff6b35), 0.12);
        sprite.position.copy(pos);
        markerGroup.add(sprite);

        // Arc from Denmark
        if (country.name !== "Danmark") {
          const arcGeo = createArc(dkPos, pos, GLOBE_RADIUS);
          const arcMat = new THREE.LineBasicMaterial({
            color: 0x2e75b6,
            transparent: true,
            opacity: 0.6,
            linewidth: 1,
          });
          const arcLine = new THREE.Line(arcGeo, arcMat);
          arcGroup.add(arcLine);
        }
      }
    } else {
      // Default: show all countries as small dots
      rotationRef.current.targetZoom = 3.2;

      for (const country of countryData) {
        const pos = latLngToVector3(country.lat, country.lng, GLOBE_RADIUS * 1.005);
        const isDk = country.name === "Danmark";
        const sprite = createGlowSprite(
          new THREE.Color(isDk ? 0xff6b35 : 0x2e75b6),
          isDk ? 0.1 : 0.05
        );
        sprite.position.copy(pos);
        markerGroup.add(sprite);
      }
    }
  }, [focusLang]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[550px] mx-auto rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
      style={{ background: "radial-gradient(circle at 50% 50%, #0d1a30 0%, #060c18 100%)" }}
    />
  );
}
