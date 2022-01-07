if (
    localStorage.getItem("theme") == "dark" ||
    localStorage.getItem("theme") == "light"
) {
    $("body").addClass(localStorage.getItem("theme"));
    localStorage.getItem("theme") == "dark"
        ? $("#themeIcon").attr("src", "/assets/moon.svg")
        : $("#themeIcon").attr("src", "/assets/sun.svg");
}

$("#toggleTheme").click(() => {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $("body").addClass("light");
        $("#themeIcon").attr("src", "/assets/sun.svg");
        localStorage.setItem("theme", "light");
    } else {
        $("body").removeClass("light");
        $("body").addClass("dark");
        $("#themeIcon").attr("src", "/assets/moon.svg");
        localStorage.setItem("theme", "dark");
    }
});
