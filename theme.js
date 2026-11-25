const root = document.documentElement;
const themeStorageKey = "gee-theme";

if (localStorage.getItem(themeStorageKey) === "dark") {
    root.dataset.theme = "dark";
}

const nav = document.querySelector("nav");

if (nav) {
    const button = document.createElement("button");
    button.className = "theme-toggle";
    button.type = "button";
    button.innerHTML = `
        <svg class="moon-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z"></path>
        </svg>
        <svg class="sun-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path>
        </svg>
    `;

    const updateButton = () => {
        const isDark = root.dataset.theme === "dark";
        button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
        button.setAttribute("aria-pressed", String(isDark));
        button.title = `Switch to ${isDark ? "light" : "dark"} mode`;
    };

    button.addEventListener("click", () => {
        const isDark = root.dataset.theme !== "dark";
        root.dataset.theme = isDark ? "dark" : "light";
        localStorage.setItem(themeStorageKey, isDark ? "dark" : "light");
        updateButton();
    });

    updateButton();
    nav.append(button);
}
