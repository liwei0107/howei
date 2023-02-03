function cb_product(index1) {
    // 假設使用二維資料庫
    var glassbox = "";
    for (i in index1) { //問題 2 
        var glassbox_compute = `<a class="goods_a" href="goods_detail.html??type=${page}&page=${i}">  
                                    <div class="goods_div">
                                        <div>
                                        <img src="${index1[i][1][0][1][0]}" width="auto" height="auto"> 
                                        </div>
                                            <div>
                                            <h4 class="goods_name">${index1[i][0][0]}</h4>
                                            </div>
                                            <div>
                                            <p>${index1[i][0][1]}$<p>
                                            </div>
                                    </div>
                                </a>
                               `;
        glassbox += glassbox_compute;
    }
    glass_box.innerHTML = glassbox;
}
let goods_data = [["tops",[
    [['衣服1', 200], [['#FFF', ["images/bottoms/acc-600.jpg", "images/bottoms/acc-600.jpg", "images/bottoms/acc-600.jpg"]], ['#882436', ["images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg"]]]],
    [['衣服2', 100], [['#000', ["images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服3', 300], [['#000', ["images/bottoms/woodcraft-1200.jpg", "images/bottoms/woodcraft-1200.jpg", "images/bottoms/woodcraft-1200.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服4', 200], [['#000', ["images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服4', 200], [['#000', ["images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]]
]], ["bottoms",[
    [['衣服5', 200], [['#FFF', ["images/bottoms/acc-600.jpg", "images/bottoms/acc-600.jpg", "images/bottoms/acc-600.jpg"]], ['#882436', ["images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg"]]]],
    [['衣服6', 100], [['#000', ["images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服7', 300], [['#000', ["images/bottoms/woodcraft-1200.jpg", "images/bottoms/woodcraft-1200.jpg", "images/bottoms/woodcraft-1200.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服8', 200], [['#000', ["images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服9', 200], [['#000', ["images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]]
]], ["dress",[
    [['衣服1', 200], [['#FFF', ["images/bottoms/acc-600.jpg", "images/bottoms/acc-600.jpg", "images/bottoms/acc-600.jpg"]], ['#882436', ["images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg"]]]],
    [['衣服2', 100], [['#000', ["images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服3', 300], [['#000', ["images/bottoms/woodcraft-1200.jpg", "images/bottoms/woodcraft-1200.jpg", "images/bottoms/woodcraft-1200.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服4', 200], [['#000', ["images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服4', 200], [['#000', ["images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]]
]], ["outerwear",[
    [['衣服1', 200], [['#FFF', ["images/bottoms/acc-600.jpg", "images/bottoms/acc-600.jpg", "images/bottoms/acc-600.jpg"]], ['#882436', ["images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg"]]]],
    [['衣服2', 100], [['#000', ["images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg", "images/dress/macbook-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服3', 300], [['#000', ["images/bottoms/woodcraft-1200.jpg", "images/bottoms/woodcraft-1200.jpg", "images/bottoms/woodcraft-1200.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服4', 200], [['#000', ["images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]],
    [['衣服4', 200], [['#000', ["images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg", "images/dress/tulips-600.jpg"]], ['#577624', ['img2_1', 'img2_2', 'img2_3']]]]
]]];


let page
window.onload = function () {
    const inheritance = new URL(window.location);
    const params = inheritance.searchParams;
    console.log(params.get('type'));
    
    page = params.get('type');
    for (let i = 0; i <= 3; i++) {
        console.log(goods_data[i][0]);
        if (goods_data[i][0] == page) {
            cb_product(goods_data[i][1]);
        }
    }
}
