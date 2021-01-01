import {RenderProjectBodyAsTable} from "./project/renderer.js";


document.getElementById("project-table").innerHTML = RenderProjectBodyAsTable({
    projectData: [
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
});
