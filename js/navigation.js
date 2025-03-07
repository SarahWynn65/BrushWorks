// Event listeners for navigation

// When user clicks on 'Home' button, show #homeContainer and hide #galleryContainer and #contactContainer

document.addEventListener('DOMContentLoaded', (event) => {
    const home = document.getElementById('homeContainer');
    const classes = document.getElementById('classesContainer');
    const gallery = document.getElementById('galleryContainer');
    const contact = document.getElementById('contactContainer');

    const homeButton = document.getElementById('homeButton');
    const classesButton = document.getElementById('classesButton');
    const galleryButton = document.getElementById('galleryButton');
    const contactButton = document.getElementById('contactButton');

    console.log('DOMContentLoaded finished');

    home.style.display = "flex";
    classes.style.display = "none";
    gallery.style.display = "none";
    contact.style.display = "none";


    homeButton.addEventListener('click', function() {
        console.log('homeButton eventListener triggered');
        home.style.display = "flex";
        classes.style.display = "none";
        gallery.style.display = "none";
        contact.style.display = "none";
    });

    classesButton.addEventListener('click', function() {
        console.log('classesButton eventListener triggered');
        home.style.display = "none";
        classes.style.display = "flex";
        gallery.style.display = "none";
        contact.style.display = "none";
    });

    galleryButton.addEventListener('click', function() {
        console.log('galleryButton eventListener triggered');
        home.style.display = "none";
        classes.style.display = "none";
        gallery.style.display = "flex";
        contact.style.display = "none";
    });

    contactButton.addEventListener('click', function() {
        console.log('contactButton eventListener triggered');
        home.style.display = "none";
        classes.style.display = "none";
        gallery.style.display = "none";
        contact.style.display = "flex";
    });

    // Gallery navigation

    

});