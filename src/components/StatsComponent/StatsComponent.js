import './StatsComponent.css'

export const StatsComponent = ({src, alt, data = '+10000', classList}) => {
    const div = document.createElement('div');
    div.classList.add('itemStatDiv');
    const i = document.createElement('i');
    const p = document.createElement('p');

    i.classList.add('uil')
    i.classList.add(classList);
    if (data > 1000){
        data = '+1000'
    }
    p.textContent = data;

    div.append(i, p);

    return div;
}