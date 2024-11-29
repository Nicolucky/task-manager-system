const API_BASE = "/api";

// Utility function for API calls
async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem("token");
  options.headers = {
    ...options.headers,
    "Content-Type": "application/json",
    Authorization: `Bearer ${token || ""}`,
  };
  const response = await fetch(`${API_BASE}${endpoint}`, options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json();
}

// Toggle views
function showView(view) {
  document.getElementById("authContainer").style.display =
    view === "auth" ? "block" : "none";
  document.getElementById("dashboardContainer").style.display =
    view === "dashboard" ? "block" : "none";
}

// Handle Login
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const data = await apiFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    localStorage.setItem("token", data.token);
    loadTasks();
    showView("dashboard");
  } catch (error) {
    alert(error.message);
  }
});

// Handle Registration
document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    try {
      const data = await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
      });
      localStorage.setItem("token", data.token);
      loadTasks();
      showView("dashboard");
    } catch (error) {
      alert(error.message);
    }
  });

// Logout
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  showView("auth");
});

// Load tasks
async function loadTasks() {
  try {
    const tasks = await apiFetch("/tasks");
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = `${task.title} - ${task.description}`;
      taskList.appendChild(li);
    });
  } catch (error) {
    alert(error.message);
  }
}

// Add task
document.getElementById("addTask").addEventListener("click", async () => {
  const title = document.getElementById("taskTitle").value;
  const description = document.getElementById("taskDescription").value;

  try {
    await apiFetch("/tasks", {
      method: "POST",
      body: JSON.stringify({ title, description }),
    });
    loadTasks();
  } catch (error) {
    alert(error.message);
  }
});

// Toggle between Login and Registration views
document.getElementById("showRegister").addEventListener("click", () => {
  document.getElementById("auth").style.display = "none";
  document.getElementById("register").style.display = "block";
});

document.getElementById("showLogin").addEventListener("click", () => {
  document.getElementById("register").style.display = "none";
  document.getElementById("auth").style.display = "block";
});

// On load, check if token exists and load dashboard
if (localStorage.getItem("token")) {
  loadTasks();
  showView("dashboard");
} else {
  showView("auth");
}
