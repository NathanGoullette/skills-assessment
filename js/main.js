// Contacts
const contact = [
    {
        status: 'active',
        name: 'Christian',
        email: 'christian@yahoo.com',
        phone: '323-555-1234',
        addressA: '6539 Wilton Ave.',
        addressB: 'Culver City CA 90234'
    },
    {
        status: 'active',
        name: 'Rich',
        email: 'rich@tripod.com',
        phone: '323-555-1234',
        addressA: '6539 Wilton Ave.',
        addressB: 'Culver City CA 90234'
    },
    {
        status: 'active',
        name: 'Scott',
        email: 'scott@mailinator.com',
        phone: '323-555-1234',
        addressA: '6539 Wilton Ave.',
        addressB: 'Culver City CA 90234'
    },
    {
        status: 'active',
        name: 'Danny',
        email: 'danny@hotmail.com',
        phone: '323-555-1234',
        addressA: '6539 Wilton Ave.',
        addressB: 'Culver City CA 90234'
    },
    {
        status: 'away',
        name: 'Taka',
        email: 'taka@myspace.com',
        phone: '323-555-1234',
        addressA: '6539 Wilton Ave.',
        addressB: 'Culver City CA 90234'
    },
    {
        status: 'idle',
        name: 'Tim',
        email: 'tim@netscape.com',
        phone: '323-555-1234',
        addressA: '6539 Wilton Ave.',
        addressB: 'Culver City CA 90234'
    },
    {
        status: 'active',
        name: 'Patrick',
        email: 'patrick@live.com',
        phone: '323-555-1234',
        addressA: '6539 Wilton Ave.',
        addressB: 'Culver City CA 90234'
    },
    {
        status: 'idle',
        name: 'Jacques',
        email: 'jacques@aol.com',
        phone: '323-555-1234',
        addressA: '6539 Wilton Ave.',
        addressB: 'Culver City CA 90234'
    }
];

// Dynamically inject html and contact data
const contactName = document.querySelector(".name");
const contactEmail = document.querySelector(".email");
const contactPhone = document.querySelector(".phone");
const contactAddressA = document.querySelector(".address-a");
const contactAddressB = document.querySelector(".address-b");
const contactList = document.querySelector("#contactList");

for (let i = 0; i < contact.length; i++) {
    const contactListItem = document.createElement('li');
    contactListItem.classList.add("contact");
    contactListItem.innerHTML = '<div id="hoverEffect" class="hover-effect"></div><div class="contact-item"><div class="status ' + contact[i].status + '"></div></div><div class="contact-item name">' + contact[i].name + '</div><div class="contact-item email">' + contact[i].email + '</div><div class="contact-item phone hide">' + contact[i].phone + '</div><div class="more-info"><ul><li class="email-link"><a href="mailto:' + contact[i].email + '">' + contact[i].email + '</a></li><li class="phone-link"><a href="tel:+1-' + contact[i].phone + '">323-555-1234</a></li><li class="address-a">' + contact[i].addressA + '</li><li class="address-b">' + contact[i].addressB + '</li></ul></div>'
    contactList.appendChild(contactListItem);
}

// Select single contact and see more contact info
const contactSelect = document.querySelectorAll(".contact");
const contactListOverlay = document.querySelector("#overlay");
const contactListHoverEffect = document.querySelectorAll("#hoverEffect");
const contactListEmail = document.querySelector(".email");
const contactListPhone = document.querySelector(".phone");

for (let i = 0; i < contactSelect.length; i++) {
    contactSelect[i].addEventListener('click', function() {

        contactSelect[i].classList.toggle("more-info-visible");

        for (let j = 0; j < contactListHoverEffect.length; j++) {
            contactListHoverEffect[j].classList.toggle("hover-effect");
        }

        contactListOverlay.classList.toggle("overlay-visible");
    });
};

// Toggle contact info displayed in list: email/phone
const infoOption = document.querySelector('.info-option');
let contactInfoEmail = document.querySelectorAll('.email');
let contactInfoPhone = document.querySelectorAll('.phone');

infoOption.addEventListener('change', function() {
    let result = infoOption.value;

    if (result == 'email') {
        for (let i = 0; i < contactInfoEmail.length; i++) {
            contactInfoEmail[i].classList.remove("hide");
        }
        for (let i = 0; i < contactInfoPhone.length; i++) {
            contactInfoPhone[i].classList.add("hide");
        }
    } else if (result == 'phone') {
        for (let i = 0; i < contactInfoEmail.length; i++) {
            contactInfoEmail[i].classList.add("hide");
        }
        for (let i = 0; i < contactInfoPhone.length; i++) {
            contactInfoPhone[i].classList.remove("hide");
        }
    }
});