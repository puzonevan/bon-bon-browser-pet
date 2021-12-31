

const initializePet = () =>{
    const bonbon = document.createElement("img");
    bonbon.src = "chrome-extension://bpipdiepaajdcmdghpnpecihdigijpmg/assets/animations/shark.gif";
    bonbon.alt = "bon bon browser";
    bonbon.setAttribute("class", "pet");

    return bonbon;
}

const bonbon = initializePet();

const hello = document.createElement("h1");
hello.innerHTML = "Hello";
hello.style.zIndex = "10000";

(document.head || document.documentElement).appendChild(bonbon);