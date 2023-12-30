const input = document.querySelector(".input-field");

input.addEventListener("focus", () => {
  input.classList.add("on-focus");
});

input.addEventListener("blur", (e) => {
  const value = e.target.value;
  if (!value) input.classList.remove("on-focus");
});
