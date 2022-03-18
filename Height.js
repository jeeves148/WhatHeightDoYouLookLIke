function calculateHeight()
{
    let a = document.getElementById("actualHeightID").value;
    let bs = document.getElementById("bodyTypeID").value;
    console.log(a)
    console.log(bs)

    if(isNaN(a) || a == "")
    {document.getElementById("outputID").innerHTML = "Height must be a number , you silly sausage"}
    else
    {
    text = bs * a
    console.log(text);
    document.getElementById("outputID").innerHTML = text + "cm";
    }
}