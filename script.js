// Add a scroll event listener to update the progress bar width
document.addEventListener('scroll', function () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    // Find the 'myBar' element and update its width if it exists.
    var myBar = document.getElementById("myBar");
    if (myBar) {
        myBar.style.width = scrolled + "%";
    }
});
