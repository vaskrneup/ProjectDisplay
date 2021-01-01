import {RenderProjectBodyAsTable} from "./project/renderer.js";
import {filterProjects, sortProjects} from "./project/filter.js";

// =====================================================================================
// VARS !!
// =====================================================================================s
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
];
export const sortMapper = {
    date: "asc",
    title: "asc",
    assignmentType: "asc",
    demo: "asc",
    repository: "asc"
}
export let activeProjectData = projectData;
// =====================================================================================
// END VARS !!
// =====================================================================================


// =====================================================================================
// UTILITY FUNC !!
// =====================================================================================
function createMockData() {
    for (let i = 100; i > 1; i--) {
        projectData.push({
            date: new Date(2020, 11, i),
            title: i.toString(),
            assignmentType: "Github Pages Test Project-" + i.toString(),
            demo: {
                url: "https://vaskrneup.github.io/test-project/" + i.toString(),
                text: "Demo" + i.toString()
            },
            repository: {
                url: "https://github.com/vaskrneup/test-project" + i.toString(),
                text: "Review Code" + i.toString()
            }
        });
    }
}

const updateSortMapper = ({name}) => {
    sortMapper[name] = sortMapper[name] === "asc" ? "dec" : "asc";
}

createMockData();
// =====================================================================================
// END UTILITY FUNC !!
// =====================================================================================

// =====================================================================================
// END SUPPORTER FUNCTIONS !!
// =====================================================================================
const updateSortedTable = ({column}) => {
    updateSortMapper({name: column});

    activeProjectData = sortProjects({
        projectData: activeProjectData,
        field: column,
        order: sortMapper[column]
    });

    renderProjectTable(
        activeProjectData
    );
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
    activeProjectData = filterProjects({
        projectData: projectData, keyword: filterText
    });

    renderProjectTable(activeProjectData);
};
// END search and filter feature !!

// For sort feature !!
document.getElementById("table__date").onclick = () => updateSortedTable({column: "date"});
document.getElementById("table__title").onclick = () => updateSortedTable({column: "title"});
document.getElementById("table__assignmentType").onclick = () => updateSortedTable({column: "assignmentType"});
document.getElementById("table__demo").onclick = () => updateSortedTable({column: "demo"});
document.getElementById("table__repository").onclick = () => updateSortedTable({column: "repository"});
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
renderProjectTable(activeProjectData);
// =====================================================================================
// END HANDLE INITIAL EVENTS, TO LOAD DATA !!
// =====================================================================================