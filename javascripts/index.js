$(document).ready(function () {

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

  camera.position.z = 100;

  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target = new THREE.Vector3(0, 0, 0);

  // copied form STLLoader github vvvv

  var body;

  var loader = new THREE.STLLoader();
  console.log(loader);
  loader.load( './media/body.stl', function ( geometry ) {
    body = new THREE.Mesh( geometry );
    scene.add( body );
  } );

  function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
    body.rotation.z += 0.1;
    body.rotation.y += 0.1;
  }
  render();

});