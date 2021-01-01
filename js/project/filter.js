import {dateDisplayOptions, locale} from "../settings.js";

export const filterProjects = ({projectData, keyword}) => {
    const filteredProducts = [];
    keyword = keyword.toLowerCase();

    for (let i = 0; i < projectData.length; i++) {
        const product = projectData[i];

        if (
            product.title.toLowerCase().includes(keyword) || product.assignmentType.toLowerCase().includes(keyword)
            || product.demo.text.toLowerCase().includes(keyword) || product.demo.url.toLowerCase().includes(keyword)
            || product.repository.text.toLowerCase().includes(keyword) || product.repository.url.toLowerCase().includes(keyword)
            || product.date.toLocaleDateString(locale, dateDisplayOptions).toString().toLowerCase().includes(keyword)
            || product.pk.toLowerCase().includes(keyword)
        ) {
            filteredProducts.push(product);
        }
    }

    return filteredProducts;
}


export const sortProjects = ({projectData, field, order = "asc"}) => {
    const toSortProjectData = projectData;
    const _order = order === "asc" ? 1 : -1;

    toSortProjectData.sort((a, b) => {
        if (field === "demo" || field === "repository") {
            a = a[field];
            b = b[field];

            if (a["url"] > b["url"]) return _order;
            else if (a["url"] < b["url"]) return -1 * _order;
            else return 0;
        } else {
            if (a[field] > b[field]) return _order;
            else if (a[field] < b[field]) return -1 * _order;
            else return 0;
        }
    });

    return toSortProjectData;
}
