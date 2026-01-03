colors = ["purple", "green", "yellow", "orange", "red", "blue"]

function flashingColors () {
    for (let i = 0; i < colors.length; i++) {
    document.getElementById("havel-main").style.backgroundColor === `${colors[i]} / 0.5`;
    }
}

document.getElementById("rainbow-toggle").addEventListener("click", flashingColors)