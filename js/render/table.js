// [
//  [1,2,3],
//  [3,4,5],
// ]

export function renderTableBody({tableGrid}) {
    let table = ``;
    console.log(tableGrid, "=========")

    for (let i = 0; i < tableGrid.length; i++) {
        table += "<tr>";
        const tableRow = tableGrid[i];

        for (let i = 0; i < tableRow.length; i++) {
            table += `<td>${tableRow[i]}</td>`
        }
        table += "</tr>";
    }

    return table;
}
