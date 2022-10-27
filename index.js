function genColors(){
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    document.body.style.backgroundColor = 
    'rgb(' + red + ',' + green + ',' + blue +')';
    document.getElementById("rgbOutput").innerHTML ='rgb(' + red + ',' + green + ',' + blue +')';
}