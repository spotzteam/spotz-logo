const ejs = require('ejs');

const templateStr = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<svg xmlns:dc="http://purl.org/dc/elements/1.1/" 
	xmlns:cc="http://creativecommons.org/ns#" 
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
	xmlns:svg="http://www.w3.org/2000/svg" 
	xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 75" width="100" heigh="150">
	<defs>
		<clipPath id="clipPath">
			<path d="M 25 0 a25 25 0 0 0 -25 25 c0 22.5 25 50 25 50 s25 -27.5 25 -50 a25 25 0 0 0 -25 -25 z m0 25 a5 5 0 1 1 5 -5 a 5 5 0 0 1 -5 5 z"></path>
		</clipPath>
		<filter id="blurMe">
			<feGaussianBlur in="SourceGraphic" stdDeviation="1"></feGaussianBlur>
		</filter>
	</defs>
	<path fill-opacity="0" stroke-width="0" d="M 25 0 a25 25 0 0 0 -25 25 c0 22.5 25 50 25 50 s25 -27.5 25 -50 a25 25 0 0 0 -25 -25 z m0 25 a5 5 0 1 1 5 -5 a 5 5 0 0 1 -5 5 z" data-name="marker" style="stroke: black;"></path>
	<g clip-path="url(#clipPath)" filter="url(#blurMe)">
		<g>
			<circle cx="19" cy="15" r="9" fill="#6C3A2D" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="10s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="28" cy="3" r="15" fill="#0C845E" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="44" cy="19" r="15" fill="#51B765" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="8s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="15" cy="56" r="8" fill="#B93247" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="27" cy="34" r="12" fill="#4430D5" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="8s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="29" cy="2" r="18" fill="#10BB35" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="16" cy="11" r="11" fill="#ED4D04" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="8s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="18" cy="26" r="15" fill="#B87A9E" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="10s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="4" cy="45" r="16" fill="#52DB64" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="7s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="30" cy="14" r="25" fill="#1F6DC4" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="10s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="34" cy="36" r="22" fill="#E5C1C7" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="9s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="22" cy="43" r="16" fill="#078F6C" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="40" cy="50" r="4" fill="#DF6A16" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="9s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="32" cy="10" r="16" fill="#A1D66A" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="29" cy="30" r="5" fill="#F2355E" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="38" cy="73" r="13" fill="#B65DBF" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="10" cy="69" r="3" fill="#1C6A0E" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="7s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="37" cy="1" r="15" fill="#37D8FA" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="22" cy="17" r="5" fill="#AF627B" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="42" cy="1" r="5" fill="#554EAF" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="42" cy="63" r="25" fill="#F533BF" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="7s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="33" cy="7" r="3" fill="#6B9B1E" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="11" cy="27" r="15" fill="#65480D" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="15" cy="39" r="6" fill="#5F281C" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="7s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="38" cy="10" r="3" fill="#3AF245" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="10" cy="51" r="16" fill="#A3F331" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="7s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="40" cy="47" r="12" fill="#6ECDCF" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="10s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="6" cy="66" r="13" fill="#2E1F0B" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="35" cy="48" r="21" fill="#FAD026" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="7s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="7" cy="58" r="25" fill="#CB6174" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="10s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="45" cy="45" r="3" fill="#062668" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="33" cy="29" r="25" fill="#DAD144" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="30" cy="0" r="17" fill="#E88ED3" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="7s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="34" cy="16" r="23" fill="#91C66E" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="10s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="17" cy="12" r="15" fill="#33E0A0" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="8s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="38" cy="2" r="15" fill="#52F4C7" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="10s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="45" cy="25" r="16" fill="#B78DEE" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="30" cy="6" r="14" fill="#63E53C" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="29" cy="72" r="17" fill="#86E93E" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="10s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="31" cy="71" r="5" fill="#5971DA" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="9s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="7" cy="70" r="17" fill="#D2B035" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="10s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="50" cy="43" r="25" fill="#760A55" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="28" cy="55" r="18" fill="#68153F" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="22" cy="75" r="16" fill="#83B4B0" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="23" cy="9" r="11" fill="#76A3BB" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="25" cy="22" r="2" fill="#88A91F" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="7s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="36" cy="0" r="16" fill="#74965C" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="37" cy="47" r="13" fill="#EB6050" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="9s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="9" cy="67" r="5" fill="#BFDD4C" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite"></animate>
			</circle>
		</g>
		<g>
			<circle cx="24" cy="75" r="19" fill="#BD6F3A" opacity="0">
				<animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"></animate>
			</circle>
		</g>
	</g>
</svg>`;

const data = {};
const options = {};

console.log(ejs.render(templateStr, data, options));
