// src/ui/screens/mainMenu.js

export function renderMainMenu() {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const container = document.createElement("div");
    container.className = "main-menu";

    // Top bar
    const topBar = document.createElement("div");
    topBar.className = "top-bar";

    const logoutBtn = document.createElement("button");
    logoutBtn.className = "logout-btn";
    logoutBtn.textContent = "Logout";

    const genderToggle = document.createElement("button");
    genderToggle.className = "gender-toggle";
    genderToggle.textContent = "♂"; // placeholder

    topBar.appendChild(logoutBtn);
    topBar.appendChild(genderToggle);

    // Title
    const title = document.createElement("h1");
    title.className = "main-title";
    title.textContent = "MIRROR PERFECTION";

    // Robot placeholder
    const robot = document.createElement("div");
    robot.className = "robot-placeholder";
    robot.textContent = "ROBOT";

    // Buttons container
    const btnContainer = document.createElement("div");
    btnContainer.className = "button-stack";

    const activityBtn = document.createElement("button");
    activityBtn.className = "menu-btn";
    activityBtn.textContent = "Select an activity.";

    const importBtn = document.createElement("button");
    importBtn.className = "menu-btn";
    importBtn.textContent = "Import video (mp4, mov, mkv)";

    const startBtn = document.createElement("button");
    startBtn.className = "start-btn";
    startBtn.textContent = "START";

    btnContainer.appendChild(activityBtn);
    btnContainer.appendChild(importBtn);
    btnContainer.appendChild(startBtn);

    // Notes bar
    const notesBar = document.createElement("div");
    notesBar.className = "notes-bar";
    notesBar.innerHTML = `NOTES <span class="arrow">↑</span>`;

    // Assemble
    container.appendChild(topBar);
    container.appendChild(title);
    container.appendChild(robot);
    container.appendChild(btnContainer);
    container.appendChild(notesBar);

    app.appendChild(container);
}
