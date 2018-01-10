
export default function renderPath(ctx, path) {
    var segments = path.segments;

    if (segments.length === 0) {
        return;
    }

    var segment = segments[0];
    var anchor = segment.anchor();
    ctx.moveTo(anchor.x, anchor.y);

    for (var i = 1; i < segments.length; i++) {
        segment = segments[i];
        anchor = segment.anchor();

        var prevSeg = segments[i - 1];
        var prevOut = prevSeg.controlOut();
        var controlIn = segment.controlIn();

        if (prevOut && controlIn) {
            ctx.bezierCurveTo(prevOut.x, prevOut.y,
                              controlIn.x, controlIn.y,
                              anchor.x, anchor.y);
        } else {
            ctx.lineTo(anchor.x, anchor.y);
        }
    }

    if (path.options.closed) {
        ctx.closePath();
    }
}
//# sourceMappingURL=render-path.js.map
