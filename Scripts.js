document.addeventlistener("domcontentloaded", function() {
    const fadebutton = document.getelementbyid("fadebutton");
    const produksection = document.getelementbyid("produk");

    fadebutton.addeventlistener("click", function() {
        produksection.classlist.toggle("visible");
    });
});
