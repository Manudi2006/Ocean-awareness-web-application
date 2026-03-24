function toggleDetails(studentId){
    let details = document.getElementById(studentId)
    details.classList.toggle("show")
    let img =details.previousElementSibling;
    let isExpanded = img.getAttribute("aria-expanded") === "true";
    img.setAttribute("aria-expanded", !isExpanded);
}
function handleKeyPress (event,studentId){
    if (event.key ==="Enter" || event.key ===" "){
        toggleDetails(studentId);
    }
}