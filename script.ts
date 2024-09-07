document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills') as HTMLElement | null;
    const toggleArrow = document.getElementById('toggle-arrow') as HTMLElement | null;
    const skillsHeading = document.getElementById('skills-heading') as HTMLElement | null;

    // Set the initial state
    if (skillsSection && toggleArrow) {
        skillsSection.classList.remove('collapsed'); // Ensure the skills section is visible
        toggleArrow.style.transform = 'rotate(0deg)'; // Arrow should point up by default
    }

    if (skillsSection && toggleArrow && skillsHeading) {
        skillsHeading.addEventListener('click', () => {
            if (skillsSection.classList.contains('collapsed')) {
                skillsSection.classList.remove('collapsed');
                toggleArrow.style.transform = 'rotate(0deg)'; // Arrow points up when expanded
            } else {
                skillsSection.classList.add('collapsed');
                toggleArrow.style.transform = 'rotate(180deg)'; // Arrow points down when collapsed
            }
        });
    }
});
