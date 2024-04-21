
function togglePopup(card) {
    const popup = card.querySelector('.popup');
    popup.classList.toggle('active');
}


function toggleCard(header) {
    const card = header.parentElement;
    const content = card.querySelector('.card-content');
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        content.style.maxHeight = null;
    }
}

function toggleCardKeyPress(event, header) {
    if (event.key === 'Enter' || event.key === ' ') {
        toggleCard(header);
    }
}

var cardHeaders = document.querySelectorAll('.card-header');
cardHeaders.forEach(function (header) {
    header.setAttribute('tabindex', '0');
    header.addEventListener('keydown', function (event) {
        toggleCardKeyPress(event, header);
    });
});

var modal = document.getElementById('info-modal');

var closeBtn = document.getElementsByClassName('close-modal')[0];

var modalTitle = document.getElementById('modal-title');
var modalText = document.getElementById('modal-text');

document.querySelectorAll('.modal-trigger').forEach(function (img) {
    img.onclick = function () {
        var title = img.getAttribute('data-modal-title');
        var text = img.getAttribute('data-modal-text');

        modalTitle.textContent = title;
        modalText.textContent = text;

        modal.style.display = "block";
    };
});

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


function imageClickHandler(imgElement) {
    alert('Image clicked: ' + imgElement.alt);
}

function imageKeydownHandler(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.currentTarget.click();
    }
}

