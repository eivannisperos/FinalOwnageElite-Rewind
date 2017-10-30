window.onload = function() {
  //sort-by variables
  var productListing = document.getElementsByClassName('product-listing');
  var action = document.getElementsByClassName('action');
  var thriller = document.getElementsByClassName('thriller');

  var actionbtn = document.getElementById('action-btn');
  var thrillerbtn = document.getElementById('thriller-btn');

    //sort by functions
    function showAction() {
      for (var i = 0; i < productListing.length; i++) {
        if (!productListing[i].classList.contains('action')) {
          productListing[i].style.display = 'none';
        } else {
          productListing[i].style.display = 'block';
        }
      }
    }

    function showThriller() {
      for (var i = 0; i < productListing.length; i++) {
        if (!productListing[i].classList.contains('thriller')) {
          productListing[i].style.display = 'none';
        } else {
          productListing[i].style.display = 'block';
        }
      }
    }

    actionbtn.addEventListener('click', showAction);
    thrillerbtn.addEventListener('click', showThriller);

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
      searchBarForm.style.visibility="none"
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

      } else {
        /*
          - when screen reverts back to desktop, reverts to default sizes
        */

        mobileLinks.style.display = 'flex';
        mobileIcon.removeEventListener("click", showMobileLinks);
      }
    }

    searchToggle.addEventListener('click', searchBarAppear);

    // TODO: re-implement default width and margin size of menu and content divs
    checkMobileScreen();
    window.onresize = function() {
      checkMobileScreen();
    }  
}
