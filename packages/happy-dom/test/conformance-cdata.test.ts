import { beforeEach, describe, expect, it } from 'vitest';
import { Window } from '../../happy-dom/src/index.js';

describe('CDATASection conformance (#2529)', () => {
	let win: Window;
	let xmlDoc: Document;
	let htmlDoc: Document;

	beforeEach(() => {
		win = new Window();
		xmlDoc = new win.DOMParser().parseFromString('<?xml version="1.0"?><root/>', 'text/xml');
		htmlDoc = win.document.implementation.createHTMLDocument('title');
	});

	it('creates a CDATASection with correct node type in an XML document', () => {
		const node = xmlDoc.createCDATASection('data');
		expect(node.nodeType).toBe(4); // CDATA_SECTION_NODE
		expect(node.data).toBe('data');
	});

	it('returns a node owned by the creating XML document', () => {
		const node = xmlDoc.createCDATASection('data');
		expect(node.ownerDocument).toBe(xmlDoc);
	});

	it('throws NotSupportedError when creating CDATA in an HTML document', () => {
		expect(() => htmlDoc.createCDATASection('data')).toThrow();
	});
});
