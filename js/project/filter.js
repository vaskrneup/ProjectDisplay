export const filterProjects = ({projectData, keyword}) => {
    const filteredProducts = [];
    keyword = keyword.toLocaleString();

    for (let i = 0; i < projectData.length; i++) {
        const product = projectData[i];

        if (product.title.toLowerCase().includes(keyword) || product.assignmentType.includes(keyword)) {
            filteredProducts.push(product);
        }
    }

    return filteredProducts;
}
