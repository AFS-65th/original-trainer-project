"use strict";

window.onload = function() {
	const $header     = document.getElementsByClassName("header")[0];
	const $arrow      = document.getElementsByClassName("foo")[0]; 

	onePageScroll(".main", {
    beforeMove: function(index, next_el) {
    	if (index == 1) {
    		$header.classList.add("transpalent");
    		$arrow.classList.remove("none");
    	} else {
    		$header.classList.remove("transpalent");
    		$arrow.classList.add("none");
    		const $pagination = document.getElementsByClassName("onepage-pagination")[0];
    		if (index == 4) {
    // 			$pagination.classList.add("transpalent");
                $pagination.style.zIndex = -1;
    		} else {
    // 			$pagination.classList.remove("transpalent");
                $pagination.style.zIndex = 5;
    		}
    	}
    }
  });
  
    const $loading = document.getElementsByClassName("loading")[0];
	$loading.classList.add("loading-remove");
};