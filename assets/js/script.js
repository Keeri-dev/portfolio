// DOM INTERACTION
const toggleButton = document.querySelector("#toggle-skills");
const skillsSection = document.querySelector("#skills-section");

if (toggleButton && skillsSection) {
    toggleButton.addEventListener("click", () => {
        skillsSection.classList.toggle("hidden");

        const expanded =
            toggleButton.getAttribute("aria-expanded") === "true";

        toggleButton.setAttribute("aria-expanded", !expanded);

        toggleButton.textContent = expanded
            ? "Show Technical Skills"
            : "Hide Technical Skills";
    });
}

// FORM VALIDATION
const form = document.querySelector("#contact-form");

if (form) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const subjectInput = document.querySelector("#subject");
    const messageInput = document.querySelector("#message");

    const fields = [
        {
            input: nameInput,
            error: document.querySelector("#name-error")
        },
        {
            input: emailInput,
            error: document.querySelector("#email-error")
        },
        {
            input: subjectInput,
            error: document.querySelector("#subject-error")
        },
        {
            input: messageInput,
            error: document.querySelector("#message-error")
        }
    ];

    form.addEventListener("submit", (event) => {
        let valid = true;

        fields.forEach(field => {
            if (field.input.value.trim() === "") {
                field.error.classList.add("show");
                field.input.classList.add("error");
                valid = false;
            }
        });

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            emailInput.value.trim() !== "" &&
            !emailPattern.test(emailInput.value)
        ) {
            emailInput.classList.add("error");
            emailInput.focus();
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });

    fields.forEach(field => {
        field.input.addEventListener("input", () => {
            if (field.input.value.trim() !== "") {
                field.error.classList.remove("show");
                field.input.classList.remove("error");
            }
        });
    });
}