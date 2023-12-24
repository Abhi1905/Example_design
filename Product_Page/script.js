document.addEventListener("DOMContentLoaded", function () {
    var productImg = document.getElementById("productImage");
    var btn = document.getElementsByClassName("btn");

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            var color = this.dataset.color;
            productImg.src = "images/" + color + ".jpg";

            for (var j = 0; j < btn.length; j++) {
                btn[j].classList.remove("active");
            }

            this.classList.add("active");
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var productImg = document.getElementById("productImage");
    var btn = document.getElementsByClassName("btn");

    var colorInputs = document.querySelectorAll('input[name="color"]');

    colorInputs.forEach(function (input) {
        input.addEventListener("change", function () {
            var color = this.id.toLowerCase();
            productImg.src = "images/" + color + ".jpg";

            for (var j = 0; j < btn.length; j++) {
                btn[j].classList.remove("active");
            }
            var correspondingSpan = document.querySelector('.btn[data-color="' + color + '"]');
            correspondingSpan.classList.add("active");
        });
    });
});

