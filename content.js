var REVIEW_SELECTOR = "#result-albumreviews ul li.result-item";
var ALBUM_LINK_SELECTOR = "a.album-link";
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
