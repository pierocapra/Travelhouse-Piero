const checkbox = document.getElementById("navi-toggle");
const about = document.getElementById("about");
const features = document.getElementById("features");
const tours = document.getElementById("tours");
const stories = document.getElementById("stories");
const book = document.getElementById("book");

const checkedChange = () => {
  checkbox.checked = false;
};

about.addEventListener("click", checkedChange);
features.addEventListener("click", checkedChange);
tours.addEventListener("click", checkedChange);
stories.addEventListener("click", checkedChange);
book.addEventListener("click", checkedChange);
