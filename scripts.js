// Project Data: Images and descriptions
const projects = [
    {
        fullImage: 'assets/alm.jpeg',
        description: 'Project 1: Alumni Tracking Website\nCreated an easy-to-use Alumni Tracking website to help former students stay in touch with the school and their peers. By enabling users to access resources, communicate updates, and maintain their profiles, this platform helps to build a strong community of alumni.'
    },
    {
        fullImage: 'assets/ck.jpeg',
        description: 'Project 2: Checklist for Websites\nDeveloped a thorough website checklist tool to assist users in making sure all necessary components are present before launching a website. By directing users through essential steps for a successful website launch, this interactive checklist improves the web construction process.'
    },
    {
        fullImage: 'assets/ess.png',
        description: 'Project 3: Website for Enrollment\nCreated a completely functional enrollment website that makes it easier for potential students to apply. Users may easily enroll in the programs they choose thanks to the site\'s secure submission forms, comprehensive program information, and easy-to-use navigation.'
    },
    // Add more projects here as needed
];


// Open modal and display selected project
function openModal(index) {
    const modal = document.getElementById('projectModal');
    const fullImage = document.getElementById('fullImage');
    const description = document.getElementById('modalDescription');

    // Set the image and description based on the project index
    fullImage.src = projects[index].fullImage;
    description.innerHTML = projects[index].description;

    // Show the modal
    modal.style.display = "block";
}

// Close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = "none";
}

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".responsive-icon");
    menu.classList.toggle("open"); 
    icon.classList.toggle("open");
}