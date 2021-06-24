document.querySelector('#agregar').addEventListener('click', e => {
    let listadoAlias = ` <div class="form__group" id="remove">
    <input type="text" class="form__input" id="name" placeholder="Alias" required="" />
    <i class="fas fa-times" id="eliminar" onclick="eliminar()"></i>
</div>`;
    document.getElementById('inputs').insertAdjacentHTML("beforeend", listadoAlias);
    let elements = document.getElementsByClassName('form__group');
    let plus = document.getElementById('plus');
    if (elements.length == 4) {
        plus.parentNode.removeChild(plus);
    }
    
});

const eliminar = () => {

    let element = document.getElementById('remove');
    element.parentNode.removeChild(element);

    let plus = document.getElementById('plus');
    let elemAd = `<div class="plus" id="plus">
    <i class="far fa-plus-square" id="agregar" onclick="agregar()"></i></div>`
    if (plus == null) {
        document.getElementById('subPlus').insertAdjacentHTML("beforeend", elemAd);
    }
}
