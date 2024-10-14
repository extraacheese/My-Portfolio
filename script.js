const modeSwitch = document.getElementById('mode-switch');
const modeLabel = document.querySelector('.mode-label');
const hobbyContent = document.getElementById('hobby-content');
const projectsSection = document.getElementById('projects');
const body = document.body;

modeSwitch.addEventListener('change', function() {
    if (this.checked) {
        modeLabel.textContent = 'Work Mode';
        hobbyContent.style.display = 'block';
        projectsSection.style.display = 'none';
        body.style.backgroundColor = '#f0f0f0';
    } else {
        modeLabel.textContent = 'Hobby Mode';
        hobbyContent.style.display = 'none';
        projectsSection.style.display = 'flex';
        body.style.backgroundColor = '#ffffff';
    }
});