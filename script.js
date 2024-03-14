let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle("active");
    navbar.classList.toggle("active");
}

let option_box = document.querySelector("select");
let options_list = document.querySelector("option");
let box_container = document.querySelector(".box-container");
let box = document.getElementById("1");
let header_bar = document.querySelector("header");
let top_button = document.getElementById("myBtn");

function getOption(selected_option) {
    updateProductsList(selected_option)
}


function updateProductsList(n) {
    let product_boxes = document.querySelectorAll(".home .box");

    $("section.home div.box-container").fadeOut();
    
    setTimeout(
        function() {
            for (i = 0; i < product_boxes.length; i++) {
                product_boxes[i].style.display = "none";
            }

            if (n == "0") {
                for (i = 0; i < product_boxes.length; i++) {
                    product_boxes[i].style.display = "block";
                }
            } else {
                for (i = 0; i < product_boxes.length; i++) {
                    if (String(product_boxes[i].id) == n) {
                        product_boxes[i].style.display = "block";
                    }
                }
            }    
        
            $("section.home div.box-container").fadeIn();
        }, 500);
}

function generateOptionList(opt_name, opt_value) {
    if (opt_value > 0) {
        const new_opt = options_list.cloneNode(true);
        option_box.appendChild(new_opt);

        new_opt.value = opt_value;
        new_opt.textContent = opt_name;
    }

}

function generateProductsData(prod_name, prod_value, prod_pic_path, prod_shopee, prod_lazada) {
    const new_box = box.cloneNode(true);
    box_container.appendChild(new_box);
    const pict =  new_box.childNodes[1];
    const name =  new_box.childNodes[3];
    const shpl =  new_box.childNodes[5].childNodes[1];
    const lzdl =  new_box.childNodes[5].childNodes[3];

    new_box.id = prod_value;
    pict.src = "webp pic/" + prod_pic_path;
    name.textContent = prod_name;
    shpl.href = prod_shopee;
    lzdl.href = prod_lazada;
}

function organizingJSON(data, i) {
    if (i == 0) {
        for (j = 0; j < data.length; j++) {
            var opt_name = data[j].Name;
            var opt_value = data[j].Value;
            generateOptionList(opt_name, opt_value);
        }
    } else {
        if (data.length > 0) {
            for (j = 0; j < data.length; j++) {
                var prod_name = data[j].Name;
                var prod_value = i;
                var prod_pic_path = data[j].PicturePath;
                var prod_shopee = data[j].SHP;
                var prod_lazada = data[j].LZD;
                generateProductsData(prod_name, prod_value, prod_pic_path, prod_shopee, prod_lazada);
            }
        }
    }
}

function deleteFirstBox() {
    box.remove()
}

onscroll = () => {
    if (scrollY != 0) {
        // header_bar.style.opacity = 0.7;
        top_button.style.display = "block"
    } else {
        // header_bar.style.opacity = 1;
        top_button.style.display = "none"
    }
    navbar.classList.remove("active");
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}