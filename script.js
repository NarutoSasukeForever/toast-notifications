const buttons = document.querySelectorAll(".buttons .btn");

const createToast = (id) => {
    console.log(id);
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});