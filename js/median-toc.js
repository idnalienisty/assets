function medianTOC() {
    var a = 1,
        b = 0,
        c = "";
    document.getElementById("post-body").innerHTML = document.getElementById("post-body").innerHTML.replace(/<h([\d]).*?>(\n.*?|.*?)<\/h([\d]).*?>/gi, function (d, e, f, g) {
        return e != g ? d : (e > a ? c += new Array(e - a + 1).join("<ol class='point" + a + "'>") : e < a && (c += new Array(a - e + 1).join("</ol></li>")), b += 1, c += '<li><a href="#' + f.replace(/[^a-z0-9]/gi, " ").trim().replace(/\s/g, "") + '" title="' + f + '">' + f.replace(/[^a-z0-9]/gi, " ") + "</a>", a = parseInt(e), "<h" + e + " id='" + f.replace(/[^a-z0-9]/gi, " ").trim().replace(/\s/g, "") + "'>" + f + "</h" + g + ">")
    }), a && (c += new Array(a + 1).join("</ol>")), document.getElementById("post-tocContent").innerHTML += c
}
