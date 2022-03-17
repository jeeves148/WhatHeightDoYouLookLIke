function calculateHeight()
{
    let a = document.getElementById("actualHeightID").value;
    let bs = document.getElementById("bodyTypeID").value;
    console.log(a)
    console.log(bs)
    
    text = bs * a
    console.log(text);
    document.getElementById("outputID").innerHTML = text + "cm";

}