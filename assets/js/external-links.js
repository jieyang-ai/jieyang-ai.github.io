(function (window, document) {
  var links = document.querySelectorAll("a[href]");

  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    var url;

    try {
      url = new URL(link.getAttribute("href"), window.location.href);
    } catch (error) {
      continue;
    }

    if (
      (url.protocol === "http:" || url.protocol === "https:") &&
      url.origin !== window.location.origin
    ) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  }
})(window, document);
