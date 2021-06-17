
const registrar_tareas = async(name, surname, email, enabled) => {
    await axios({
        method: 'post',
        url: 'http://localhost:8080/api/users',
        responseType: 'json',
        data: {
            name,
            surname,
            email,
            enabled,
            
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El usuario ha sido registrado.',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            limpiar();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        });
    });
};

const obtenerDatos = () => {
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let enabled = true;
    console.log(name);
    registrar_tareas(name, surname, email, enabled);

}
