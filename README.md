# spotz-logo
The logo of the spotz

## How it works

**To produce the logo** 

The _root_-logo is a SVG that is created using React: The snippets of the SVG description are _calculated_ and then a React element is created. 

This element is then rendered and generates a HTML file. From this HTML file another program (node) extracts the `<svg>...</svg>` part and saves it in an extra file. That's the `spotz-logo.svg`, the root of the following transformations.

