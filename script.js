window.onload = function () {
    var navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (navLink) {
                navLink.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
    
    var galleryImages = document.querySelectorAll(".image-gallery img");
    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            var src = this.getAttribute("src");
            var alt = this.getAttribute("alt");
            showModal(src, alt);
        });
    });
    
    var homeGalleryImages = document.querySelectorAll(".home-gallery img");
    homeGalleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            var src = this.getAttribute("src");
            var alt = this.getAttribute("alt");
            showModal(src, alt);
        });
    });

    var homeGalleryImages = document.querySelectorAll(".newsImage");
    homeGalleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            var src = this.getAttribute("src");
            var alt = this.getAttribute("alt");
            showModal(src, alt);
        });
    });
    
    
    var homeGalleryImages = document.querySelectorAll(".news-Image");
    homeGalleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            var src = this.getAttribute("src");
            var alt = this.getAttribute("alt");
            showModal(src, alt);
        });
    });

    function showModal(src, alt) {
        var modal = document.createElement("div");
        modal.classList.add("modal");
    
        var modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
    
        var modalImage = document.createElement("img");
        modalImage.src = src;
        modalImage.alt = alt;
    
        modalContent.appendChild(modalImage);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    
        modal.addEventListener("click", function () {
            document.body.removeChild(modal);
        });
    }
    };
    
    // Add this JavaScript to your script file or inside a script tag
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
    } else {
    document.getElementById("myBtn").style.display = "none";
    }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    