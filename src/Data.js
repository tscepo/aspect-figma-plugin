export class DesignNode {
    constructor(id, name, type, children = [], absoluteRenderBounds, blendMode, bottomLeftRadius, bottomRightRadius, characters, fills, fontName, fontSize, letterSpacing, lineHeight, opacity, paddingLeft, paddingRight, paddingTop, paddingBottom, rotation, strokeAlign, strokeCap, strokeGeometry, strokeJoin, strokeMiterLimit, strokeStyleId, strokeWeight, strokes, textAlignHorizontal, textAlignVertical, textAutoResize, textCase, textDecoration, topLeftRadius, topRightRadius) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.children = children;
        this.absoluteRenderBounds = absoluteRenderBounds;
        this.blendMode = blendMode;
        this.bottomLeftRadius = bottomLeftRadius;
        this.bottomRightRadius = bottomRightRadius;
        this.characters = characters;
        this.fills = fills;
        this.fontName = fontName;
        this.fontSize = fontSize;
        this.letterSpacing = letterSpacing;
        this.lineHeight = lineHeight;
        this.opacity = opacity;
        this.paddingLeft = paddingLeft;
        this.paddingRight = paddingRight;
        this.paddingTop = paddingTop;
        this.paddingBottom = paddingBottom;
        this.rotation = rotation;
        this.strokeAlign = strokeAlign;
        this.strokeCap = strokeCap;
        this.strokeGeometry = strokeGeometry;
        this.strokeJoin = strokeJoin;
        this.strokeMiterLimit = strokeMiterLimit;
        this.strokeStyleId = strokeStyleId;
        this.strokeWeight = strokeWeight;
        this.strokes = strokes;
        this.textAlignHorizontal = textAlignHorizontal;
        this.textAlignVertical = textAlignVertical;
        this.textAutoResize = textAutoResize;
        this.textCase = textCase;
        this.textDecoration = textDecoration;
        this.topLeftRadius = topLeftRadius;
        this.topRightRadius = topRightRadius;
    }
}
