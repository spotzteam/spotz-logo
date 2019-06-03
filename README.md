# spotz-logo

![spotz](logos/apple-touch-startup-image-320x460.png)

The logo of the spotz

## How to use the Spotz logo

The spotz logo module offers the logoi in all required formats togetrher with HTML snippets that refer to the different logo versions for different browsers, OSs, resolutions etc.

To install

```bash
npm install --save git+https://github.com/spotzteam/spotz-logo.git
```

In order to make the logo versions available to your application, you need to copy them from the `node_modules/spotz-logo/logos` into the folder from which they are served by your application. In an express application this often is the `public` folder.

The easiest way to do this is with a `postinstall` script within your `package.json`:

```json
{
	"name": "foo",
	"scripts": {
		"start": "node server.js",
		"postinstall": "cp node_modules/spotz-logo/logos/* $INIT_CWD/public"
	},
	"dependencies": {
		"spotz-logo": "git+https://github.com/spotzteam/spotz-logo.git"
	}
}
```

This way, when running `npm install` all therequired files are copied into your project.

**Note** The files are only copied when you run `npm install`! Running `npom install package-xyz` does **not** execute the `postinstall` script!

If you are using a React application that has been created with `create-react-app` there is not much to do: The `index.html` references a `manifest.json` that is overwritten by the copied directory. And the new `manifest.json` references all the different versions and sizes of the Spotz Logo.

## The inner working

In order to produce the logo a series of steps are performed:

### Producing the logo

The _root_-logo is a SVG that is created using React: The snippets of the SVG description are _calculated_ and then a React element is created.

This element is then rendered and generates a HTML file.

### Extracting the logo

Unfortunately React creates a complete HTML file that contains the svg logo. From this HTML file another program (node) extracts the `<svg>...</svg>` part and saves it in an extra file. That's the `spotz-logo.svg`, the root of the following transformations.

The extract step also generates the `spotz-logo.png` that will be the source for the other image versions.

### Creating favicon and other formats

In the last step the 'spotz-logo.png' is transformed and renamned into a series of other formats. Amongst others there is the `favicon.ico`, but there are aproximately 55 other formats that are generated.
