declare var SliderUtil: {
    calculateFixedTrackSize: (props: any) => number;
    calculateValueFromTick: (index: number, props: any) => any;
    calculateValueFromTrack: (clientRect: any, pageOffset: any, props: any) => any;
    calculateTrackSize: (wrapperWidth: any, offset: any) => number;
    calculateTicksCount: (max?: number, min?: number, smallStep?: number) => number;
    calculateTickSizes: (trackSize: any, min: any, max: any, step: any) => any[];
    calculateHandlePosition: (props: any) => number;
    decreaseValueToStep: (props: any) => any;
    identity: (value: any) => any;
    increaseValueToStep: (props: any) => any;
    trimValue: (max: any, min: any, value: any) => any;
    snapValue: (props: any) => any;
    valueFromTrack: (props: any, wrapperOffset: any, length: any) => any;
};
export default SliderUtil;
