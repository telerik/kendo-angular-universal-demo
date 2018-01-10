import PathNode from './path-node';
import NODE_MAP from './node-map';
import { createPromise } from '../util';

var ImageNode = (function (PathNode) {
    function ImageNode(srcElement, cors) {
        PathNode.call(this, srcElement);

        this.onLoad = this.onLoad.bind(this);
        this.onError = this.onError.bind(this);

        this.loading = createPromise();

        var img = this.img = new Image();

        if (cors && !(/^data:/i.test(srcElement.src()))) {
            img.crossOrigin = cors;
        }

        img.src = srcElement.src();

        if (img.complete) {
            this.onLoad();
        } else {
            img.onload = this.onLoad;
            img.onerror = this.onError;
        }
    }

    if ( PathNode ) ImageNode.__proto__ = PathNode;
    ImageNode.prototype = Object.create( PathNode && PathNode.prototype );
    ImageNode.prototype.constructor = ImageNode;

    ImageNode.prototype.renderTo = function renderTo (ctx) {
        if (this.loading.state() === "resolved") {
            ctx.save();

            this.setTransform(ctx);
            this.setClip(ctx);

            this.drawImage(ctx);

            ctx.restore();
        }
    };

    ImageNode.prototype.optionsChange = function optionsChange (e) {
        if (e.field === "src") {
            this.loading = createPromise();
            this.img.src = this.srcElement.src();
        } else {
            PathNode.prototype.optionsChange.call(this, e);
        }
    };

    ImageNode.prototype.onLoad = function onLoad () {
        this.loading.resolve();
        this.invalidate();
    };

    ImageNode.prototype.onError = function onError () {
        this.loading.reject(new Error(
            "Unable to load image '" + this.img.src +
            "'. Check for connectivity and verify CORS headers."
        ));
    };

    ImageNode.prototype.drawImage = function drawImage (ctx) {
        var rect = this.srcElement.rect();
        var topLeft = rect.topLeft();

        ctx.drawImage(
            this.img, topLeft.x, topLeft.y, rect.width(), rect.height()
        );
    };

    return ImageNode;
}(PathNode));

NODE_MAP.Image = ImageNode;

export default ImageNode;
//# sourceMappingURL=image-node.js.map
