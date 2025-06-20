import rstImage from './assets/sushi.jpg';

function homePage() {
    const content = document.querySelector('#content');
    const pic = document.createElement('img');
    const desc = document.createElement('div');
    const info = document.createElement('div');
    const hours = document.createElement('p');
    const location = document.createElement('p');

    pic.src = rstImage;
    desc.textContent = 'Tucked away on a quiet corner, Sushi Bar is a cozy, no-frills sushi bar with just six seats and a handwritten menu that changes daily. Known for its fresh cuts, quirky rolls, and warm miso served in mismatched cups, this hidden gem feels more like your eccentric uncle’s kitchen than a restaurant. Come for the sushi, stay for the stories.';
    hours.textContent = 'Hours: 10am - 10pm Everyday';
    location.textContent = 'Address: 888 sushi ave. california CA';

    content.appendChild(pic);
    content.appendChild(desc);
    info.appendChild(hours);
    info.appendChild(location);
    content.appendChild(info);
};

export default homePage;


