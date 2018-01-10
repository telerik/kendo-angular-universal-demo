import Rect from "./rect";
import AlignStrategy from "./align-strategy";

interface AlignSettings {
    anchorRect: Rect;
    anchorAlign: AlignStrategy;
    elementRect: Rect;
    elementAlign: AlignStrategy;
}

export default AlignSettings;
