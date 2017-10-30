window.onload = function() {
  const MOBILE = window.matchMedia("(max-width: 720px)");

  //navigational javascript
  var mobileLinks = document.getElementById('main-nav-bar-hidden');
  var mobileIcon = document.getElementById('nav-toggle');
  var mobileIconPadding = document.getElementById('nav-toggle-area');
  var mobileLinksA = document.getElementsByClassName('hidden-link');
  var closeMobileNav = document.getElementById("close-nav");
  var searchToggle = document.getElementById("search-toggle")

  var deleteItemLogo = document.getElementsByClassName('delete-item');

  function hideMobileLinks(e) {
    if (e.target != mobileLinks ) {
      hideMobileLinksAction();
    }
  }

  function showMobileLinks() {
    mobileLinks.style.display = 'flex';
  }

  function hideMobileLinksAction() {
    mobileLinks.style.display = 'none';
  }

  function checkMobileScreen() {
    if (MOBILE.matches) {
      /*close nav
        - placed here so that the nav closes by default when resized
      */
      hideMobileLinksAction();
      mobileIcon.addEventListener("click", showMobileLinks);
      closeMobileNav.addEventListener("click", hideMobileLinks);

    } else {
      /*
        - when screen reverts back to desktop, reverts to default sizes
      */

      mobileLinks.style.display = 'flex';
      mobileIcon.removeEventListener("click", showMobileLinks);
    }
  }


  // TODO: re-implement default width and margin size of menu and content divs
  checkMobileScreen();
  window.onresize = function() {
    checkMobileScreen();
  }
}
