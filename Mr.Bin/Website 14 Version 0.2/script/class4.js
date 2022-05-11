/*
*   Website 13 
*   Functions
*/
try
{
    let button = document.getElementsByClassName("button");

    let field = document.getElementsByClassName("field");

    let text = document.getElementsByTagName("textarea");

    var empty = "";

    button[0].onclick = function()
    {
        alert("Dear "+field[0].value+" your Mail is Unsbmitted some probles ");
    }
}
catch (error)
{
    alert("ERROR : "+error.message);
}