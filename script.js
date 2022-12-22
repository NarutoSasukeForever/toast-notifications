const notifications = document.querySelector(".notifications");
buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    success:  {
        icon: "fa-circle-check",
        text: "Success: This is a success toast.",
    },
    error:  {
        icon: "fa-xmark",
        text: "Error: This is an error toast.",
    },
    warning:  {
        icon: "fa-triangle-exclamation",
        text: "Warning: This is a warning toast.",
    },
    info:  {
        icon: "fa-circle-info",
        text: "Info: This is an information toast.",
    },
}

const createToast = (id) => {
    //Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li"); // creating a new li element for the toast
    toast.className = `toast ${id}`; //setting the classes for the toast
    //Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                        <i class="fa-solid ${icon}"></i>
                        <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark"></i>`;
    notifications.appendChild(toast); //append the toat to the notification ul
}


// Adding a click event listener to each button to create a toast when clicked
buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});