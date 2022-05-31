import './style.css'

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Vector3 } from 'three';

const scene = new THREE.Scene();
const loader = new GLTFLoader();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 160);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

var torusLoaded = false;
const geometryTorus = new THREE.TorusGeometry(10,3,16,100);
const materialTorus = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true});
const torus = new THREE.Mesh(geometryTorus, materialTorus);
torusLoaded = true
scene.add(torus)

var books;
var booksLoaded = false;
loader.load( 'src/books/book.gltf', function ( gltf ) {
  books = gltf.scene;
  const materialBooks = new THREE.MeshBasicMaterial({ color: 0x549ED6, wireframe: true});
  books.traverse((node) => {
    if (node.isMesh) node.material = materialBooks;
  });
  books.position.set(15,0,180)
  books.scale.set(0.1,0.1,0.1)
  booksLoaded = true
  scene.add(books)
}, undefined, function ( error ) {

	console.error( error );

} )

var trophyLoaded = false;
var trophy;
loader.load( 'src/trophy/trophy.gltf', function ( gltf ) {
  trophy = gltf.scene;
  const materialTrophy = new THREE.MeshBasicMaterial({ color: 0xFE9A01, wireframe: true});
  trophy.traverse((node) => {
    if (node.isMesh) node.material = materialTrophy;
  });
  trophy.position.set(-10,-7,390)
  trophy.scale.set(0.3,0.3,0.3)
  
  trophyLoaded = true
  scene.add(trophy)
}, undefined, function ( error ) {

	console.error( error );

} )

var pcLoaded = false;
var pc;
loader.load( 'src/cpu/cpu.gltf', function ( gltf ) {
  pc = gltf.scene;
  const materialPC = new THREE.MeshBasicMaterial({ color: 0x50603F, wireframe: true});
  pc.traverse((node) => {
    if (node.isMesh) node.material = materialPC;
  });
  pc.position.set(20,0,520)
  pc.rotation.x = 1
  pc.scale.set(5.5, 5.5, 5.5)
  pcLoaded = true
	scene.add( pc );

}, undefined, function ( error ) {

	console.error( error );

} )

function animate() {
  requestAnimationFrame(animate);
  if(torusLoaded) torus.rotation.x += 0.01;
  if (trophyLoaded) trophy.rotation.y += 0.01;
  if (booksLoaded) books.rotation.y += 0.01;
  if (pcLoaded) pc.rotation.z += 0.01;
  renderer.render(scene, camera)
}

function scrollFunction() {
  const t = document.body.getBoundingClientRect().top
  camera.position.z = -t*0.25 + 30
}

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

document.body.onscroll = scrollFunction

window.onbeforeunload = function () {
  window.scrollTop(0);
}

animate()