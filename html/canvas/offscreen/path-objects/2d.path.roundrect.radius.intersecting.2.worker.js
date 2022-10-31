// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.roundrect.radius.intersecting.2
// Description:Check that roundRects with intersecting corner arcs are rendered correctly.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Check that roundRects with intersecting corner arcs are rendered correctly.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.roundRect(0, 0, 100, 50, [1000, 1000, 1000, 1000]);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixel(canvas, 2,25, 0,255,0,255);
_assertPixel(canvas, 50,1, 0,255,0,255);
_assertPixel(canvas, 50,25, 0,255,0,255);
_assertPixel(canvas, 50,48, 0,255,0,255);
_assertPixel(canvas, 97,25, 0,255,0,255);
_assertPixel(canvas, 1,1, 255,0,0,255);
_assertPixel(canvas, 98,1, 255,0,0,255);
_assertPixel(canvas, 1,48, 255,0,0,255);
_assertPixel(canvas, 98,48, 255,0,0,255);
t.done();

});
done();
