function decryptText(element, speed = 50) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";
    const originalText = element.textContent;
    let iterations = 0;
    
    const interval = setInterval(() => {
        let displayedText = '';
        for (let i = 0; i < originalText.length; i++) {
            if (i < iterations) {
                displayedText += originalText[i];
            } else {
                displayedText += chars[Math.floor(Math.random() * chars.length)];
            }
        }
        element.textContent = displayedText;
        iterations += 1/3; 
        if (iterations >= originalText.length) {
            element.textContent = originalText;
            clearInterval(interval);
        }
    }, speed);
}

window.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('decrypted-text');
    if (textElement) decryptText(textElement, 40);
});

