// ==UserScript==
// @name         PR Branch Links
// @version      0.1
// @description  Open in a new tab the clicked branch on a pull request page.
// @author       Ionică Bizău
// @match        https://github.com/*/*/pull/*
// @grant        none
// ==/UserScript==

window.addEventListener("load", function () {
    if (!/^https\:\/\/github\.com\/[a-z]+\/.*\/pull\/[0-9]+\/?$/i.test(location.href)) { return; }
    $(".commit-ref.current-branch.css-truncate.js-selectable-text.expandable").on("click", function () {
        var s = $(this).text().split(":")
          , repo = location.pathname.match(/[a-z]+\/(.*)\/pull\/[0-9]+/)[1]
          , l = "https://github.com/_username_/_repo_/tree/_branch_"
                .replace("_username_", s[0])
                .replace("_repo_", repo)
                .replace("_branch_", s[1])
          ;

        window.open(l, "_blank").focus();
    }).css("cursor", "pointer");
});
