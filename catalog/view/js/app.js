"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var o, e = document.querySelector(".autohide"),
        l = document.querySelector(".navbar-top").offsetHeight;
    700 < $(window).width() ? e && (o = 0, window.addEventListener("scroll", function() {
        var s = window.scrollY;
        s < o ? (e.classList.remove("scrolled-down"), e.classList.add("scrolled-up")) : (e.classList.remove("scrolled-up"), e.classList.add("scrolled-down")), s < l && (e.classList.remove("scrolled-up"), e.classList.remove("scrolled-down")), 200 < (o = s) ? $(".trx_addons_scroll_to_top").addClass("show") : $(".trx_addons_scroll_to_top").removeClass("show")
    })) : (e.classList.remove("scrolled-down"), e.classList.add("scrolled-up"))
});
var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: !0,
    live: !0,
    callback: function(s) {},
    scrollContainer: null,
    resetAnimation: !0
});
wow.init(), $(".arrow-mobile").click(function(s) {
    $(this).hasClass("show") ? $(this).removeClass("show") : $(this).addClass("show"), s.preventDefault(), s.stopPropagation()
}), $("body").on("click", function(s) {
    $(window).width() <= 700 && 0 == $(s.target).parents("#navbarCollapse").length && $("#navbarCollapse").hasClass("show") && (s = document.getElementById("navbarCollapse"), new bootstrap.Collapse(s, {
        toggle: !0
    }))
});