import {RenderProjectBodyAsTable} from "./project/renderer.js";
import {filterProjects} from "./project/filter.js";

export const projectData = [
    {
        date: new Date(2020, 11, 31),
        title: "Test Project",
        assignmentType: "Github Pages Test Project",
        demo: {
            url: "https://vaskrneup.github.io/test-project/",
            text: "Demo"
        },
        repository: {
            url: "https://github.com/vaskrneup/test-project",
            text: "Review Code"
        }
    }
]

// =====================================================================================
// HANDLE DOM EVENTS !!
// =====================================================================================
document.getElementById("filter-input__button").onclick = function (e) {
    const filterText = document.getElementById("filter-input").value;

    renderProjectTable(
        filterProjects({
            projectData: projectData, keyword: filterText
        })
    );
};
// =====================================================================================
// END HANDLE DOM EVENTS !!
// =====================================================================================


function renderProjectTable(data) {
    document.getElementById("project-table").innerHTML = RenderProjectBodyAsTable({
        projectData: data
    });
}

// =====================================================================================
// HANDLE INITIAL EVENTS, TO LOAD DATA !!
// =====================================================================================
// load table with all data initially !!
renderProjectTable(projectData);
// =====================================================================================
// END HANDLE INITIAL EVENTS, TO LOAD DATA !!
// =====================================================================================