function contactPage() {
    const content = document.querySelector('#content');
    const header = document.createElement('strong');
    const location = document.createElement('div');
    const phone = document.createElement('div');
    const email = document.createElement('div');

    header.textContent = 'Contact Us';
    location.textContent = 'Address: 888 sushi ave. california CA';
    phone.textContent = 'Phone: 888-8888-8888';
    email.textContent = 'contactUs@sushibar.com';

    content.appendChild(header);
    content.appendChild(location);
    content.appendChild(phone);
    content.appendChild(email);
};

export default contactPage;