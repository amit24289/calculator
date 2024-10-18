function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const expression = document.getElementById('display').value;
    
    if (expression === '') {
        return;
    }

    const formData = new FormData();
    formData.append('expression', expression);

    fetch('/calculate', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('display').value = data.result;
    })
    .catch(error => {
        document.getElementById('display').value = 'error';
    });
}
