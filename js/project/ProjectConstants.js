const baseHostUrl = "https://vaskrneup.github.io"; // type: host
const baseGithubUrl = "https://github.com/vaskrneup" // type: raw


// base url must not end with `/` !!
// path must start with `/` !!
function getBaseUrl({path, type, baseUrl}) {
    if (type === "host") return `<a href="${baseHostUrl}${path}">See Live</a>`;
    else if (type === "raw") return `<a href="${baseGithubUrl}${path}">Review Code</a>`;
    else return `${baseUrl}${path}`
}

// interface Project {
//      date: Date,
//      title: String,
//      assignmentType: String,
//      hostedUrl: String,
//      repositoryUrl: String,
// }
// contains the list of projects !!
export const projects = [
    {
        date: new Date(2020, 12, 31).toLocaleDateString("en-US", {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        title: "First Test Project",
        assignmentType: "Test Assignment",
        hostedUrl: getBaseUrl({path: "/test-project/", type: "host"}),
        repositoryUrl: getBaseUrl({path: "/test-project/", type: "raw"})
    },
];


function __getProjectsAsList() {
    const projectGrid = []

    for (const row in projects) {
        // noinspection JSUnfilteredForInLoop
        const projectData = projects[row];
        const rowList = [];

        for (const project in projectData) {
            rowList.push(projectData[project]);
        }
        projectGrid.push(rowList)
    }

    return projectGrid;
}

export const projectAsList = __getProjectsAsList();
