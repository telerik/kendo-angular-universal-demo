interface DraggableOptions {
    press?: Function,
    drag?: Function,
    release?: Function
}

export default class Draggable {
    constructor(options?: DraggableOptions)
    bindTo(element: Element)
    destroy()
}
