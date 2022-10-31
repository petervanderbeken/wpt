// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.strokeRect.zero.1
// Description:strokeRect of 0x0 pixels draws nothing
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("strokeRect of 0x0 pixels draws nothing");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

ctx.strokeStyle = '#f00';
ctx.lineWidth = 250;
ctx.strokeRect(50, 25, 0, 0);
_assertPixel(canvas, 50,25, 0,0,0,0);
t.done();

});
done();
