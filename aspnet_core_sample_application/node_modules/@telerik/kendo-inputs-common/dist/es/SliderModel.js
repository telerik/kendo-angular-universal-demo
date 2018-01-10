import SliderUtil from './SliderUtil';

var SliderModel = function SliderModel(props, wrapper, track) {
    this.props = props;
    this.wrapper = wrapper;
    this.track = track;
    this.tickSizes = this.getTickSizes();
};

SliderModel.prototype.getTickSizes = function getTickSizes () {
    var ref = this.props;
        var max = ref.max;
        var min = ref.min;
        var smallStep = ref.smallStep;
    var trackWidth = this.trackWidth();

    return SliderUtil.calculateTickSizes(trackWidth, min, max, smallStep);
};

SliderModel.prototype.trackWidth = function trackWidth () {
    if (this.props.fixedTickWidth) {
        return SliderUtil.calculateFixedTrackSize(this.props);
    }

    return SliderUtil.calculateTrackSize(
        this.elementSize(this.wrapper),
        this.elementOffset(this.track),
        this.props.buttons
    );
};

SliderModel.prototype.resizeTrack = function resizeTrack () {
    var orientation = this.props.vertical ? 'height' : 'width';
    var trackWidth = this.trackWidth();

    this.track.style[orientation] = trackWidth + "px";
};

SliderModel.prototype.resizeTicks = function resizeTicks (ticksContainer, ticks) {
        var this$1 = this;

    var dimension = this.props.vertical ? "height" : "width";

    Array.prototype.slice.call(ticks).map(function (tick, index) { return tick.style[dimension] = (this$1.tickSizes[index]) + "px"; });

    if (this.props.vertical) {
        this.adjustPadding(ticksContainer);
    }
};

SliderModel.prototype.resizeWrapper = function resizeWrapper () {
    var dimension = this.props.vertical ? "height" : "width";
    var wrapperSize = this.elementSize(this.wrapper);
    var trackWidth = SliderUtil.calculateTrackSize(wrapperSize, this.elementOffset(this.track));
    var fixedTrackWidth = SliderUtil.calculateFixedTrackSize(this.props);

    if (trackWidth > fixedTrackWidth) {
        this.wrapper.parentElement.style[dimension] = (wrapperSize - (trackWidth - fixedTrackWidth)) + "px";
    } else {
        this.wrapper.parentElement.style[dimension] = (wrapperSize + (fixedTrackWidth - trackWidth)) + "px";
    }
};

SliderModel.prototype.positionHandle = function positionHandle (dragHandle) {
    var ref = this.props;
        var max = ref.max;
        var min = ref.min;
        var reverse = ref.reverse;
        var vertical = ref.vertical;
    var position = vertical ? 'bottom' : 'left';
    var trackWidth = this.trackWidth();
    var value = SliderUtil.trimValue(max, min, this.props.value);

    this.handlePosition = SliderUtil.calculateHandlePosition({
        min: min,
        max: max,
        reverse: reverse,
        value: value,
        trackWidth: trackWidth,
        handleWidth: dragHandle.offsetWidth
    });

    dragHandle.style[position] = (this.handlePosition) + "px";
};

SliderModel.prototype.positionSelection = function positionSelection (dragHandle, selection) {
    var ref = this.props;
        var reverse = ref.reverse;
        var vertical = ref.vertical;
    var dimension = vertical ? 'height' : 'width';
    var handleWidth = Math.floor(dragHandle.offsetWidth / 2);
    var size = this.handlePosition + handleWidth;

    if (reverse) {
        size = this.trackWidth() - size;
    }

    selection.style[dimension] = size + "px";
};

SliderModel.prototype.adjustPadding = function adjustPadding (ticksContainer) {
    var totalTickSize = this.tickSizes.reduce(function (prev, curr) { return prev + curr; }, 0);
    var trackWidth = this.trackWidth();
    var reminder = trackWidth - totalTickSize;

    if (reminder !== 0) {
        var padding = reminder + this.elementOffset(this.track);
        ticksContainer.style.paddingTop = padding + "px";
    }
};

SliderModel.prototype.elementOffset = function elementOffset (element) {
    var ref = this.props;
        var vertical = ref.vertical;
    var style = getComputedStyle(element);

    return parseInt(vertical ? style.bottom : style.left, 10);
};

SliderModel.prototype.elementSize = function elementSize (element) {
    var ref = this.props;
        var vertical = ref.vertical;

    return vertical ? element.clientHeight : element.clientWidth;
};

export default SliderModel;

//# sourceMappingURL=SliderModel.js.map
