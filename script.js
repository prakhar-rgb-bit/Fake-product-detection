document.getElementById('complaintForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        category: document.getElementById('category').value,
        complaint: document.getElementById('complaint').value,
        timestamp: new Date().toISOString()
    };
    
    // Simulate form submission
    submitComplaint(formData);
});

function submitComplaint(data) {
    const messageDiv = document.getElementById('message');
    
    // Show loading state
    messageDiv.className = 'message';
    messageDiv.textContent = 'Submitting complaint...';
    messageDiv.classList.remove('hidden');
    
    // Simulate API call delay
    setTimeout(() => {
        // In a real application, you would send this to your backend
        console.log('Complaint submitted:', data);
        
        // Show success message
        messageDiv.className = 'message success';
        messageDiv.textContent = 'Your complaint has been submitted successfully. We will contact you soon.';
        
        // Reset form
        document.getElementById('complaintForm').reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            messageDiv.classList.add('hidden');
        }, 5000);
        
    }, 1000);
}