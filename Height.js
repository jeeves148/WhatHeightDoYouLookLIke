function calculateHeight()
{
    let bsNum = ""
    let a = document.getElementById("actualHeightID").value;
    let bs = document.getElementById("bodyTypeID").value;
    console.log(a)
    console.log(bs)

    if(isNaN(a)){
        a = a;
    }
    else{
        text = "Height must be a number , dipshit";
    }

    if(bs = "Triangle")
    {bsNum = 1}
    else if(bs = "Square")
    {bsNum = 0.7 ; console.log("Square")}
    else if(bs = "LongTriangle")
    {bsNum = 1.3}

    text = toString(bsNum * a)
    console.log(text);
    text = document.getElementById("outputID"); 

}