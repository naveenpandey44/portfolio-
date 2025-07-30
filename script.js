// Initially hide the cross icon
document.querySelector('.cross').style.display = 'none';

// Hamburger menu functionality
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        // When sidebar is hidden (has sidebarGo class)
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        // When sidebar is visible (no sidebarGo class)
        document.querySelector('.ham').style.display = 'none';
        setTimeout(()=>{
            document.querySelector('.cross').style.display = 'inline';
        }, 350);
    }
});

// Read More functionality for blog posts
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the blog page (if readMoreBtn elements exist)
    const readMoreBtns = document.querySelectorAll('.readMoreBtn');
    
    if(readMoreBtns.length > 0) {
        readMoreBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                const blogItem = btn.closest('.blogItem');
                const preview = blogItem.querySelector('.blogPreview');
                const fullText = blogItem.querySelector('.blogFull');
                
                if (fullText.style.display === 'none' || fullText.style.display === '') {
                    // Show full text
                    preview.style.display = 'none';
                    fullText.style.display = 'block';
                    btn.textContent = 'Read Less';
                    btn.style.backgroundColor = '#dc3545';
                } else {
                    // Show preview
                    preview.style.display = 'block';
                    fullText.style.display = 'none';
                    btn.textContent = 'Read More';
                    btn.style.backgroundColor = 'dodgerblue';
                }
            });
        });
    }
});

// Optional: Add smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Optional: Close sidebar when clicking outside (for better UX)
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    
    // Check if sidebar is open and click is outside sidebar and hamburger
    if (!sidebar.classList.contains('sidebarGo') && 
        !sidebar.contains(event.target) && 
        !hamburger.contains(event.target)) {
        
        // Close the sidebar
        sidebar.classList.add('sidebarGo');
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
});
