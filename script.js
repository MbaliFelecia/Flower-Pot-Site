// Global variables
let currentProductId = null;

// Enquiry form functions
function openEnquiryForm(productId = null) {
    currentProductId = productId;
    const modal = document.getElementById('enquiry-modal');
    modal.style.display = 'block';
    
    // Clear form
    document.getElementById('enquiry-form').reset();
}

function closeEnquiryForm() {
    const modal = document.getElementById('enquiry-modal');
    modal.style.display = 'none';
    currentProductId = null;
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('enquiry-modal');
    if (event.target === modal) {
        closeEnquiryForm();
    }
};

// Handle form submission
document.getElementById('enquiry-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone') || 'Not provided';
    const message = formData.get('message');
    
    // Create email content
    const subject = currentProductId ? 
        `Izimbali enquiry: ${currentProductId}` : 
        'Izimbali enquiry';
    
    const body = `Name: ${name}
Email: ${email}
Phone: ${phone}
Product: ${currentProductId || '(general)'}

Message:
${message}`;
    
    // Create mailto link with your updated email
    const mailtoLink = `mailto:ramakgashambali@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation and close modal
    alert("Opening your email app... If it doesn't open, please copy the text and email us at ramakgashambali@gmail.com");
    closeEnquiryForm();
});

// Page navigation helper
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
});
