console.log("Hello Worlds");

const bonbon = document.createElement("img");
bonbon.src = "chrome-extension://bpipdiepaajdcmdghpnpecihdigijpmg/source/content/shark.gif";
bonbon.alt = "bon bon browser";
bonbon.style.height = "100px";
bonbon.style.width = "100px";

const hello = document.createElement("h1");
hello.innerHTML = "Hello";
hello.style.zIndex = "100";

(document.head || document.documentElement).appendChild(bonbon);