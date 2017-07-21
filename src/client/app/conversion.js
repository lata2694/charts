/**
 * Created by Lata Tiwari on 7/20/2017.
 */

let svgImage = (target) => {
    let img;
    img = new Image();
    img.src = imageUri(target);
    target.parentNode.replaceChild(img, target);
    return (img.src);
};

let imageUri = (target) => {
    let mycanvas, svg_data, img, child;
    for (let i = 0; i < target.childNodes.length; i++) {
        child = target.childNodes[i];
        let cssStyle = window.getComputedStyle(child);
        if( cssStyle ) child.style.cssText = cssStyle.cssText;
    }
    svg_data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + target.width.baseVal.value + '" height="' + target.height.baseVal.value + '">' + target.innerHTML + '</svg>';
    img = new Image();
    img.src = "data:image/svg+xml," + encodeURIComponent(svg_data);
    img.id = "chart-image";
    img.onload = onCanvas( target,img );
    return (img.src);
};

let onCanvas = ( target,img ) => {
    let ctx,  mycanvas, canvasUri;
    mycanvas = document.createElement( 'canvas' );
    mycanvas.width = target.width.baseVal.value;
    mycanvas.height = target.height.baseVal.value;
    ctx = mycanvas.getContext( "2d" );
    ctx.drawImage(img, 0, 0);

    canvasUri = mycanvas.toDataURL("image/png");
    console.log("-------------",canvasUri);
};

export default svgImage;
