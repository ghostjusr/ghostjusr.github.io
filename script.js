const bio = document.getElementById("bio");
document.addEventListener("mousemove", e => {
    const x = e.clientX;
    const y = e.clientY;
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    const offsetX = ((x - middleX) / middleX) * 10;
    const offsetY = ((y - middleY) / middleY) * 10;
    bio.style.transform = `perspective(2000px) rotateX(${-1 * offsetY}deg) rotateY(${offsetX}deg)`;
    for (let i = 0; i < bio.children.length; i++) {
        bio.children[i].style.boxShadow = `${-1 * offsetX}px ${-1 * offsetY}px 10px black`;
    };
});

document.addEventListener("mouseleave", e => {
    if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
        bio.style.transition = "all 0.5s ease-out";
        for (let i = 0; i < bio.children.length; i++) {
            bio.children[i].style.transition = "all 0.5s ease-out";
        };
        bio.style.transform = "perspective(2000px)";
        for (let i = 0; i < bio.children.length; i++) {
            bio.children[i].style.boxShadow = "0px 0px 10px black";
        };
    };
});

document.addEventListener("contextmenu", e => {
    e.preventDefault()
});

document.addEventListener("mouseenter", e => {
    bio.style.transition = "all 0.2s ease-out";
    for (let i = 0; i < bio.children.length; i++) {
        bio.children[i].style.transition = "all 0.2s ease-out";
    };
});
