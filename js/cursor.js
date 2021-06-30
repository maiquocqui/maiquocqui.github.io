'use strict';

// set the starting position of the cursor outside of the screen

var clientX = -100;
var clientY = -100;
var innerCursor = document.querySelector('.cursor--small');

var initCursor = function initCursor() {
  // add listener to track the current mouse position
  document.addEventListener('mousemove', function(e) {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  var render = function render() {
    innerCursor.style.transform = 'translate(' + clientX + 'px, ' + clientY + 'px)';
    // if you are already using TweenMax in your project, you might as well
    // use TweenMax.set() instead
    // TweenMax.set(innerCursor, {
    //   x: clientX,
    //   y: clientY
    // });

    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();

var lastX = 0;
var lastY = 0;
var isStuck = false;
var showCursor = false;
var group = void 0,
  stuckX = void 0,
  stuckY = void 0,
  fillOuterCursor = void 0;

var initCanvas = function initCanvas() {
  var canvas = document.querySelector('.cursor--canvas');
  var shapeBounds = {
    width: 75,
    height: 75
  };
  paper.setup(canvas);
  var strokeColor = '#fec02f';
  var strokeWidth = 1;
  var segments = 8;
  var radius = 15;

  // we'll need these later for the noisy circle
  var noiseScale = 150; // speed
  var noiseRange = 4; // range of distortion
  var isNoisy = false; // state

  // the base shape for the noisy circle
  var polygon = new paper.Path.RegularPolygon(new paper.Point(0, 0), segments, radius);
  polygon.strokeColor = strokeColor;
  polygon.strokeWidth = strokeWidth;
  polygon.smooth();
  group = new paper.Group([polygon]);
  group.applyMatrix = false;

  var noiseObjects = polygon.segments.map(function() {
    return new SimplexNoise();
  });
  var bigCoordinates = [];

  // function for linear interpolation of values
  var lerp = function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  };

  // function to map a value from one range to another range
  var map = function map(value, in_min, in_max, out_min, out_max) {
    return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  };

  // the draw loop of Paper.js
  // (60fps with requestAnimationFrame under the hood)
  paper.view.onFrame = function(event) {
    // using linear interpolation, the circle will move 0.2 (20%)
    // of the distance between its current position and the mouse
    // coordinates per Frame
    lastX = lerp(lastX, clientX, 0.1);
    lastY = lerp(lastY, clientY, 0.1);
    group.position = new paper.Point(lastX, lastY);
  };
};

if ($(window).innerWidth() >= 1200) {
  initCanvas();
}