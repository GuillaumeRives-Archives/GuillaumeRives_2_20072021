const activeLinks = document.querySelectorAll(".anchor");

activeLinks.forEach(function(link){
    link.addEventListener("click", event => {
        activeLinks.forEach(function(link){
            link.classList.toggle("active");
        });
    });
});
