let link = document.getElementsByTagName("img");

const linkColor = function(event) {
    event.target.style.color = "brown";
}

let eventAssignment = function(link) {
    link.onmouseover = function() {
        linkColor(link);
    }
}

link.onmouseover = eventAssignment;
