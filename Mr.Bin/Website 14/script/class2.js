/*
*   Website 13 
*   Functions
*/
try
{
    var image = [
        "y6.png",
        "y7.png",
        "y8.png",
        "y11.png",
        "y12.png",
        "y2.png",
        "y13.png",
        "y14.png",
        "y16.png",
        "y17.png",
        "y19.png",
        "y21.png",
        "y22.png",
        "y23.png",
        "y24.png",
        "y26.png",
        "y27.png",
        "y28.png",
        "y31.png",
        "y32.png",
        "y33.png",
        "y34.png",
        "y41.png",
        "y44.png",
        "y45.png",
        "y48.png",
        "y51.png",
        "y52.png",
        "y1.png"
    ];

    image.forEach(i => {
        document.write("<a href='../rtx/Desgin/"+i+"'>")
        document.write("<img src='../rtx/Desgin/"+i+"'></a>");
    });
}
catch (error)
{
    alert("ERROR : "+error.message);
}