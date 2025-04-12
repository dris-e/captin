import { useEffect } from 'react';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default function BurgerViewer() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const container = document.getElementById('burger');

    if (!container) return;

    renderer.setSize(400, 400);
    container.appendChild(renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(light);

    const mtlLoader = new MTLLoader();
    mtlLoader.setPath('/assets/burger/');
    mtlLoader.load('Hamburger.mtl', (materials) => {
      materials.preload();

      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath('/assets/burger/');
      objLoader.load('Hamburger.obj', (object) => {
        object.scale.set(0.5, 0.5, 0.5);
        scene.add(object);
        camera.position.z = 5;

        const animate = () => {
          requestAnimationFrame(animate);
          object.rotation.y += 0.01;
          renderer.render(scene, camera);
        };

        animate();
      });
    });

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="burger" style={{ width: 400, height: 400 }} />;
}