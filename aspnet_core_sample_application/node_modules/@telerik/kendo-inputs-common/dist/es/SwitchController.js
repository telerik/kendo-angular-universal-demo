import Model from './SwitchModel';

var DEFAULT_THRESHOLD = 5;

var noop = function () { /*noop*/ };

var SwitchController = function SwitchController(updateView, onChange) {
    var this$1 = this;
    if ( updateView === void 0 ) updateView = noop;
    if ( onChange === void 0 ) onChange = noop;

    this.handlePosition = 0;
    this.wrapperOffset = 0;
    this.handleOffset = 0;
    this.handleMargin = 4;

    this.updateView = updateView;
    this.onChange = onChange;

    this.change = function (checked) {
        this$1.checked = checked;

        this$1.updateView(this$1.updateModel(checked ? this$1.constrain : 0));

        this$1.onChange(checked);
    };

    this.limit = function (value) {
        if (value > this$1.constrain) {
            return this$1.constrain;
        }

        if (value < 0) {
            return 0;
        }

        return value;
    };

    this.addAnimation = function (model) {
        if (model.transition === true) {
            model.transition = 'all 200ms ease-out';
        } else {
            model.transition = 'none';
        }
        return model;
    };

    this.onPress = function (ref) {
        var pageX = ref.pageX;

        this$1.lastPressX = this$1.originalPressX = pageX;
    };

    this.onRelease = function (ref) {
        var pageX = ref.pageX;

        var delta = Math.abs(this$1.originalPressX - pageX);
        var snapPoint = this$1.constrain / 2;
        var checked = delta < DEFAULT_THRESHOLD ? !this$1.checked : this$1.handlePosition > snapPoint;

        this$1.change(checked);
    };

    this.onDrag = function (ref) {
        var pageX = ref.pageX;

        var ref$1 = this$1.coords;
        var left = ref$1.left;
        var right = ref$1.right;
        var overElement = pageX > left && pageX < right;

        if (overElement) {
            var delta = this$1.reverse ? this$1.lastPressX - pageX : pageX - this$1.lastPressX;
            var position = this$1.limit(this$1.handlePosition + delta);

            this$1.lastPressX = pageX;
            this$1.handlePosition = position;
            this$1.updateView(this$1.updateModel(this$1.handlePosition));
        }
        if (pageX > right) {
            this$1.updateView(this$1.updateModel(this$1.reverse ? 0 : this$1.constrain));
        }

        if (pageX < left) {
            this$1.updateView(this$1.updateModel(this$1.reverse ? 0 : this$1.constrain));
        }
    };
};

var prototypeAccessors = { constrain: {} };

prototypeAccessors.constrain.get = function () {
    return this.wrapperOffset - this.handleOffset - this.handleMargin;
};

SwitchController.prototype.updateState = function updateState (ref) {
        var wrapperOffset = ref.wrapperOffset;
        var handleOffset = ref.handleOffset;
        var checked = ref.checked;
        var animate = ref.animate; if ( animate === void 0 ) animate = true;
        var coords = ref.coords;
        var handleMargin = ref.handleMargin;
        var reverse = ref.reverse;

    this.wrapperOffset = wrapperOffset;
    this.handleOffset = handleOffset;
    this.coords = coords;
    this.handleMargin = handleMargin;

    this.checked = checked;
    this.reverse = reverse;

    this.updateView(this.updateModel(checked ? this.constrain : 0, animate));
};

SwitchController.prototype.updateModel = function updateModel (position, animate) {
        if ( animate === void 0 ) animate = true;

    var pos = this.reverse ? this.wrapperOffset / 2 - position : position;
    return new Model(pos, animate);
};

Object.defineProperties( SwitchController.prototype, prototypeAccessors );

export default SwitchController;

//# sourceMappingURL=SwitchController.js.map
