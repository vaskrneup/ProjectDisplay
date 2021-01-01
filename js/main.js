import {RenderProjectBodyAsTable} from "./project/renderer.js";
import {filterProjects, sortProjects} from "./project/filter.js";

export const projectData = [
    {
        date: new Date(2020, 11, 31),
        title: "Test Project ",
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

function createMockData() {
    for (let i = 100; i > 1; i--) {
        projectData.push({
            date: new Date(2020, 11, i),
            title: i.toString(),
            assignmentType: "Github Pages Test Project-" + i.toString(),
            demo: {
                url: "https://vaskrneup.github.io/test-project/",
                text: "Demo"
            },
            repository: {
                url: "https://github.com/vaskrneup/test-project",
                text: "Review Code"
            }
        })
    }
}

createMockData();
// =====================================================================================
// END SUPPORTER FUNCTIONS !!
// =====================================================================================
const updateSortedTable = ({projectData, column, order = "asc"}) => {
    renderProjectTable(
        sortProjects({
            projectData: projectData,
            field: column,
            order: order
        })
    )
}
// =====================================================================================
// SUPPORTER FUNCTIONS !!
// =====================================================================================


// =====================================================================================
// HANDLE DOM EVENTS !!
// =====================================================================================
// For search and filter feature !!
document.getElementById("additional-feature__form").onsubmit = function (e) {
    e.preventDefault();
    const filterText = document.getElementById("filter-input").value;

    renderProjectTable(
        filterProjects({
            projectData: projectData, keyword: filterText
        })
    );
};
// END search and filter feature !!

// For sort feature !!
document.getElementById("table__date").onclick = () => updateSortedTable({
    projectData: projectData,
    order: "asc",
    column: "date"
})
document.getElementById("table__title").onclick = () => updateSortedTable({
    projectData: projectData,
    order: "asc",
    column: "title"
})
document.getElementById("table__assignmentType").onclick = () => updateSortedTable({
    projectData: projectData,
    order: "asc",
    column: "assignmentType"
})
document.getElementById("table__demo").onclick = () => updateSortedTable({
    projectData: projectData,
    order: "asc",
    column: "demo"
})
document.getElementById("table__repository").onclick = () => updateSortedTable({
    projectData: projectData,
    order: "asc",
    column: "repository"
})
// END sort feature !!

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