import CharacterData from '../character-data/CharacterData.js';
import * as PropertySymbol from '../../PropertySymbol.js';
import NodeTypeEnum from '../node/NodeTypeEnum.js';

/**
 * CDATA section node.
 *
 * Only valid in XML documents.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CDATASection
 */
export default class CDATASection extends CharacterData {
	public [PropertySymbol.nodeType] = NodeTypeEnum.cdataSectionNode;
	public declare cloneNode: (deep?: boolean) => CDATASection;

	/**
	 * Node name.
	 *
	 * @returns Node name.
	 */
	public get nodeName(): string {
		return '#cdata-section';
	}

	/**
	 * Converts to string.
	 *
	 * @returns String.
	 */
	public toString(): string {
		return '[object CDATASection]';
	}

	/**
	 * @override
	 */
	public override [PropertySymbol.cloneNode](deep = false): CDATASection {
		return <CDATASection>super[PropertySymbol.cloneNode](deep);
	}
}
