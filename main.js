const siderItems = document.getElementsByClassName("item");

[...siderItems].forEach((item) => {
  if (item.href == window.location.href) item.classList.add("active");
});
