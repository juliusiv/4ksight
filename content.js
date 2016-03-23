var REVIEW_SELECTOR = "#result-albumreviews ul li.result-item";
var ALBUM_LINK_SELECTOR = "a.album-link";
var ARTWORK_DIV_SELECTOR = ".artwork";
var SCORE_CIRCLE_SELECTOR = ".score-circle";


$(REVIEW_SELECTOR).each(function(i, el) {
  var art_div = $(this).find(ARTWORK_DIV_SELECTOR);
  var href = $(this).find(ALBUM_LINK_SELECTOR).attr("href");

  $.get(href, function(data) {
    var tmp_dom = $('<output>').append($.parseHTML(data));
    var score_circle = $(SCORE_CIRCLE_SELECTOR, tmp_dom);
    art_div.append(score_circle);
  });
});