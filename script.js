document.addEventListener('DOMContentLoaded', function() {
    // Get the dropdown button and content
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle the dropdown content when the button is clicked
    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn *')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});