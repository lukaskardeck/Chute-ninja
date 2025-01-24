let novoJogo = document.querySelector("button");

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        novoJogo.click();
    }
});