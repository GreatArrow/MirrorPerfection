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

    const activityDropdown = document.createElement("div");
    activityDropdown.className = "custom-dropdown";
    
    const selected = document.createElement("div");
    selected.className = "dropdown-selected";
    selected.textContent = "Select an activity";
    
    const menu = document.createElement("div");
    menu.className = "dropdown-menu";
    
    ["Sprint", "Pushup"].forEach(name => {
        const item = document.createElement("div");
        item.className = "dropdown-item";
        item.textContent = name;
        item.onclick = () => {
            selected.textContent = name;
            menu.classList.remove("open");
        };
        menu.appendChild(item);
    });

    selected.onclick = () => {
        menu.classList.toggle("open");
    };
    
    activityDropdown.appendChild(selected);
    activityDropdown.appendChild(menu);
    
    ["Sprint", "Pushup"].forEach(name => {
        const opt = document.createElement("option");
        opt.value = name.toLowerCase();
        opt.textContent = name;
        activityDropdown.appendChild(opt);
    });
    
    const importBtn = document.createElement("button");
    importBtn.className = "menu-btn";
    importBtn.textContent = "Import video (mp4, mov, mkv)";

    const startBtn = document.createElement("button");
    startBtn.className = "start-btn";
    startBtn.textContent = "START";

    btnContainer.appendChild(activityDropdown);
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
