const productCards = document.querySelectorAll('.product-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 });
        
        productCards.forEach(card => {
            observer.observe(card);
        });

        // Size guide modal functionality
        const modal = document.getElementById('sizeModal');
        const sizeBtn = document.getElementById('sizeGuideBtn');
        const closeBtn = document.querySelector('.close-btn');
        const sizeOptions = document.querySelectorAll('.size-option');
        
        // Open modal
        sizeBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Close modal
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close modal when clicking outside content
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Size selection
        sizeOptions.forEach(option => {
            option.addEventListener('click', () => {
                sizeOptions.forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            });
        });

        // Enhanced newsletter validation
        const form = document.getElementById('newsletterForm');
        const emailInput = document.getElementById('emailInput');
        const emailError = document.getElementById('emailError');
        const successMsg = document.getElementById('successMessage');
        
        // Real-time email validation
        emailInput.addEventListener('input', () => {
            const email = emailInput.value;
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            
            if (!isValid && email.length > 0) {
                emailError.style.display = 'block';
            } else {
                emailError.style.display = 'none';
            }
        });
        
        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailInput.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(email)) {
                emailError.style.display = 'block';
                emailInput.focus();
            } else {
                emailError.style.display = 'none';
                successMsg.style.display = 'block';
                emailInput.value = '';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            }
        });

        // Mobile video fallback
        window.addEventListener('load', () => {
            const video = document.getElementById('hero-video');
            if (window.innerWidth < 768) {
                video.style.display = 'none';
            }
        });

        // Add smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});