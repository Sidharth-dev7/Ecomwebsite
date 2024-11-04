// Function to send the image URL to second.html
if (window.location.pathname.endsWith('Ecom.html')) {
    document.getElementById('sendButton').addEventListener('click', function() {
        const imgSrc = document.getElementById('imageToSend').src;
        localStorage.setItem('imageSrc', imgSrc); // Store the image source in localStorage
        window.location.href = 'Ecompage2.html'; // Redirect to the second page
    });
}

// Function to display the image in second.html
if (window.location.pathname.endsWith('Ecompage2.html')) {
    const imgSrc = localStorage.getItem('imageSrc'); // Retrieve the image source from localStorage
    if (imgSrc) {
        document.getElementById('receivedImage').src = imgSrc; // Set the image source
    }
}

// Function to send the image URL to second.html
if (window.location.pathname.endsWith('Ecom.html')) {
    document.getElementById('sendButton1').addEventListener('click', function() {
        const imgSrc1 = document.getElementById('imageToSend1').src;
        localStorage.setItem('imageSrc', imgSrc1); // Store the image source in localStorage
        window.location.href = 'Ecompage2.html'; // Redirect to the second page
    });
}

// Function to display the image in second.html
if (window.location.pathname.endsWith('Ecompage2.html')) {
    const imgSrc1 = localStorage.getItem('imageSrc'); // Retrieve the image source from localStorage
    if (imgSrc1) {
        document.getElementById('receivedImage').src = imgSrc1; // Set the image source
    }
}


// Function to send the image URL to second.html
if (window.location.pathname.endsWith('Ecom.html')) {
    document.getElementById('sendButton2').addEventListener('click', function() {
        const imgSrc2 = document.getElementById('imageToSend2').src;
        localStorage.setItem('imageSrc', imgSrc2); // Store the image source in localStorage
        window.location.href = 'Ecompage2.html'; // Redirect to the second page
    });
}

// Function to display the image in second.html
if (window.location.pathname.endsWith('Ecompage2.html')) {
    const imgSrc2 = localStorage.getItem('imageSrc'); // Retrieve the image source from localStorage
    if (imgSrc2) {
        document.getElementById('receivedImage').src = imgSrc2; // Set the image source
    }
}


// Function to send the image URL to second.html
if (window.location.pathname.endsWith('Ecom.html')) {
    document.getElementById('sendButton3').addEventListener('click', function() {
        const imgSrc3 = document.getElementById('imageToSend3').src;
        localStorage.setItem('imageSrc', imgSrc3); // Store the image source in localStorage
        window.location.href = 'Ecompage2.html'; // Redirect to the second page
    });
}

// Function to display the image in second.html
if (window.location.pathname.endsWith('Ecompage2.html')) {
    const imgSrc3 = localStorage.getItem('imageSrc'); // Retrieve the image source from localStorage
    if (imgSrc3) {
        document.getElementById('receivedImage').src = imgSrc3; // Set the image source
    }
}

// Function to send the image URL to second.html
if (window.location.pathname.endsWith('Ecom.html')) {
    document.getElementById('sendButton4').addEventListener('click', function() {
        const imgSrc4 = document.getElementById('imageToSend4').src;
        localStorage.setItem('imageSrc', imgSrc4); // Store the image source in localStorage
        window.location.href = 'Ecompage2.html'; // Redirect to the second page
    });
}

// Function to display the image in second.html
if (window.location.pathname.endsWith('Ecompage2.html')) {
    const imgSrc4 = localStorage.getItem('imageSrc'); // Retrieve the image source from localStorage
    if (imgSrc4) {
        document.getElementById('receivedImage').src = imgSrc4; // Set the image source
    }
}


// Function to send the image URL to second.html
if (window.location.pathname.endsWith('Ecom.html')) {
    document.getElementById('sendButton5').addEventListener('click', function() {
        const imgSrc5 = document.getElementById('imageToSend5').src;
        localStorage.setItem('imageSrc', imgSrc5); // Store the image source in localStorage
        window.location.href = 'Ecompage2.html'; // Redirect to the second page
    });
}

// Function to display the image in second.html
if (window.location.pathname.endsWith('Ecompage2.html')) {
    const imgSrc5 = localStorage.getItem('imageSrc'); // Retrieve the image source from localStorage
    if (imgSrc5) {
        document.getElementById('receivedImage').src = imgSrc5; // Set the image source
    }
}


// Update quantity buttons
document.getElementById('increase-quantity').addEventListener('click', () => {
    let quantity = parseInt(document.getElementById('quantity').innerText);
    document.getElementById('quantity').innerText = quantity + 1;
});

document.getElementById('decrease-quantity').addEventListener('click', () => {
    let quantity = parseInt(document.getElementById('quantity').innerText);
    if (quantity > 1) {
        document.getElementById('quantity').innerText = quantity - 1;
    }
});




function sendParagraph() {
    const para = document.getElementById('paragraph').innerText;
    localStorage.setItem('paragraph', para);
    window.location.href = 'Ecompage2.html';
}

function receiveParagraph() {
    const para = localStorage.getItem('paragraph');
    if (para) {
        document.getElementById('receivedPara').innerText = para;
        
    }
}

function sendParagraph1() {
    const para1 = document.getElementById('paragraph1').innerText;
    localStorage.setItem('paragraph', para1);
    window.location.href = 'Ecompage2.html';
}

function receiveParagraph1() {
    const para1 = localStorage.getItem('paragraph');
    if (para1) {
        document.getElementById('receivedPara').innerText = para1;
        
    }
}

function sendParagraph2() {
    const para2 = document.getElementById('paragraph2').innerText;
    localStorage.setItem('paragraph', para2);
    window.location.href = 'Ecompage2.html';
}

function receiveParagraph2() {
    const para2 = localStorage.getItem('paragraph');
    if (para2) {
        document.getElementById('receivedPara').innerText = para2;
        
    }
}


function sendParagraph3() {
    const para3 = document.getElementById('paragraph3').innerText;
    localStorage.setItem('paragraph', para3);
    window.location.href = 'Ecompage2.html';
}

function receiveParagraph3() {
    const para3 = localStorage.getItem('paragraph');
    if (para3) {
        document.getElementById('receivedPara').innerText = para3;
        
    }
}

function sendParagraph4() {
    const para4 = document.getElementById('paragraph4').innerText;
    localStorage.setItem('paragraph', para4);
    window.location.href = 'Ecompage2.html';
}

function receiveParagraph4() {
    const para4 = localStorage.getItem('paragraph');
    if (para4) {
        document.getElementById('receivedPara').innerText = para4;
        
    }
}

function sendParagraph5() {
    const para5 = document.getElementById('paragraph5').innerText;
    localStorage.setItem('paragraph', para5);
    window.location.href = 'Ecompage2.html';
}

function receiveParagraph5() {
    const para5 = localStorage.getItem('paragraph');
    if (para5) {
        document.getElementById('receivedPara').innerText = para5;
        
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const price = localStorage.getItem('productPrice');
    const description = localStorage.getItem('productDesc');
    document.getElementById('receivedPara').innerText = description;

    // Add to cart button event listener
    document.getElementById('addToCart').addEventListener('click', () => {
        const quantity = parseInt(document.getElementById('quantity').innerText);
        const totalPrice = quantity * price;

        alert(`Item added to cart: ${quantity} x ${price} = ${totalPrice}`);

        // Save to cart
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ description, price, quantity, totalPrice });
        localStorage.setItem('cart', JSON.stringify(cart));
        
        window.location.href = 'cart.html'; // Redirect to cart page
    });
});
