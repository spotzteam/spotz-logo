const fs = require('fs');
const { parse } = require('node-html-parser');
const { convertFile } = require('convert-svg-to-png');
const dotenv = require('dotenv');
dotenv.config();

const INDEX_FILE = process.env.INDEX_FILE;
const LOGO_DIR = process.env.LOGO_DIR;
const SVG_FILE = LOGO_DIR + 'spotz-logo.svg';

// Copy the HTML file from the origin to the target dir
fs.copyFileSync(INDEX_FILE, LOGO_DIR + 'spotz_logo.html');

// Read index.html file that contains the svg
const index = fs.readFileSync(INDEX_FILE).toString('utf8');
const root = parse(index);

// Extract the svg
const svgElement = root.querySelector('svg');
//console.log('svg: ', svgElement.toString());

// Save the svg
fs.writeFileSync(SVG_FILE, svgElement.toString());

// Transfor the svg in png
const convertOptions = { height: 2000 };
convertFile(SVG_FILE, convertOptions);
