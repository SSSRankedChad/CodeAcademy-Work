let link = document.getElementsByTagName("figure");

const linkColor = function(event) {
    event.target.style.backgroundColor = "brown";
}

let eventAssignment = function(link) {
    link.onmouseover = function() {
        linkColor(link);
    }
}

link.onmouseover = eventAssignment;