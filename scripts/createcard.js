const attributeSet= (target, attrType, value) => {
    target.setAttribute(attrType, value);
}

const createCard= (name, obj)=> {
    const card= document.createElement('div');
    card.className = 'card col-xl-3 col-md-5 col-xs-12';

    const imgElement= document.createElement('img');
    imgElement.classList.add('card-img-top');
    attributeSet(imgElement, 'src', obj);
    attributeSet(imgElement, 'alt', name);
    attributeSet(imgElement, 'loading', 'lazy');

    const cardBody= document.createElement('div');
    cardBody.className = 'card-body';
    const cardTitle= document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent= name;
    const downloadLink= document.createElement('a');
    downloadLink.className= 'btn btn-primary';
    downloadLink.textContent= 'Download Image';
    attributeSet(downloadLink, 'href', obj);
    attributeSet(downloadLink, 'download', obj.split('/')[2]);

    cardBody.append(cardTitle, downloadLink);
    card.append(imgElement, cardBody);

    return card;
}

export default createCard;