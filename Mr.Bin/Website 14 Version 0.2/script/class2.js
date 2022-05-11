/*
*   Website 13 
*   Functions
*/
try
{
    var image = [
        "y3.png",
        "y6.png",
        "y13.png",
        "y19.png",
        "y20.png",
        "y21.png",
        "y23.png",
        "y25.jpg",
        "y31.png",
        "y32.png",
        "y33.png",
        "y44.png",
        "y48.png",
        "y52.png"
    ];

    image.forEach(i => {
        document.write("<a href='image/Desgin/"+i+"'>")
        document.write("<img src='image/Desgin/"+i+"'></a>");
    });
}
catch (error)
{
    alert("ERROR : "+error.message);
}