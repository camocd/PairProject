$(document).ready(function () {
    var httpRoot = "http://localhost:8080";
    // var httpRoot = "http://120.24.27.29:8080";
    var MAX_COUNT = 50;

    items = [];

    $.ajax({
        url:httpRoot + `/paper/all`,
        type:"GET",
        dataType:"json",
        async:false,
        success:function(result){
            for (var i = 0;i < result.length;i++){
                if (i >= MAX_COUNT){
                    break;
                }
                var new_item = "    <div class=\"item\">\n" +
                    "        <div class=\"content\">\n" +
                    "            <div class=\"img\"><img src=\"img/paper.png\" alt=\"paper\" width=\"270px\" height=\"340px\"></div>\n" +
                    "            <div class=\"text\">\n" +
                    "                <p class=\"text-head\">" + result[i].title +
                    "                </p>\n" +
                    "                <p style=\"font-weight: bolder; margin: 10px 0;\">Abstract:</p>\n" +
                    "                <div class=\"text-content\">" + result[i].paperAbstract + "</div>\n" +
                    "                <p><span style=\"font-weight: bolder;\">Keywords:</span>" + result[i].keyWord + "</p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"footer\">\n" +
                    "            <div><a href=\"" + result[i].url + "\">" + result[i].url + "</a></div>\n" +
                    "            <div>\n" +
                    "                <a type=\"submit\" class=\"btn btn-primary mb-2\">翻译</a>\n" +
                    "                <a type=\"submit\" class=\"btn btn-primary mb-2\">收藏</a>\n" +
                    "                <a type=\"submit\" class=\"btn btn-primary mb-2\">删除</a>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>"
                items.push(new_item);
            }
        },
    });

    $("#first-item").remove();
    for (var i = 0;i < items.length;i++) {
        $("#item-list").append(items[i]);
    }

});
