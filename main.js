import * as THREE from 'three';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, 0.1, 1000);
camera.position.setZ(30);
camera.position.setX(-3);
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(800,600);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
 

renderer.render(scene, camera);

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshStandardMaterial( { color: 0xffff00 } );//vantablack
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5,5,5)

const ambientlight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientlight)

 

function animate(){
requestAnimationFrame(animate);
torusKnot.rotation.x += 0.01;
torusKnot.rotation.y += 0.005;
torusKnot.rotation.z += 0.01;

renderer.render(scene, camera);
}

animate()

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  camera.rotation.z = t * -0.01;
  camera.rotation.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;

}

document.body.onscroll = moveCamera;
moveCamera();