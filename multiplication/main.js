function gene() {
    localStorage.setItem("from" , document.getElementById("start-number").value);
    localStorage.setItem("to" , document.getElementById("end-number").value);
    localStorage.setItem("operation" , document.getElementById("oper").value);
    window.location="worksheet.html";
}