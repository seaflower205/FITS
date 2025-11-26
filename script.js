// Lấy element cần thao tác
const sidebar = document.querySelector(".sidebar");
const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

// --- TOGGLE SIDEBAR ---
function toggleSidebar() {
  sidebar.classList.toggle("collapsed");
}

// Click vào chữ F trong sidebar
toggleSidebarBtn.addEventListener("click", toggleSidebar);

// Nhấn phím F / f ở bất kỳ đâu (trừ khi đang gõ trong input/textarea)
document.addEventListener("keydown", (event) => {
  const activeTag = document.activeElement.tagName;
  const typingInInput =
    activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT";

  if (typingInInput) return;

  if (event.key === "f" || event.key === "F") {
    event.preventDefault();
    toggleSidebar();
  }
});

// --- TOGGLE THEME (TRẮNG / ĐEN) ---
function toggleTheme() {
  const body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
}

// Click nút đổi theme
toggleThemeBtn.addEventListener("click", toggleTheme);
