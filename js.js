document.addEventListener('DOMContentLoaded', function() {
    const jobPostForm = document.getElementById('job-post-form');
    if (jobPostForm) {
        jobPostForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Job posted successfully!');
            jobPostForm.reset();
        });
    }

    const applyButtons = document.querySelectorAll('.apply-btn');
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Application submitted!');
        });
    });
});
