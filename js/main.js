// Check If there is local storage color option
let mainColors = localStorage.getItem('color-option');
if (mainColors !== null) {

    document.documentElement.style.setProperty('--main--color', mainColors);

    //Remove Active Class From All Colors List Items
    document.querySelectorAll('.list-colors li').forEach(element => {
        element.classList.remove('active');
        // Add Active Class On Element With Data Color === Local Storage
        if (element.dataset.color === mainColors) {
            // Add Active Class
            element.classList.add('active');

        }
    });

}
// Random Background Option
let randomBackOp = true;
// var to control backgroundInterval
let backgroundInterval;

// Click On Setting-toggle to Add toggle Fa-spin
document.querySelector('.setting-toggle .fa-gear').onclick = function() {
    this.classList.toggle('fa-spin');
    document.querySelector('.setting-box').classList.toggle('open');
};
//Switch colors
const colorsLi = document.querySelectorAll('.list-colors li');

//loop On All list Items
colorsLi.forEach(li => {

    //click in all every list Item
    li.addEventListener('click', (e) => {
        //Set color on root
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
        //Set Color On Local Storage
        localStorage.setItem('color-option', e.target.dataset.color);
        handleActive(e);
    });
});

//Switch Random Background option
const randomBackEl = document.querySelectorAll('.random-background span');

//loop On All span
randomBackEl.forEach(span => {

    //click in all every list Item
    span.addEventListener('click', (e) => {

        handleActive(e);

        if (e.target.dataset.background === 'yes') {
            randomBackOp = true;
            randomizedImgs();

        } else {
            randomBackOp = false;
            clearInterval(backgroundInterval);
        }
    });
});

// Select Landing-page
let landingPage = document.querySelector('.landing-page');

// Get Array Of imags
let ArrayImags = ['011.jpg', '022.jpg', '033.jpg', '044.jpg'];

// Make RandomizedImgs Function
function randomizedImgs() {
    if (randomBackOp === true) {
        backgroundInterval = setInterval(() => {
            // Get Random Number
            let Random = Math.floor(Math.random() * ArrayImags.length);
            // Change Background Img Url
            landingPage.style.backgroundImage = 'url("images/' + ArrayImags[Random] + ' " )';

        }, 1000);
    }
}

randomizedImgs();

//select Skills Selector
let Skills = document.querySelector('.our-skills');
window.onscroll = function() {
    let skillsOffset = Skills.offsetTop;
    // outer Hieght
    let outterHeight = Skills.offsetHeight;
    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;
    if (windowScrollTop > (skillsOffset + outterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll('.skill-box .skill-progress span');
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;

        });


    }
};

//Create PopUp With Images
let popGallery = document.querySelectorAll('.gallery img');
popGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        //Create Overlay Element
        let overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay);
        //create the Popup Box
        let popupBox = document.createElement('div');
        popupBox.className = 'popup-box';
        // if (img.alt !== null) {
        //     //Create Heading
        //     let imgHeading = document.createElement('h3');
        //     // Create Text For Heading
        //     let imgText = document.createElement(img.alt);
        //     // Appendchild to Heading
        //     imgHeading.appendChild(imgText);
        //     // Appendchild  Heading To Popup-box
        //     popupBox.appendChild(imgHeading);


        // }
        let popupImgs = document.createElement('img');
        popupImgs.src = img.src;
        popupBox.appendChild(popupImgs);
        document.body.appendChild(popupBox);
        //create The Close Span
        let closeButton = document.createElement('span');
        //Create The TEXT NODE
        let closeButText = document.createTextNode('X');
        // Append Close Button Text To Span Close Button
        closeButton.appendChild(closeButText);
        //Add Class To Close Button
        closeButton.className = 'close-button';
        //Add Close Button To Popup-box
        popupBox.appendChild(closeButton);



    });
});

// Close Popup-box
document.addEventListener('click', function(e) {
    if (e.target.className == 'close-button') {
        //Remove The current Popup
        e.target.parentElement.remove();
        //Remove The Overlay
        document.querySelector('.popup-overlay').remove();
    }
});

//Select All Bullets
const allBullets = document.querySelectorAll('.nav-bullets .bullets');

//Select All Links
const allLinks = document.querySelectorAll('.links a');

function smoothToScroll(element) {
    element.forEach(ele => {
        ele.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.link).scrollIntoView({
                behavior: 'smooth'
            });
        });

    });
};
smoothToScroll(allBullets);
smoothToScroll(allLinks);

//Create Handle Active Function
function handleActive(event) {
    //Remove Active Class From All Children
    event.target.parentElement.querySelectorAll('.active').forEach(element => {
        element.classList.remove('active');

    });
    // Add active Class On Self 
    event.target.classList.add('active');
}
//Control With Bullets
let bulletsSpan = document.querySelectorAll('.Bullets-Option span');
let bulletsContainer = document.querySelector('.nav-bullets');
bulletsSpan.forEach(span => {
    span.addEventListener('click', (e) => {
        if (span.dataset.display === 'show')
            bulletsContainer.style.display = 'block';
        else
            bulletsContainer.style.display = 'none';
        handleActive(e);

    });
});

// To toggle-menu
let tglBtn = document.querySelector('.menu-toggle');
let tLinks = document.querySelector('.links');
tglBtn.onclick = function() {
    this.classList.toggle('menu-active');
    tLinks.classList.toggle('open');


}