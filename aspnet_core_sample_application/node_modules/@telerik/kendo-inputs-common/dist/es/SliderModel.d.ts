declare class SliderModel {
    constructor(props: any, wrapper: any, track: any);
    getTickSizes(): any[];
    trackWidth(): number;
    resizeTrack(): void;
    resizeTicks(ticksContainer: any, ticks: any): void;
    resizeWrapper(): void;
    positionHandle(dragHandle: any): void;
    positionSelection(dragHandle: any, selection: any): void;
    adjustPadding(ticksContainer: any): void;
    elementOffset(element: any): number;
    elementSize(element: any): any;
}
export default SliderModel;
