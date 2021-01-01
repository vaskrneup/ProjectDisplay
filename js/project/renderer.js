import {locale, dateDisplayOptions} from "../settings.js";


export const RenderProjectBodyAsTable = ({projectData}) => {
    let out = ``;

    for (let i = 0; i < projectData.length; i++) {
        const product = projectData[i];

        out += `
            <tr>
                <td>${product.date.toLocaleDateString(locale, dateDisplayOptions)}</td>
                <td>${product.title}</td>
                <td>${product.assignmentType}</td>
                <td>
                    <a href="${product.demo.url}" target="_blank">${product.demo.text}</a>
                </td>
                <td>
                    <a href="${product.repository.url}" target="_blank">${product.repository.text}</a>
                </td>
            </tr>
        `
    }

    return out;
}