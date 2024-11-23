// Add interactivity to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.getAttribute('data-link');
        if (link) {
            window.open(link, '_blank'); // Open GitHub link in a new tab
        }
    });
});
