import * as easingFunctions from './easing-functions';
import { limitValue } from '../util';
import { animationFrame, Class } from '../common';

var now = Date.now || function() {
    return new Date().getTime();
};

var Animation = (function (Class) {
    function Animation(element, options) {
        Class.call(this);

        this.options = Object.assign({}, this.options, options);
        this.element = element;
    }

    if ( Class ) Animation.__proto__ = Class;
    Animation.prototype = Object.create( Class && Class.prototype );
    Animation.prototype.constructor = Animation;

    Animation.prototype.setup = function setup () {};
    Animation.prototype.step = function step () {};

    Animation.prototype.play = function play () {
        var this$1 = this;

        var options = this.options;
        var duration = options.duration;
        var delay = options.delay; if ( delay === void 0 ) delay = 0;
        var easing = easingFunctions[options.easing];
        var start = now() + delay;
        var finish = start + duration;

        if (duration === 0) {
            this.step(1);
            this.abort();
        } else {
            setTimeout(function () {
                var loop = function () {
                    if (this$1._stopped) {
                        return;
                    }

                    var wallTime = now();

                    var time = limitValue(wallTime - start, 0, duration);
                    var position = time / duration;
                    var easingPosition = easing(position, time, 0, 1, duration);

                    this$1.step(easingPosition);

                    if (wallTime < finish) {
                        animationFrame(loop);
                    } else {
                        this$1.abort();
                    }
                };

                loop();
            }, delay);
        }
    };

    Animation.prototype.abort = function abort () {
        this._stopped = true;
    };

    Animation.prototype.destroy = function destroy () {
        this.abort();
    };

    return Animation;
}(Class));

Animation.prototype.options = {
    duration: 500,
    easing: "swing"
};

export default Animation;
//# sourceMappingURL=animation.js.map
