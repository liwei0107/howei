window.onload = function () {
    the_same_part();
    function the_same_part() {
        var bar_cont = document.getElementById("bar");

        bar_cont.innerHTML = `<a href="">
<div>
    <img src="../1129/images/6.JPG">
</div>
</a>

<div class="icon">
<a href="">
    <div>
        <img src="../1129/images/6.JPG">
    </div>
</a>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mymodal">登入</button>

    <div class="modal fade" id="mymodal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">登入</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">認證</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<a href="shopping_car.html">
    <div>
        <img src="../1129/images/6.JPG">
    </div>
</a>
</div>

<div class="browser">
<form action="">
    <input list="product" name="search" id="search" placeholder="輸入您想找的內容">
    <datalist id="product">
        <option value="">
    </datalist>
    <input type="submit" value="search">
</form>`;
    }
}