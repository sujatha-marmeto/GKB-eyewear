document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".category-tab");
    const cards = document.querySelectorAll(".shop-by-categories-card");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const selectedCategory = tab.getAttribute("data-category");

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            // Add active class to the clicked tab
            tab.classList.add("active");

            // Filter cards that match the selected category
            cards.forEach(card => {
                if (card.getAttribute("data-category") === selectedCategory || selectedCategory === "All") {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Set the "Men" category as the default selection
    const menCategoryTab = document.querySelector(".category-tab[data-category='Men']");
    if (menCategoryTab) {
        menCategoryTab.click();
    }
});
