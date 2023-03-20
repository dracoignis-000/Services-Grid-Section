
const services = [
    { title: "Service 1", category: "Design" },
    { title: "Service 2", category: "Development" },
    { title: "Service 3", category: "Marketing" },
    { title: "Service 4", category: "Design" },
    { title: "Service 5", category: "Development" },
    { title: "Service 6", category: "Marketing" },
    { title: "Service 7", category: "Design" },
    { title: "Service 8", category: "Development" },
    { title: "Service 9", category: "Marketing" }
];

const gridContainer = document.querySelector(".grid-container");
const filterButtons = document.querySelectorAll(".filter-button");
const pageButtonPrev = document.querySelector(".prev-button");
const pageButtonNext = document.querySelector(".next-button");
const pageNumber = document.querySelector(".page-number");

let currentCategory = "All";
let currentPage = 1;
let itemsPerPage = 6;
let totalPages = Math.ceil(services.length / itemsPerPage);
let currentPageIndex = 0;

function populateGrid() {
    let startIndex = currentPageIndex * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let filteredServices = services.filter(service => {
        return currentCategory === "All" || service.category === currentCategory;
    });
    let servicesToDisplay = filteredServices.slice(startIndex, endIndex);

    gridContainer.innerHTML = "";

    servicesToDisplay.forEach(service => {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.textContent = service.title;
        gridContainer.appendChild(gridItem);
    });
}

function updatePaginator() {
    pageButtonPrev.disabled = currentPageIndex === 0;
    pageButtonNext.disabled = currentPageIndex === totalPages - 1;
    pageNumber.textContent = currentPageIndex + 1;
}

function filterServices(event) {
    currentCategory = event.target.textContent;
    filterButtons.forEach(button => {
        button.classList.remove("active");
    });
    event.target.classList.add("active");
    currentPageIndex = 0;
    totalPages = Math.ceil(services.filter(service => {
        return currentCategory === "All" || service.category === currentCategory;
    }).length / itemsPerPage);
    populateGrid();
    updatePaginator();
}

function goToPreviousPage() {
    currentPageIndex--;
    populateGrid();
    updatePaginator();
}

function goToNextPage() {
    currentPageIndex++;
    populateGrid();
    updatePaginator();
}

filterButtons.forEach(button => {
    button.addEventListener("click", filterServices);
});

pageButtonPrev.addEventListener("click", goToPreviousPage);
pageButtonNext.addEventListener("click", goToNextPage);

populateGrid();
updatePaginator();



