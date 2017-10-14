'use strict';    
document.addEventListener('DOMContentLoaded', function() {
    /* START Task 1 */
    var forDropdown = document.querySelector('.for-dropdown');
    var dropdown = document.querySelector('.dropdown');
    forDropdown.addEventListener('mouseover', function() {
        dropdown.style.display = 'block';
    });
    forDropdown.addEventListener('mouseout', function() {
        dropdown.style.display = 'none';
    });
    /* END Task 1 */
});
