export const a = () => {
    const btn = document.querySelector(".btn");
    const some = document.querySelector(".something");

    return btn.addEventListener("click", () => {
    some.style.display = "none";
    });
}

