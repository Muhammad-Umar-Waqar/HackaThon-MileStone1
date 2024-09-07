document.addEventListener('DOMContentLoaded', function () {
    var skillsSection = document.getElementById('skills');
    var toggleArrow = document.getElementById('toggle-arrow');
    var skillsHeading = document.getElementById('skills-heading');
    // Set the initial state
    if (skillsSection && toggleArrow) {
        skillsSection.classList.remove('collapsed'); // Ensure the skills section is visible
        toggleArrow.style.transform = 'rotate(0deg)'; // Arrow should point up by default
    }
    if (skillsSection && toggleArrow && skillsHeading) {
        skillsHeading.addEventListener('click', function () {
            if (skillsSection.classList.contains('collapsed')) {
                skillsSection.classList.remove('collapsed');
                toggleArrow.style.transform = 'rotate(0deg)'; // Arrow points up when expanded
            }
            else {
                skillsSection.classList.add('collapsed');
                toggleArrow.style.transform = 'rotate(180deg)'; // Arrow points down when collapsed
            }
        });
    }
});
