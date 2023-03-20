# Services-Grid-Section
Here I model a services section for a website, the section includes a grid that can be sorted and pagination to take you to the next page of the view!

# Services Grid

The Services Grid is a web component that allows you to display a grid of services on your website. It includes features such as filtering by category and pagination, and can be customized to fit your specific design needs.
Installation

To use the Services Grid on your website, you will need to include the following files in your HTML:

```html

<link rel="stylesheet" href="services-grid.css">
<script src="services-grid.js"></script>
```
You will also need to create a container element for the grid and a set of filter buttons:

```html

<div id="services-grid-container"></div>
<div id="services-grid-filter">
  <button class="active">All</button>
  <button>Category 1</button>
  <button>Category 2</button>
  <button>Category 3</button>
</div>
```
Finally, you will need to create a JavaScript object containing the data for your services:

```js

const services = [
  {
    title: "Service 1",
    category: "Category 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    title: "Service 2",
    category: "Category 2",
    description: "Nullam ut nisi nec massa bibendum rhoncus vel vel felis."
  },
  // ...
];```

## Usage

To use the Services Grid, you simply need to call the populateGrid function with your services data and the ID of your container element:

```js

populateGrid(services, "services-grid-container");

You can also customize the number of services per page and the color scheme of the grid:
```
```js

const options = {
  itemsPerPage: 6,
  colors: {
    primary: "#3366CC",
    secondary: "#EEE"
  }
};

populateGrid(services, "services-grid-container", options);

The Services Grid also includes several built-in event handlers for filtering by category and navigating between pages:
```
```js

const filterButtons = document.querySelectorAll("#services-grid-filter button");
const pageButtonPrev = document.querySelector("#services-grid-paginator-prev");
const pageButtonNext = document.querySelector("#services-grid-paginator-next");
const pageNumber = document.querySelector("#services-grid-paginator-page-number");

filterButtons.forEach(button => {
  button.addEventListener("click", event => {
    filterServices(event, services, options);
  });
});

pageButtonPrev.addEventListener("click", () => {
  goToPreviousPage(services, options);
});

pageButtonNext.addEventListener("click", () => {
  goToNextPage(services, options);
});
```
## Customization

You can customize the appearance of the Services Grid by modifying the CSS rules in the services-grid.css file. For example, you can change the background color of the grid container like this:

```css

#services-grid-container {
  background-color: #EEE;
}
```
You can also modify the grid item layout and styling by adding or modifying CSS classes.
Conclusion

The Services Grid is a flexible and customizable web component that can help you display your services in an organized and visually appealing way. By using the provided JavaScript functions and CSS styles, you can easily integrate the Services Grid into your website and tailor it to your specific design needs.
