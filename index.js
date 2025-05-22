var productImgList = [".product-one", ".product-two", ".product-three", ".product-four"];
var thumbnailImgList = [".thumbnail-one", ".thumbnail-two", ".thumbnail-three", ".thumbnail-four"];
var globalClickTracker = 0;
var quantityTracker = 0;

$(".thumbnail").on("click", function(event) {
    $(".thumbnail").removeClass("filter");
    $(this).addClass("filter");

    switch (this.id) {
        case "thumbnail-one":
            $(".product-img").addClass("hide");
            $(".product-one").removeClass("hide");
            globalClickTracker = 0;
            break;

        case "thumbnail-two":
            $(".product-img").addClass("hide");
            $(".product-two").removeClass("hide");
            globalClickTracker = 1;
            break;

        case "thumbnail-three":
            $(".product-img").addClass("hide");
            $(".product-three").removeClass("hide");
            globalClickTracker = 2;
            break;

        case "thumbnail-four":
            $(".product-img").addClass("hide");
            $(".product-four").removeClass("hide");
            globalClickTracker = 3;
            break;
    
        default:
            break;
    }
})

$(".next-btn").on("click", function() {
    globalClickTracker += 1;
    $(".product-img").addClass("hide");
    $(productImgList[globalClickTracker]).removeClass("hide");
    $(".thumbnail").removeClass("filter");
    $(thumbnailImgList[globalClickTracker]).addClass("filter");
    
    if(globalClickTracker === 4) {
        globalClickTracker = 0;
        $(".product-img").addClass("hide");
        $(productImgList[globalClickTracker]).removeClass("hide");
        $(".thumbnail").removeClass("filter");
        $(thumbnailImgList[globalClickTracker]).addClass("filter");
    }
});

$(".previous-btn").on("click", function() {
    globalClickTracker -= 1;
    $(".product-img").addClass("hide");
    $(productImgList[globalClickTracker]).removeClass("hide");
    $(".thumbnail").removeClass("filter");
    $(thumbnailImgList[globalClickTracker]).addClass("filter");
    
    if(globalClickTracker === -1) {
        globalClickTracker = 3;
        $(".product-img").addClass("hide");
        $(productImgList[globalClickTracker]).removeClass("hide");
        $(".thumbnail").removeClass("filter");
        $(thumbnailImgList[globalClickTracker]).addClass("filter");
    }
});

$ (".add-btn").on("click", function() {
    quantityTracker++;
    $(".quantity-display").text(quantityTracker);
    $(".alert-text").text(quantityTracker);

     if (quantityTracker === 1) {
        $(".cart-alert").removeClass("hide");
        console.log(quantityTracker);
        $(".items-in-cart").removeClass("hide");
        $(".empty-cart-text").addClass("hide");
    };
});

$ (".remove-btn").on("click", function() {
    quantityTracker--;
    $(".quantity-display").text(quantityTracker);
    $(".alert-text").text(quantityTracker);


    if (quantityTracker === -1) {
        quantityTracker = 0;
        $(".quantity-display").text(quantityTracker);
    };

    if (quantityTracker === 0) {
        $(".cart-alert").addClass("hide");
        $(".empty-cart-text").removeClass("hide");
        $(".items-in-cart").addClass("hide");
    };
});

$(".burger-container").on("click", function() {
    $(".mobile-nav").removeClass("hide");
});

$(".close-btn-container").on("click", function() {
    $(".mobile-nav").addClass("hide");
})

$(".shopping-cart").on("click", function() {
    $(".my-cart-container").removeClass("hide");
});

$(".close-cart").on("click", function() {
    $(".my-cart-container").addClass("hide");
});

 


$(".cart-btn").on("click", function() {
    var cartTotal = 125 * quantityTracker;
    $(".quantity-selected").text("x" + quantityTracker);
    $(".purchase-total").text("$" + cartTotal + ".00");
})

$(".delete-icon").on("click", function() {
    quantityTracker = 0;
    if (quantityTracker === 0) {
        $(".cart-alert").addClass("hide");
        $(".empty-cart-text").removeClass("hide");
        $(".items-in-cart").addClass("hide");
        $(".quantity-display").text(quantityTracker);
    };
})