import { defined } from '../util';

var GRADIENT = "Gradient";

var Paintable = {
    extend: function(proto) {
        proto.fill = this.fill;
        proto.stroke = this.stroke;
    },

    fill: function(color, opacity) {
        var options = this.options;

        if (defined(color)) {
            if (color && color.nodeType !== GRADIENT) {
                var newFill = {
                    color: color
                };
                if (defined(opacity)) {
                    newFill.opacity = opacity;
                }
                options.set("fill", newFill);
            } else {
                options.set("fill", color);
            }

            return this;
        }

        return options.get("fill");
    },

    stroke: function(color, width, opacity) {
        if (defined(color)) {
            this.options.set("stroke.color", color);

            if (defined(width)) {
                this.options.set("stroke.width", width);
            }

            if (defined(opacity)) {
                this.options.set("stroke.opacity", opacity);
            }

            return this;
        }

        return this.options.get("stroke");
    }
};

export default Paintable;
//# sourceMappingURL=paintable.js.map
