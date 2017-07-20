/**
 * Created by Lata Tiwari on 7/20/2017.
 */

let svgImage = (target) => {
    let source, img;
    source = imageUri(target);
    img = new Image();
    img.src = source.canvasUri;
    return source.dataImageUri;

    // target.parentNode.replaceChild(img, target);
};

let imageUri = (target) => {
    let ctx, mycanvas, svg_data, img, child, uri, canvasUri, uriObject;

    for (let i = 0; i < target.childNodes.length; i++) {
        child = target.childNodes[i];
        let cssStyle = window.getComputedStyle(child);
        if( cssStyle ) child.style.cssText = cssStyle.cssText;
    }

    svg_data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + target.width.baseVal.value + '" height="' + target.height.baseVal.value + '">' + target.innerHTML + '</svg>';

    img = new Image();
    img.src = "data:image/svg+xml," + encodeURIComponent(svg_data);
    uri = img.src;


    mycanvas = document.createElement( 'canvas' );
    mycanvas.width = target.width.baseVal.value;
    mycanvas.height = target.height.baseVal.value;
    ctx = mycanvas.getContext( "2d" );
    ctx.drawImage(img, 0, 0);

    canvasUri = mycanvas.toDataURL("image/png");
    uriObject = {
        "dataImageUri" : uri,
        "canvasUri" : canvasUri
    };
    return uriObject;
};

export default svgImage;
