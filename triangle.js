// function triangle(){
//     const base=document.getElementById("triangle-base");
//     const height=document.getElementById("triangle-height");
//     const a=base.value;
//     const ba=parseFloat(a);
//     const b=height.value;
//     const bb=parseFloat(b);
//     const area=document.getElementById("area");
//     const triangle=0.5*ba*bb;
//     const trg=triangle.toFixed(2);
//     if (isNaN(triangle)) {
//         area.innerText=0;
//     }
//     else{
//         area.innerText=trg;
//     } 
//     base.value="";
//     height.value="";
// }
function triangle(){
    const base=getInputFieldId("triangle-base");
    const height=getInputFieldId("triangle-height");
    const area=0.5*base*height;
    innerTextArea("area",area);
}
function innerTextArea(elementId,area){
    const element=document.getElementById(elementId);
    if (isNaN(area)) {
        element.innerText=0;
    }
    else{
        element.innerText=area;
    } 
}
function getInputFieldId(idValue){
    const getId=document.getElementById(idValue);
    const innerValue=getId.value;
    const floatValue=parseFloat(innerValue);
    return floatValue;
}
function rectangle(){
    const width=getInputFieldId("width");
    const length=getInputFieldId("length");
    const area=width*length;
    innerTextArea("rectangle", area)
}
// function rectangle(){
//     const width=document.getElementById("width");
//     const length=document.getElementById("length");
//     const w=width.value;
//     const l=length.value;
//     const ww=parseFloat(w);
//     const ll=parseFloat(l);
//     const area=document.getElementById("rectangle");
//     const rectangle=ww*ll;
//     if (isNaN(rectangle)){
//         area.innerText=0;
//     }
//     else{
//         area.innerText=rectangle.toFixed(2);
//     }
//     width.value="";
//     length.value="";
// }
// function parallelogram(){
//     const base=document.getElementById("parabase").value;
//     const height=document.getElementById("paraheight").value;
//     const b=parseFloat(base);
//     const h=parseFloat(height);
//     const parallelogram=document.getElementById("parallelogram");
//     const area=(b*h).toFixed(2);
//     if (isNaN(area)){
//         parallelogram.innerText=0;
//     }
//     else{
//         parallelogram.innerText=area;
//     }
// }
function parallelogram(){
    const width=getInputFieldId("parabase");
    const length=getInputFieldId("paraheight");
    const area=width*length;
    innerTextArea("parallelogram", area)
}
function rhombus(){
    const dim1=document.getElementById("dim1").value;
    const dim2=document.getElementById("dim2").value;
    const d1=parseFloat(dim1);
    const d2=parseFloat(dim2); 
    const area=0.5*d1*d2;
    const rhombus=document.getElementById("rhombus");
    if (isNaN(area)){
        rhombus.innerText=0;
    }
    else{
        rhombus.innerText=area.toFixed(2);
    }
}
function pentagon(){
    const pp=document.getElementById("pentagon-p").value;
    const p=parseFloat(pp);
    const bb=document.getElementById("pentagon-b").value;
    const b=parseFloat(bb);
    const area=0.5*p*b;
    const pentagon=document.getElementById("pentagon");
    if (isNaN(area)){
        pentagon.innerText = 0;
    }
    else{
        pentagon.innerText = area.toFixed(2);
    }
}
function ellipse(){
    const aa=document.getElementById("ellipse-a").value;
    const a=parseFloat(aa);
    const bb=document.getElementById("ellipse-b").value;
    const b=parseFloat(bb);
    const area=Math.PI*a*b;
    const ellipse=document.getElementById("ellipse");
    if (isNaN(area)){
        ellipse.innerText = 0;
    }
    else{
        ellipse.innerText = area.toFixed(2);
    }
    

}
