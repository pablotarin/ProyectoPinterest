import './ImageCardComponent.css';
import { CardButton } from '../CardButton/CardButton';

export const ImageCardComponnent = ({ src, alt }) => {
    const div = document.createElement('div');
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;

    div.classList.add('imgDiv');

    const a = CardButton();
    div.append(img, a)

    return img;
};
