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

    // Activity selector
    const activityWrapper = document.createElement("div");
    activityWrapper.className = "activity-selector";
    
    const activityBtn = document.createElement("button");
    activityBtn.className = "menu-btn";
    activityBtn.textContent = "Select an activity";
    
    const activityList = document.createElement("div");
    activityList.className = "activity-list hidden";
    
    // Example activities — replace with your real ones
    ["Choose an activity.", "Sprints"].forEach(name => {
        const item = document.createElement("div");
        item.className = "activity-item";
        item.textContent = name;
        activityList.appendChild(item);
    });
    
    activityWrapper.appendChild(activityBtn);
    activityWrapper.appendChild(activityList);
    
    // Add to button stack
    btnContainer.appendChild(activityWrapper);


    // Activity selector interactions
activityBtn.addEventListener("click", () => {
    activityList.classList.toggle("hidden");
});

activityList.addEventListener("click", e => {
    if (e.target.classList.contains("activity-item")) {
        activityBtn.textContent = e.target.textContent;
        activityList.classList.add("hidden");
    }
});
    
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
    
    const handle = document.createElement("div");
    handle.className = "notes-handle"; // you style this yourself
    
    notesBar.appendChild(handle);


    // Assemble
    container.appendChild(topBar);
    container.appendChild(title);
    container.appendChild(robot);
    container.appendChild(btnContainer);
    container.appendChild(notesBar);

    app.appendChild(container);
}
