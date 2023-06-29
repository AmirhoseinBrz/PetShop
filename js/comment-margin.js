var element = document.querySelectorAll(".user-comment");
baseMargin = 40;
element.forEach((param) => {
  for (i = 1; i < param.children.length; i++) {
    var box = param.children[i];
    var margin = baseMargin * i;
    box.style.marginRight = margin + "px";
  }
});
