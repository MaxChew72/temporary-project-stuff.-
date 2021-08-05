var timeout;
function load() {
    timeout = setTimeout(showPage, 3000);
}
            
function showPage() {
    document.getElementById("myDiv").style.display = "block";
}
