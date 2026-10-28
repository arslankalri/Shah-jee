const toggle = document.getElementById("language");
let language = "ja";
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-ja][data-en]").forEach((node) => {
    node.innerHTML = node.dataset[next];
  });
  toggle.textContent = next === "ja" ? "EN" : "日本語";
  toggle.setAttribute("aria-label", next === "ja" ? "Switch to English" : "日本語に切り替え");
}
toggle.addEventListener("click", () => setLanguage(language === "ja" ? "en" : "ja"));
