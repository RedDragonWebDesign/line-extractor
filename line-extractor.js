"use strict";

class LineExtractor {
	needle = "";
	haystack = "";
	newHaystack = "";
	output = "";
	
	constructor(needle, haystack) {
		this.needle = needle;
		this.haystack = haystack;
		
		if ( ! needle || ! haystack ) {
			newHaystack = haystack;
			return;
		}
		
		// figure out regex pattern
		let needleArray = needle.split("\n");
		let regExPattern = "";
		for ( let line of needleArray) {
			regExPattern += Helper.sanitizeRegEx(line) + "|";
		}
		regExPattern = Helper.chopRight(regExPattern, 1);
		regExPattern = new RegExp(regExPattern, 'i');
		console.log(regExPattern);
		
		// extract lines
		let haystackArray = haystack.split("\n");
		let newHaystack = "";
		let output = "";
		for ( let line of haystackArray ) {
			if ( line.search(regExPattern) !== -1 ) {
				output += line + "\n";
			} else {
				newHaystack += line + "\n";
			}
		}
		
		this.newHaystack = Helper.chopRight(newHaystack, 1);
		this.output = Helper.chopRight(output, 1);
	}
}

class Helper {
	static chopRight(string, length) {
		return string.slice(0, string.length - length);
	}
	
	/** Escapes RegEx special chars so that it can be included in a RegEx pattern without side effects -[]{}()*+?.,\^$|# whitespace */
	static sanitizeRegEx(text) {
		return text.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\$&');
	}
}

window.addEventListener('DOMContentLoaded', (e) => {
	let extractLines = document.getElementById('extract-lines');
	let needle = document.getElementById('needle');
	let haystack = document.getElementById('haystack');
	let output = document.getElementById('output');
	let clear = document.getElementById('clear');
	
	extractLines.addEventListener('click', function(e) {
		let lineExtractor = new LineExtractor(needle.value, haystack.value);
		output.value = lineExtractor.output;
		haystack.value = lineExtractor.newHaystack;
	});
	
	clear.addEventListener('click', function(e) {
		needle.value = "";
		haystack.value = "";
		output.value = "";
	});
});