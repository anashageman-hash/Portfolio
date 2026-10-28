
console.log("Welkom bij de portfolio van Anas!");

const links = document.querySelectorAll(".navbar a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Je klikt op: " + link.textContent);
    });
});
