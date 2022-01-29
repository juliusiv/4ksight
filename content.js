if (location.pathname.startsWith("/artists")) {
  var REVIEW_SELECTOR = "#result-albumreviews ul li.result-item";
  var ALBUM_LINK_SELECTOR = "a.review__link";
} else if (location.pathname.startsWith("/reviews")) {
  var REVIEW_SELECTOR = ".fragment-list > .review";
  var ALBUM_LINK_SELECTOR = "a.review__link";
} else if (location.pathname.startsWith("/best")) {
  var REVIEW_SELECTOR =
    "#best-new-overview .bnm-album-hero, #best-new-albums ul.square-list > li, #best-new-reissues ul.square-list > li";
  var ALBUM_LINK_SELECTOR = ".bnm-hero__link-block, .link-block";
} else if (location.pathname == '/') {
  var REVIEW_SELECTOR = ".album-reviews.album-reviews .album-review-hero";
  var ALBUM_LINK_SELECTOR = ".artwork";
}

var ARTWORK_DIV_SELECTOR = ".artwork";
var SCORE_CIRCLE_SELECTOR = ".score-circle";

document.querySelectorAll(REVIEW_SELECTOR).forEach((elem, i) => {
  var artDiv = elem.querySelector(ARTWORK_DIV_SELECTOR);
  var reviewLink = elem.querySelector(ALBUM_LINK_SELECTOR).href;

  fetch(reviewLink)
    .then((response) => response.text())
    .then((data) => {
      var parser = new DOMParser();
      var scoreCircle = parser.parseFromString(data, "text/html")
                              .querySelector(SCORE_CIRCLE_SELECTOR);
      scoreCircle.className += " injected";
      artDiv.appendChild(scoreCircle);
    });
});
