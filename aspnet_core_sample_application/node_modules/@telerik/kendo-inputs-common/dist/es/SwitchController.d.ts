declare class SwitchController {
    constructor(updateView: any, onChange: any);
    updateState(props: any);
    change(checked: boolean);
    updateModel(position: number, animate: boolean);
    constrain(): number;
    limit(value: number): number;
    onPress(pageX: any): void;
    onRelease(pageX: any): void;
    onDrag(pageX: any): void;
    addAnimation(model: Object): Object;
}
export default SwitchController;
