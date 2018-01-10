import wnd from './window';

export default function windowViewport(element) {
    var win = wnd(element);

    return {
        height: win.innerHeight,
        width: win.innerWidth
    };
}

//# sourceMappingURL=window-viewport.js.map
