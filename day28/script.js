// This JS file is for day 11 personal portfolio website project 

// Dark mode Toggle 

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Add dark mode button and adding some styling
const darkModeBtn = document.createElement('button');
darkModeBtn.innerText = 'Toggle Dark Mode';
darkModeBtn.style.position = 'fixed';
darkModeBtn.style.bottom = '20px';
darkModeBtn.style.right = '20px';
darkModeBtn.style.padding = '10px';
darkModeBtn.style.backgroundColor = '#0e513eff';
darkModeBtn.style.color = '#fff';
darkModeBtn.style.border = '2px solid ';
darkModeBtn.style.borderRadius = '12px';
darkModeBtn.style.cursor = 'pointer';
darkModeBtn.onclick = toggleDarkMode;
document.body.appendChild(darkModeBtn);

// Dark mode styles writing html code to be added in our index.html
const darkStyle = document.createElement('style');
darkStyle.innerHTML = `
.dark-mode{
    background-color: #1a1a1a;
    color: #f5f5f5;
}
.dark-mode table{
    background-color: #190505ff;
}

.dark-mode header, .dark-mode footer{
    background-color: #111;
}
.dark-mode a {
color: #1abc9c;
}
`;
document.head.appendChild(darkStyle);

// Typing animation for title  ***<3
const title = document.querySelector('h2');
const text = "Web Developer and Designer";
let index = 0;

const typeEffect = () => {
    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
};

title.innerHTML = "";
typeEffect();

// Smooth scroll navigation (for demonstration)

const navLinks = document.querySelectorAll('header p');
navLinks.forEach(link => {
    link.style.cursor = 'pointer';
    link.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});

// popup modal for peer reviews
const peerReviewTable = document.querySelectorAll('table')[1];
peerReviewTable.querySelectorAll('td').forEach((td, i) => {
    td.style.cursor = 'pointer';
    td.onclick = () => showModal(td.innerText);
});

const showModal = (text) => {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';

    const modalContent = document.createElement('div');
    modalContent.style.background = '#3495b5ff';
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '10px';
    modalContent.style.maxWidth = '600px';
    modalContent.innerHTML = `<p>${text}</p><button style="margin: 10px;padding: 10px;">OK</button>`;

    modalContent.querySelector('button').onclick = () => document.body.removeChild(modal);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
};


// Dynamic Year in Footer
const footer = document.querySelector('footer');
footer.innerHTML = `© ${new Date().getFullYear()} All right reserved by JD`;

//Scroll to top Button 
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '  ↑  ';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '60px';
scrollBtn.style.fontSize = '20px';
scrollBtn.style.fontWeight = '900';
scrollBtn.style.width = '50px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px';
scrollBtn.style.marginBottom = '10px';
scrollBtn.style.border = '5px solid white'
scrollBtn.style.backgroundColor = '#f97020ff';
scrollBtn.style.color = '#fff';
scrollBtn.style.borderRadius = '25px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';

scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(scrollBtn);

//Show btn on scrolling down
window.onscroll = () => {
    scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
};