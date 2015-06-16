$(document).ready(function () {

  // setup scene, camera, and renderer
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  camera.position.z = 150;

  // setup orbit controls
  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target = new THREE.Vector3(0, 0, 0);

  // load stl file for human body
  var body;
  var loader = new THREE.STLLoader();
  loader.load( './media/body.stl', function (geometry) {
    var bodyMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    body = new THREE.Mesh( geometry, bodyMaterial );
    body.position.y = 20;
    scene.add( body );
  });

  var floorGeometry = new THREE.PlaneGeometry( 120, 120);
  var floorMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = -Math.PI/2.1;
  floor.rotation.z = -Math.PI/4;
  scene.add(floor);

  // setup start animation
  var counter = 0;
  function render() {
    requestAnimationFrame( render );
    counter += 4;
    renderer.render( scene, camera );
    body.rotation.z += 0.1;
    body.rotation.y += 0.1;
    body.position.y = counter % 100 + 10;
  }
  $(window).load(function () {
    render();
  })

});