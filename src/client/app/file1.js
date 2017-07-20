/**
 * Created by Lata Tiwari on 7/20/2017.
 */
/**
 * Created by Lata Tiwari on 7/20/2017.
 */
// Takes an SVG element as target converting svg to uri
function svg_to_png_data(target) {
    console.log("----------inisde svg_to_png_data-------target is-------",target);
    let ctx, mycanvas, svg_data, img, child;

    // Flatten CSS styles into the SVG
    for (i = 0; i < target.childNodes.length; i++) {
        console.log("----------inisde for of svg_to_png_data childNode is----",childNodes[i]);

        child = target.childNodes[i];
        let cssStyle = window.getComputedStyle(child); //gives value of all the css eleemnents is a WEBAPI
        if(cssStyle){
            child.style.cssText = cssStyle.cssText; //cssText property sets or returns the contents of a style declaration as a string
        }
    }

    // Construct an SVG image; xmlns is required for image/svg+xml files
    svg_data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + target.offsetWidth +
        '" height="' + target.offsetHeight + '">' + target.innerHTML + '</svg>';

    console.log("----------inisde svg_to_png_data svg_data-------",svg_data);

    img = new Image();  //constructor creates a new HTMLImageElement instance
    img.src = "data:image/svg+xml," + encodeURIComponent(svg_data);

    console.log("----------inisde svg_to_png_data new image is-------",img);


    // Draw the SVG image to a canvas
    mycanvas = document.createElement('canvas');
    mycanvas.width = target.offsetWidth;
    mycanvas.height = target.offsetHeight;
    ctx = mycanvas.getContext("2d");
    ctx.drawImage(img, 0, 0); //draws the image onto the canvas
    console.log("----------inisde svg_to_png_data canvas created is-------",mycanvas);

    // Return the canvas's data
    console.log("----------inisde svg_to_png_data mycanvas.toDataURL('image/png')-------",mycanvas.toDataURL("image/png"));
    console.log("----------inisde svg_to_png_data mycanvas.toDataURL()-------",mycanvas.toDataURL());

    return mycanvas.toDataURL("image/png"); //convert canvas to data uri
}

// Takes an SVG element as target
function svg_to_png_replace(target) {
    console.log("----------inisde svg_to_png_replace-------target is-------",target); //put your svg

    let data, img;
    data = svg_to_png_data(target);
    img = new Image();
    img.src = data;
    console.log("----------inisde svg_to_png_replace-------img is-------",img); //put your svg

    return img;
    // target.parentNode.replaceChild(img, target);
}