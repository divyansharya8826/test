function submit()
{
    var btn = document.getElementById("btn").style;
    btn.background = "blue";
    var img = document.getElementById("img1").style;
    img.display = "none";
}
function result()
{
    const parent = document.getElementById("divi");
    const child = document.createElement("textarea");
    child.placeholder = "The result will appear here";
    child.style.borderRadius = "7px";
    child.style.width = "500px";
    child.style.height = "100%";
    child.style.resize = "vertical";
    parent.appendChild(child);
}