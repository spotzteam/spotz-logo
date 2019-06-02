const fs = require('fs');
const favicons = require('favicons');
const svg2favicons = require('svg2favicons');
const dotenv = require('dotenv');
dotenv.config();

const sourcePng = process.env.LOGO_DIR + 'spotz-logo.png'; // Source image(s). `string`, `buffer` or array of `string`
const sourceSvg = process.env.LOGO_DIR + 'spotz-logo.svg';

const sources = {
	src: process.env.LOGO_DIR + 'spotz-logo.png',
	dest: process.env.LOGO_DIR
};
const configuration = {
	path: '/', // Path for overriding default icons path. `string`
	appName: 'Spotz', // Your application's name. `string`
	appShortName: 'Spotz', // Your application's short_name. `string`. Optional. If not set, appName will be used
	appDescription: 'Keep track of and share your favorites spots', // Your application's description. `string`
	developerName: 'Dennis and Till', // Your (or your developer's) name. `string`
	developerURL: 'http://mySpotz.com', // Your (or your developer's) URL. `string`
	dir: 'auto', // Primary text direction for name, short_name, and description
	lang: 'en-US', // Primary language for name and short_name
	background: '#fff', // Background colour for flattened icons. `string`
	theme_color: '#fff', // Theme color user for example in Android's task switcher. `string`
	appleStatusBarStyle: 'black-translucent', // Style for Apple status bar: "black-translucent", "default", "black". `string`
	display: 'standalone', // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
	orientation: 'any', // Default orientation: "any", "natural", "portrait" or "landscape". `string`
	scope: '/', // set of URLs that the browser considers within your app
	start_url: '/?homescreen=1', // Start URL when launching the application from a device. `string`
	version: '1.0', // Your application's version string. `string`
	logging: false, // Print logs to console? `boolean`
	pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
	loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
	icons: {
		// Platform Options:
		// - offset - offset in percentage
		// - background:
		//   * false - use default
		//   * true - force use default, e.g. set background for Android icons
		//   * color - set background for the specified icons
		//   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
		//   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
		//   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
		//
		android: true, // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
		appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
		appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
		coast: true, // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
		favicons: true, // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
		firefox: true, // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
		windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
		yandex: true // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
	}
};
const callback = function(error, response) {
	if (error) {
		console.log(error.message); // Error description e.g. "An unknown error has occurred"
		return;
	}
	response.images.concat(response.files).map(file => {
		fs.writeFileSync(`${process.env.LOGO_DIR}${file.name}`, file.contents);
	});
};

favicons(sourcePng, configuration, callback);