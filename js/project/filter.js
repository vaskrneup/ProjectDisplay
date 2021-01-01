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
        ) {
            filteredProducts.push(product);
        }
    }

    return filteredProducts;
}
