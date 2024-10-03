const mcstuff = document.getElementById("mcstuff");
document.addEventListener("mousemove", e => {
    const x = e.clientX;
    const y = e.clientY;
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    const offsetX = ((x - middleX) / middleX) * 10;
    const offsetY = ((y - middleY) / middleY) * 10;
    mcstuff.style.transform = `perspective(5000px) rotateX(${-1 * offsetY}deg) rotateY(${offsetX}deg)`;
    for (let i = 0; i < mcstuff.children.length; i++) {
        mcstuff.children[i].style.boxShadow = `${-1 * offsetX}px ${-1 * offsetY}px 10px black`;
    };
});

document.addEventListener("mouseleave", e => {
    if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
        mcstuff.style.transition = "all 0.5s ease-out";
        for (let i = 0; i < mcstuff.children.length; i++) {
            mcstuff.children[i].style.transition = "all 0.5s ease-out";
        };
        mcstuff.style.transform = "perspective(5000px)";
        for (let i = 0; i < mcstuff.children.length; i++) {
            mcstuff.children[i].style.boxShadow = "0px 0px 10px black";
        };
    };
});

document.addEventListener("contextmenu", e => {
    e.preventDefault()
});

document.addEventListener("mouseenter", e => {
    mcstuff.style.transition = "all 0.2s ease-out";
    for (let i = 0; i < mcstuff.children.length; i++) {
        mcstuff.children[i].style.transition = "all 0.2s ease-out";
    };
});

function goHome() {
    window.location.href = "ghostjusr.github.io";
}

async function downloadStuff(filetype, filename) {
    try {
        let fileext = "";
        if (filetype != "skript" && filetype != "datapack") {
            console.error("Invalid file type for downloading.");
        } else if (filetype == "skript") {
            fileext = "sk";
        } else if (filetype == "datapack") {
            fileext = "zip";
        };
        const response = await fetch(`files/${filetype}s/${filename}.${fileext}`);
        const text = await response.text();

        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'lifesteal.sk';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error fetching the file:', error);
    };
};
