let medicos = [
    {
        id: 1,
        nome: 'Dr. Paulo Roberto',
        especialidade: 'Psiquiatra'
    },
    {
        id: 1,
        nome: 'Dr. Paulo Gabriel',
        especialidade: 'Psiquiatra'
    },
    {
        id: 1,
        nome: 'Dr. Pedro',
        especialidade: 'Ortopedista'
    },
];

novoMedico.onclick = function(){
    overlay.classList.add('active');
    drawer.classList.add('active');
}

function listarMedicos() {
    tabelaMedicos.innerHTML = '';
    for(let i = 0; i < medicos.length; i++) {
        tabelaMedicos.innerHTML += `
        <tr>
            <td>${medicos[i].nome}</td>
            <td>${medicos[i].especialidade}</td>
            <td>
                <div class="acoes">
                    <box-icon class='suave' name='pencil'></box-icon>
                    <box-icon class='suave' name='trash' ></box-icon>
                </div>
            </td>
        </tr>
        `;
    }
}

listarMedicos();

function listarEspecialidades() {

    let especialidade = JSON.parse(localStorage.getItem('especialidades')) || [];
    medicoEspecialidade.innerHTML = '';

    if(especialidades.length === 0){
        medicoEspecialidade.innerHTML = `
            <option>Nenhuma especialidade cadastrada</option>
        `;
    } else {
        for(let i = 0; i < especialidades.length; i++) {
            medicoEspecialidade.innerHTML += `
            '<option value="${especialidades[i].id}">${especialidades[i].nome}</option>
            `;
        }
    }
}

function adicionarMedicos() {
    formCriar.onsubmit = function() {
        event.preventDefault();
        let medico = {
            id: (medicos.length + 1),
            nome: medicoNome.value,
            especialidade: medicoEspecialidade.value
        }
        medicos.push(medico);
        listarMedicos();
    }
}

adicionarMedicos();