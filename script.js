function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

function copyCode(id) {
  const codeBlock = document.getElementById(id);
  navigator.clipboard.writeText(codeBlock.textContent).then(() => {
    alert("Code copied!");
  });
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
