
const create

const bonbon = document.createElement("img");
bonbon.src = "chrome-extension://bpipdiepaajdcmdghpnpecihdigijpmg/source/content/shark.gif";
bonbon.alt = "bon bon browser";
bonbon.style.height = "100px";
bonbon.style.width = "100px";
bonbon.style.zIndex = "100";
bonbon.style.position = "absolute";
bonbon.style.right = "0";
bonbon.style.bottom = "0";

const hello = document.createElement("h1");
hello.innerHTML = "Hello";
hello.style.zIndex = "10000";

(document.head || document.documentElement).appendChild(bonbon);