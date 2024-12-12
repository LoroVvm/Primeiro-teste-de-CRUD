document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const button = document.getElementById('addButton');
    const lista = document.getElementById('Lista');
    let editingItem = null;

    function addItem() {
        const itemText = input.value.trim();

        if (itemText) {
            const container = document.createElement('cont')
            const li = document.createElement('li');
            li.textContent = itemText;
            
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.classList.add('Bt');
            editButton.addEventListener('click', function () {
                input.value = itemText;
                editingItem = li;
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Deletar';
            deleteButton.classList.add('Bt');
            deleteButton.addEventListener('click', function () {
                lista.removeChild(li);
            });
            container.appendChild(editButton)
            container.appendChild(deleteButton)
            li.appendChild(container);
            lista.appendChild(li);

            input.value = '';
            input.focus();
        } else {
            alert('Por favor, digite um Item');
        }
    }

    button.addEventListener('click', function () {
        if (editingItem) {
            const newText = input.value.trim();
            if (newText) {
                editingItem.firstChild.textContent = newText;
                input.value = '';
                editingItem = null;
            }
        } else {
            addItem();
        }
    });
    input.addEventListener('keypress', function (event) {
        if (event.key == 'Enter') {
            if (editingItem) {
                updateItem();
            } else {
                addItem();
            }
        }
    });
});
