// Lấy element cần thao tác
const sidebar = document.querySelector(".sidebar");
const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");

// --- THEME INITIALIZATION ---
function initializeTheme() {
  // Ensure body has correct theme class on page load
  const body = document.body;
  if (!body.classList.contains("dark") && !body.classList.contains("light")) {
    // Default to light theme if no theme class exists
    body.classList.add("light");
  }
}

// Initialize theme immediately
initializeTheme();

// --- VIEW SWITCHING ---
function initViewSwitching() {
  const menuItems = document.querySelectorAll(".menu-item[data-view]");
  const views = document.querySelectorAll(".view[data-view]");

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      const targetView = menuItem.getAttribute("data-view");

      // Ẩn tất cả views, hiện view được chọn
      views.forEach((view) => {
        if (view.getAttribute("data-view") === targetView) {
          view.classList.add("active");
        } else {
          view.classList.remove("active");
        }
      });

      // Cập nhật active class trên menu items
      menuItems.forEach((item) => {
        if (item.getAttribute("data-view") === targetView) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });
}

// Gọi hàm khi DOM sẵn sàng
initViewSwitching();

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

document.addEventListener("keydown", (event) => {
  const activeTag = document.activeElement.tagName;
  const typingInInput =
    activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT";

  if (typingInInput) return;

  if (event.key === "l" || event.key === "L") {
    event.preventDefault();
    toggleTheme();
  }
});
