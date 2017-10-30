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
}
