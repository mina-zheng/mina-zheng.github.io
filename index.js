const main_text = document.querySelector('.maintext');
const about_me_text = document.querySelector('.maintext_about_me');
const resume_text = document.querySelector('.maintext_resume');
const contact_text = document.querySelector('.maintext_contact');

const texts = [main_text, about_me_text, resume_text, contact_text];

function hideAll() {
    texts.forEach(t => t.style.display = 'none');
}

function showSection(section) {
    hideAll();
    section.style.display = 'block';
}

const menuItems = document.querySelectorAll('.menu');
menuItems.forEach(menu => {
    menu.addEventListener("click", () => {
        const text = menu.innerText.trim();
        if (text === "| main.py") {
            showSection(main_text);
        } else if (text === "| about_me.py") {
            showSection(about_me_text);
        } else if (text === "| resume.py") {
            showSection(resume_text);
        } else if (text === "| contact_info.py") {
            showSection(contact_text);
        }
    });
});

let input = document.querySelector('#inputtext');

input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        const readInput = input.value;
        if (readInput == "about_me.py") {
            showSection(about_me_text);
        }
        else if (readInput == "resume.py") {
            showSection(resume_text);
        }
        else if (readInput == "main.py") {
            showSection(main_text);
        }
        else if (readInput == "contact_info.py") {
            showSection(contact_text);
        }

        input.value = '';
    }
    
})

