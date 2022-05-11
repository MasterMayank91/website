/*
*   Website 13 
*   Functions
*/

try
{
    let first = document.getElementById("box1");

    let second = document.getElementById("box2");

    let third = document.getElementById("box3");

    let forth = document.getElementById("box4");

    let next = document.getElementById("next_button");

    let icon = document.getElementsByClassName("icon");


    var color1 = "rgba(0,0,0,1)";

    // package1();

    function package1()
    {
        first.style.display = "flex";   // flex
        second.style.display = "none";  // grid
        third.style.display = "none";   // grid
        forth.style.display = "none";   // grid
        
        icon[0].style.backgroundColor = color1;
        icon[1].style.backgroundColor = "transparent";
        icon[2].style.backgroundColor = "transparent";
        icon[3].style.backgroundColor = "transparent";
        icon[4].style.backgroundColor = "transparent";
    }
    function package2()
    {
        first.style.display = "none";
        second.style.display = "grid"; 
        third.style.display = "none";
        forth.style.display = "none";
        
        icon[0].style.backgroundColor = "transparent";
        icon[1].style.backgroundColor = color1;
        icon[2].style.backgroundColor = "transparent";
        icon[3].style.backgroundColor = "transparent";
        icon[4].style.backgroundColor = "transparent";
    }
    function package3()
    {
        first.style.display = "none";
        second.style.display = "none"; 
        third.style.display = "grid";
        forth.style.display = "none";
        
        icon[0].style.backgroundColor = "transparent";
        icon[1].style.backgroundColor = "transparent";
        icon[2].style.backgroundColor = color1;
        icon[3].style.backgroundColor = "transparent";
        icon[4].style.backgroundColor = "transparent";
    }
    function package4()
    {
        first.style.display = "none";
        second.style.display = "none"; 
        third.style.display = "none";
        forth.style.display = "grid";
        
        icon[0].style.backgroundColor = "transparent";
        icon[1].style.backgroundColor = "transparent";
        icon[2].style.backgroundColor = "transparent";
        icon[3].style.backgroundColor = color1;
        icon[4].style.backgroundColor = "transparent";
    }

    // icon[0].addEventListener("click",package1);
    // icon[1].addEventListener("click",package2);
    // icon[2].addEventListener("click",package3);
    // icon[3].addEventListener("click",package4);
    // icon[4].addEventListener("click",function()
    // {
    //     window.open("https://www.wikipedia.org");   
    // });
    // next.addEventListener("click",package2);
}
catch (error)
{
    alert("ERROR : "+error.message);    
}