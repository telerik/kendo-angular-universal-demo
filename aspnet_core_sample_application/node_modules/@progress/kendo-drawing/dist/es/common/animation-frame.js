var wnd = typeof window !== "undefined" ? window : {};

var animationFrame = wnd.requestAnimationFrame ||
                    wnd.webkitRequestAnimationFrame ||
                    wnd.mozRequestAnimationFrame ||
                    wnd.oRequestAnimationFrame ||
                    wnd.msRequestAnimationFrame ||
                    function(callback) { setTimeout(callback, 1000 / 60); };

export default function animationFrameProxy(callback) {
    animationFrame.call(wnd, callback);
}

//# sourceMappingURL=animation-frame.js.map
