function copy(e) {
    navigator.clipboard.writeText("#add8e6");
    e.title = "Color code copied";
    alert("Copied Color Code: #add8e6")
}
document.querySelector("#lightBlue").addEventListener("click", copy);