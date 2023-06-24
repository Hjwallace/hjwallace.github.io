import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

THREE.ColorManagement.enabled = false

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const axesHelper = new THREE.AxesHelper( 5 );
axesHelper.position.set(-6,5)
scene.add( axesHelper );

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

//Bench

const bench = new THREE.Group();

const benchLeftLeg = new THREE.Mesh(
    new THREE.CylinderGeometry(1,1,2,10),
    new THREE.MeshStandardMaterial({roughness: 1})
)
benchLeftLeg.position.set(2,1)

const benchRightLeg = new THREE.Mesh(
    new THREE.CylinderGeometry(1,1,2,10),
    new THREE.MeshStandardMaterial({roughness: 1})
)
benchRightLeg.position.set(-2,1)

const benchTop = new THREE.Mesh(
    new THREE.BoxGeometry(4,1,2),
    new THREE.MeshStandardMaterial({roughness: 1})
)
benchTop.position.y = 1.5

bench.add(benchLeftLeg, benchRightLeg, benchTop)
bench.position.set(-5,0,-4)
bench.rotateY(4)
scene.add(bench)

// Pond 
const pond = new THREE.Group()

const pondOuterRing = new THREE.Mesh(
    new THREE.TorusGeometry(5,1,12,48),
    new THREE.MeshStandardMaterial({roughness: 1})
)
pondOuterRing.rotateX(260)

const pondInnerRing = new THREE.Mesh(
    new THREE.CylinderGeometry(4.5,4.5,1,32),
    new THREE.MeshStandardMaterial({roughness: 1})
)
// pondInnerRing.position.y = -.25
pondInnerRing.material.color = new THREE.Color('blue')

pond.add(pondOuterRing,pondInnerRing)
scene.add(pond)

// Floor
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ color: '#a9c388' })
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
scene.add(floor)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#ffffff', 0.5)
moonLight.position.set(4, 5, - 2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
scene.add(moonLight)
scene.fog = new THREE.Fog(0xcccccc, 20 , 1)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 8
camera.position.z = 15
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()