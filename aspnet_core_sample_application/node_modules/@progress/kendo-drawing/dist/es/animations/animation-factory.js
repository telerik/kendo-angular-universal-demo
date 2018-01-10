import Animation from './animation';
import { Class } from '../common';

var AnimationFactory = (function (Class) {
    function AnimationFactory() {
        Class.call(this);

        this._items = [];
    }

    if ( Class ) AnimationFactory.__proto__ = Class;
    AnimationFactory.prototype = Object.create( Class && Class.prototype );
    AnimationFactory.prototype.constructor = AnimationFactory;

    AnimationFactory.prototype.register = function register (name, type) {
        this._items.push({
            name: name,
            type: type
        });
    };

    AnimationFactory.prototype.create = function create (element, options) {
        var items = this._items;
        var match;

        if (options && options.type) {
            var type = options.type.toLowerCase();
            for (var i = 0; i < items.length; i++) {
                if (items[i].name.toLowerCase() === type) {
                    match = items[i];
                    break;
                }
            }
        }

        if (match) {
            return new match.type(element, options);
        }
    };

    return AnimationFactory;
}(Class));

AnimationFactory.current = new AnimationFactory();

Animation.create = function(type, element, options) {
    return AnimationFactory.current.create(type, element, options);
};

export default AnimationFactory;
//# sourceMappingURL=animation-factory.js.map
