var acc = document.getElementsByClassName("faqs-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".blog-tab");
  const contents = document.querySelectorAll(".blog-tab-content");

  tabs.forEach(tab => {
      tab.addEventListener("click", function () {
          // Remove active class from all tabs
          tabs.forEach(t => t.classList.remove("active"));
          this.classList.add("active");

          // Hide all tab contents
          contents.forEach(content => content.classList.remove("active"));

          // Show the clicked tab's content
          const tabId = this.getAttribute("data-tab");
          document.getElementById(tabId).classList.add("active");
      });
  });
});
