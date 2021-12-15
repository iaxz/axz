var a_idx = 0;

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
        var a = new Array("❤明人不说暗话❤", "❤我喜欢你❤", "❤n 55lw !n paau !❤", "❤斯人若彩虹 遇上方知有❤", "❤初识你名  久居我心❤",
        "❤生活有点苦 还好你很甜。❤", "❤我心悦你 不问朝夕❤", "❤不够优秀 何以拥有❤", "❤望尽星辰 梦里是你❤", "❤你的名字 我的故事❤",
            "❤依依目光 此生不换❤", "❤你是四月的清风入怀 甚是可爱❤", "❤余生是你  满心欢喜❤", "❤此生固短  无你何欢❤", "❤三生有幸  来日方长❤",
            "❤春风十里  不如你❤", "❤喜欢是你  欢喜是你❤", "❤与你相遇 好幸运。❤", "❤只问深情 不问西东❤", "❤彼此温暖 互不辜负❤",
            "❤淡淡的感觉最美❤", "❤天暗下来 你就是光❤", "❤世界再大 我眼里只有你❤", "❤人海万里 我只要你❤", "❤微风轻起 我喜欢你❤",
            "❤向来缘浅 奈何情深❤", "❤阳光正好 微风不燥❤", "❤wan an❤");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": `rgb(${getRandom(255,0)},${getRandom(255,0)},${getRandom(255,0)})`,
            "user-select": 'none',
            "cursor": 'default'
        });
        $("body").append($i);
        $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function () {
                $i.remove();
            });
    });
});
