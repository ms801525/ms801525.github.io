function myClick(){
    window.location.href = "aboutme.html";
}
function github(){
    window.location.href = "https://github.com/ms801525/ms801525";
}
function githubfooter(){
    window.location.href = "https://github.com/ms801525";
}
function back(){
    window.location.href = "index.html";
}
function email(){
    window.location.href = "mailto: ms801525@dal.ca";
}
function linkedIn(){
    window.location.href = "https://www.linkedin.com/in/mustafa-ali-8b03a3181/";
}

function copytoClip(){
   var copy =  document.getElementById("copyclip");

    copy.select();

    navigator.clipboard.writeText(copy.value);

    var copyEmail = document.getElementById("copyEmail");
    copyEmail.innerHTML = "Copied!";
}

