var productImgList = [".product-one", ".product-two", ".product-three", ".product-four"];
var thumbnailImgList = [".thumbnail-one", ".thumbnail-two", ".thumbnail-three", ".thumbnail-four"];
var globalClickTracker = 0;

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
