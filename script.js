function mobileMenuActivated() {
    const mobileMenu = document.getElementById('mobile');
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "block";
      }
}
