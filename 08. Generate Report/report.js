function generateReport() {
    let result = new Array();
    let checkBoxElement = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    let headerCellsValues = Array.from(document.querySelectorAll('table th'));
    console.log(headerCellsValues);

    let rows = Array.from(document.querySelectorAll('tbody tr'));
    for (let i = 0; i < rows.length; ++i) {
        let cells = Array.from(rows[i].querySelectorAll('td'));
        let obj = {};
        for (let j = 0; j < cells.length; ++j) {
            if (checkBoxElement[j].checked) {
                let propName = checkBoxElement[j].name;
                obj[`${propName}`] = cells[j].textContent;
            }
        }
        result.push(obj);
    }
    let output = document.getElementById('output');
    output.value = JSON.stringify(result);
}