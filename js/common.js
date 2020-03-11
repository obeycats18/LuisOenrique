$(document).ready(function () {
    // Burger Button Animation
    $('.navbar__block-menu-burger-link').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('navbar__block-menu-burger-link-active');
    });

    // EqualHeights
    $('.services__block_service-wrapper-item-img').equalHeights();
    $('.advantages__block-wrapper-item-img').equalHeights();

    //OwlCarousel
    $('.comment__block-wrapper-slider').slick({
        adaptiveHeight: true,
        centerMode: true,
        dots: true,
        fade: true,
        responsive: [
            {
            breakpoint: 830,
            settings: {
                dots: false
            }
        }
    ]
    });

    //uniMail
    $(document).ready(function() {

        //E-mail Ajax Send
        $("form").submit(function() { //Change
            var th = $(this);
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                alert("Thank you!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    
    });
});