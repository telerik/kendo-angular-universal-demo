var Model = function Model(value, animate) {
    if ( value === void 0 ) value = 0;

    this.handle = {
        transform: 'translateX(' + value + 'px)',
        transition: animate
    };
};

export default Model;

//# sourceMappingURL=SwitchModel.js.map
