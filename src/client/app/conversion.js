/**
 * Created by Lata Tiwari on 7/20/2017.
 */
let renderImage = (target) => {
    let img, newImage, count = 1;
    img = new Image();
    img.id = "charts-png";
    img.src = createImage(target);
    target.parentNode.replaceChild(img, target);

    img.addEventListener( "load", () => {
        let newSource;
        if ( count === 1 ) {
            img.src = createPng( target, img );
            count = count+1;
            return;
        } else {
            count = count+1;
            return;
        }
    } );
};

let createImage = (target, callback) => {
    let mycanvas, svg_data, img, child, uriObject, canvasUri;
    for (let i = 0; i < target.childNodes.length; i++) {
        child = target.childNodes[i];
        let cssStyle = window.getComputedStyle(child);
        if( cssStyle ) child.style.cssText = cssStyle.cssText;
    }
    svg_data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + target.width.baseVal.value + '" height="' + target.height.baseVal.value + '">' + target.innerHTML + '</svg>';
    img = new Image();
    img.src = "data:image/svg+xml," + encodeURIComponent(svg_data);
    return img.src;

};

let createPng = ( target, img, event ) => {
    let ctx,  mycanvas, canvasUri;
    mycanvas = document.createElement( 'canvas' );
    mycanvas.width = target.width.baseVal.value;
    mycanvas.height = target.height.baseVal.value;
    ctx = mycanvas.getContext( "2d" );
    ctx.drawImage(img, 0, 0);
    canvasUri = mycanvas.toDataURL("image/png");
    return ( canvasUri );
};

export default renderImage;

