import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-anim',
  templateUrl: './anim.component.html',
  styleUrls: ['./anim.component.scss']
})
export class AnimComponent implements OnInit, AfterViewInit {

  @ViewChild('anim_container') container: ElementRef | any;

  scene: any;
  renderer: any;
  camera: any;
  material: any;
  geometry: any;
  points: any[] = [];
  mesh:any;
  beta: number = 0;

  constructor() {    
  } 

  ngAfterViewInit(): void {
    this.createScene();
  
    this.renderer.render( this.scene, this.camera );
    this.rotate();    
    this.animate();
  }
  
  ngOnInit(): void {
  }

  createScene() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);

    this.container.nativeElement.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
    this.camera.position.set( 0, 0, 70);

    this.geometry = new THREE.BufferGeometry();
    const buffer = new THREE.BufferAttribute( this.generatePoints(), 3);
    buffer.count = buffer.array.length / 3;
    this.geometry.setAttribute('position', buffer);


    const texture = new THREE.TextureLoader().load('/assets/star.png');
    this.material = new THREE.PointsMaterial( { color: 0x00AAAA, size: 0.25, map: texture, sizeAttenuation: true, transparent: true, opacity: 1} );
    this.mesh = new THREE.Points( this.geometry, this.material );
    this.scene.add(this.mesh);
  }

  onWindowResize(event: any) {
    const container = event.target;    
    this.camera.aspect = container.innerWidth / container.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(container.innerWidth, container.innerHeight);
  }

  generatePoints() : Float32Array {
    const r = 40;

    let positions = [];
    for(let theta = 0; theta < Math.PI; theta+=0.05 ) {
      for(let phi = 0; phi < Math.PI*2;  phi+=0.05) {
          const x = (r * Math.sin(theta) * Math.cos(phi)) * Math.random();
          const z = (r * Math.sin(theta) * Math.sin(phi)) * Math.random();
          const y = (r * Math.cos(theta)) + Math.random();

          positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }

  graph(x: number, z: number) {
    let t = 0;
    let f = 0.002;
    let a = 3;
    return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
  }
  
  animate() {
    const cameraTarget = new THREE.Vector3(1, 0, 30)
    this.camera.position.lerp(cameraTarget, 0.05);
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
  }
  
  rotate() {
    requestAnimationFrame(this.rotate.bind(this));
    this.mesh.rotation.y += 0.001;
    this.mesh.translateY(Math.sin(this.beta)/80)
    this.renderer.render(this.scene, this.camera);
    this.beta += Math.PI/300;    
  }
}
