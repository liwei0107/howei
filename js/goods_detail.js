//資料庫
let goods_data = [
    [['衣服1', 200], [['#FFF', ['S', 'M', 'L'], ["images/bottoms/acc-600.jpg", "images/bottoms/acc-600.jpg", "images/bottoms/acc-600.jpg"]], ['#882436', ['XS', 'S', 'XL'], ["images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg"]]]],
    [['衣服2', 100], [['#000', ['S', 'M', 'L'], ["images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg"]], ['#577624', ['XS', 'L', 'XXL'], ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服3', 300], [['#000', ["images/bottoms/woodcraft-1200.jpg", "images/bottoms/woodcraft-1200.jpg", "images/bottoms/woodcraft-1200.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服4', 200], [['#000', ["images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服4', 200], [['#000', ["images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]]
];

let goods = [];

let color_value = 0;
//顏色標示跟text部分用不同的div分開
window.onload = function () {
    //網頁傳值 pag=0
    const inheritance = new URL(window.location);
    const params = inheritance.searchParams;
    console.log(params.get('page'));
    let page = params.get('page');
    goods = goods_data[page];
    let detail_text = goods[0][0];
    let price = goods[0][1];

    text_section.innerHTML = `<h4 style="padding-top:5px">${detail_text}</h4><h3>NT${price}$</h3>`;
    colorchange(color_value);
}

//顏色切換的重點:1.圖片欄更新 2.標示現在顏色，加入、消除border



function colorchange(color) {
    let color_ticket = "";
    let size_ticket = "";

    for (i = 0; i <= (goods[1].length - 1); i++) {
        if (color == i) {
            color_ticket += `<label><input type="radio" name="label" value=0 checked="checked"><span class="goods_color" style="background:${goods[1][color][0]}; border:6px double #333;"></span></label>`;
            for (j = 0; j<=(goods[1][color][1].length - 1);j++){
                size_ticket += `<label><input type="radio" name="label" value=0><span class="goods_size">${goods[1][color][1][j]}</span></label>`;
            }

        } else { color_ticket += `<label><input type="radio" name="label" value=0 ><span class="goods_color" style="background:${goods[1][i][0]};" onclick="colorchange(${i})"></span></label>`; }
        console.log(color_ticket);
    }


    let img_html = "";
    for (i = 1; i <= (goods[1][color][1].length - 1); i++) {
        let img_address = goods[1][color][2][i];
        img_html += `<img src="${img_address}" width="auto" height="auto">`
    }

    test_color.innerHTML = color_ticket;
    test_size.innerHTML = size_ticket;

    let rwd = window.matchMedia("(max-width:768px)");
    rwd.addListener(resizeWidth);
    resizeWidth(rwd);
    function resizeWidth(mediaType) {
        if (mediaType.matches) {
            main_img.innerHTML = ""
            main_img.innerHTML = `<img src="${goods[1][color][2][0]}" width="auto" height="auto">`
            sub_img.innerHTML = img_html;
        } else {
            main_img.innerHTML = ""
            sub_img.innerHTML = ""
            main_img.innerHTML = `<img src="${goods[1][color][2][0]}" width="auto" height="auto">` + img_html;
        }
    }

}


function detail_page1() {
    $("#page1").css("display", "block");
    $("#page2").css("display", "none");
}
function detail_page2() {
    $("#page1").css("display", "none");
    $("#page2").css("display", "block");
}