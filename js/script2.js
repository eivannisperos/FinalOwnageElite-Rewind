window.onload = function() {
  const MOBILE = window.matchMedia("(max-width: 720px)");

  //navigational javascript
  var mobileLinks = document.getElementById('main-nav-bar-hidden');
  var mobileIcon = document.getElementById('nav-toggle');
  var mobileIconPadding = document.getElementById('nav-toggle-area');
  var mobileLinksA = document.getElementsByClassName('hidden-link');
  var closeMobileNav = document.getElementById("close-nav");

  var deleteItemLogo = document.getElementsByClassName('delete-item');

  //sort-by variables
  var productListing = document.getElementsByClassName('product-listing');
  var action = document.getElementsByClassName('action');
  var thriller = document.getElementsByClassName('thriller');

  var actionbtn = document.getElementById('action-btn');
  var thrillerbtn = document.getElementById('thriller-btn');

  //footer and height of listing content
  var footer = document.getElementById('top-shortcut');
  var productListingDiv = document.getElementById('featured-listing-content');
  var intViewportHeight = window.innerHeight;
  var productListingHeight = productListingDiv.offsetHeight;
  var footerHeight = footer.offsetHeight;

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

  //check height of feature listing
  function checkFeaturedListingHeight() {
    productListingDiv.style.paddingBottom = footerHeight;
  }

  actionbtn.addEventListener('click', showAction);
  thrillerbtn.addEventListener('click', showThriller);

  // TODO: re-implement default width and margin size of menu and content divs
  checkMobileScreen();
  checkFeaturedListingHeight();
  window.onresize = function() {
    checkMobileScreen();
  }
}
