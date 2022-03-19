function calculateHeight()
{
    let a = document.getElementById("actualHeightID").value;
    let bs = document.getElementById("bodyTypeID").value;

    let p = document.getElementById("shortPersonInDenialID");
    var insult
    
    console.log(p)
    console.log(a)
    console.log(bs)

    if(isNaN(a) || a == "")
    {document.getElementById("outputID").innerHTML = "Height must be a number , you silly sausage"}
    else
    {
      if(p.checked == "true")
      {
        insult = "you short fuck"
      }
      else
      {
        insult = "how's the weather up there"
      }
    text = bs * a
    console.log(text);
    document.getElementById("outputID").innerHTML = text + "cm";
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }