import {projectAsList} from "./project/ProjectConstants.js";
import {renderTableBody} from "./render/table.js";

document.getElementById("project-table").innerHTML = renderTableBody({
    tableGrid: projectAsList
});
console.log(renderTableBody({
    tableGrid: projectAsList
}))