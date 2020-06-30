// Copyright https://www.RedDragonWebDesign.com/
// Permission required to use or copy code. All rights reserved.

"use strict";

class LineExtractor {
	needle = "";
	haystack = "";
	newHaystack = "";
	output = "";
	
	constructor(needle, haystack, output) {
		this.needle = needle;
		this.haystack = haystack;
		this.output = output;
		
		if ( ! needle || ! haystack ) {
			this.newHaystack = haystack;
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
		output = "";
		for ( let line of haystackArray ) {
			if ( line.search(regExPattern) !== -1 ) {
				output += line + "\n";
			} else {
				newHaystack += line + "\n";
			}
		}
		
		this.newHaystack = Helper.chopRight(newHaystack, 1);
		
		if ( this.output && output ) this.output += "\n";
		this.output += Helper.chopRight(output, 1);
	}
}

class Helper {
	static chopRight(string, length) {
		return string.slice(0, string.length - length);
	}
	
	/** Escapes RegEx special chars so that they can be included in a RegEx pattern without side effects -[]{}()*+?.,\^$|#/ */
	static sanitizeRegEx(text) {
		return text.replace(/[-[\]{}()*+?.,\\^$|#/]/g, '\\$&'); // &$ = matched substring
	}
}

window.addEventListener('DOMContentLoaded', (e) => {
	let extractLines = document.getElementById('extract-lines');
	let needle = document.getElementById('needle');
	let haystack = document.getElementById('haystack');
	let output = document.getElementById('output');
	let clear = document.getElementById('clear');
	
	extractLines.addEventListener('click', function(e) {
		let lineExtractor = new LineExtractor(needle.value, haystack.value, output.value);
		output.value = lineExtractor.output;
		haystack.value = lineExtractor.newHaystack;
	});
	
	clear.addEventListener('click', function(e) {
		needle.value = "";
		haystack.value = "";
		output.value = "";
	});
});