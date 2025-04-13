// vide l'affichage
function initialiser_calc(id) {
    document.getElementById(id + '_resultat').value = '';
}

// Ajouter au résultat
function add_calc(id, value) {
    var result = document.getElementById(id + '_resultat');
    result.value += value;
}

function key_detect_calc(id, event) {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '%'];

    if (allowedKeys.includes(key)) {
        add_calc(id, key);
    } else if (key === 'Enter') {
        f_calc(id, '=');
    } else if (key === 'Backspace') {
        f_calc(id, 'nbs');
    } else if (key === 'Escape') {
        f_calc(id, 'ce');
    }
}

// Traitement des boutons
function f_calc(id, operation) {
    var result = document.getElementById(id + '_resultat');

    switch (operation) {
        case 'ce': 
            result.value = '';
            break;
        case '=': 
            try {
                result.value = eval(result.value);
            } catch (e) {
                result.value = 'Erreur';
            }
            break;
        case 'nbs': 
            result.value = result.value.slice(0, -1);
            break;
        case '%': 
            try {
                result.value = parseFloat(result.value) / 100;
            } catch (e) {
                result.value = 'Erreur';
            }
            break;
        case '+-': 
            if (result.value.charAt(0) === '-') {
                result.value = result.value.substring(1);
            } else if (result.value !== '') {
                result.value = '-' + result.value;
            }
            break;
        default: 
            result.value += operation;
            break;
    }
}


  