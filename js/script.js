window.onload = function() {
  var mobileLinks = document.getElementById('main-nav-bar-hidden');
  var mobileIcon = document.getElementById('nav-toggle');
  var mobileLinksA = document.getElementsByClassName('hidden-link')

  function mobileMenuCloseOpen(e) {
    if (e.target != mobileLinks ) {
      mobileLinks.style.display = 'none';
    }

    if (e.target == mobileIcon) {
      mobileLinks.style.display = 'flex';
    }
  }

  window.onclick = function(event) {
    mobileMenuCloseOpen(event);
  }
}
