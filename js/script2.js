window.onload = function() {
  const MOBILE = window.matchMedia("(max-width: 720px)");

  //navigational javascript
  var mobileLinks = document.getElementById('main-nav-bar-hidden');
  var mobileIcon = document.getElementById('nav-toggle');
  var mobileIconPadding = document.getElementById('nav-toggle-area');
  var mobileLinksA = document.getElementsByClassName('hidden-link');
  var closeMobileNav = document.getElementById("close-nav");

  //search bar
  var searchToggle = document.getElementById("search-toggle");
  var searchBarForm = document.getElementById('search-bar');
  var searchBar = document.getElementById('search');
  var homeLink = document.getElementById('home-link-icon');
  var closeBar = document.getElementById('close-search');

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

  function searchBarAppear() {
    searchBarForm.style.visibility="visible"

    searchBarForm.style.width = "50%";
    searchBar.style.width = "100%";

    homeLink.style.position = "absolute";
    homeLink.style.right = "60%";
  }

  function resetSearchBarAppear() {
    searchBarForm.style.visibility="hidden"
    searchBarForm.style.width="0";

    homeLink.style.position="static";
    homeLink.style.right = "40%";
  }

  function checkMobileScreen() {
    if (MOBILE.matches) {
      /*close nav
        - placed here so that the nav closes by default when resized
      */
      hideMobileLinksAction();
      mobileIcon.addEventListener("click", showMobileLinks);
      closeMobileNav.addEventListener("click", hideMobileLinks);

      closeBar.style.visiblity ="inline";
      resetSearchBarAppear();
    } else {
      /*
        - when screen reverts back to desktop, reverts to default sizes
      */
      searchBarForm.style.visibility = "visible"
      searchBarForm.style.width = "20%";
      searchBarForm.style.position = "static";
      homeLink.style.position = "static";
      closeBar.style.display ="none";

      mobileLinks.style.display = 'flex';
      mobileIcon.removeEventListener("click", showMobileLinks);
    }
  }

  searchToggle.addEventListener('click', searchBarAppear);
  closeBar.addEventListener('click', resetSearchBarAppear);
  // TODO: re-implement default width and margin size of menu and content divs
  checkMobileScreen();
  window.onresize = function() {
    checkMobileScreen();
  }
}
