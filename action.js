function myFunction() {
    var x = document.getElementById("topbar-inner");
    if (x.className === "topbar-inner") {
      x.className += " responsive";
    } else {
      x.className = "topbar-inner";
    }
  }