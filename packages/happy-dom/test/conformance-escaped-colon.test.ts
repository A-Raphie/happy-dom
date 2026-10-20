import { beforeEach, describe, expect, it } from 'vitest';
import { Window } from '../../happy-dom/src/index.js';

const xml = '<?xml version="1.0"?><root xmlns:x="http://x"><x:child id="a"/><x:child id="b"/></root>';

describe('escaped-colon tag selectors (conformance #2529)', () => {
  let doc: any;
  let win: Window;
  beforeEach(() => {
    win = new Window();
    doc = new win.DOMParser().parseFromString(xml, 'text/xml');
  });

  it('matches escaped-colon tag via document.querySelectorAll', () => {
    expect(doc.querySelectorAll('x\\:child').length).toBe(2);
  });
  it('matches via Element.querySelector', () => {
    expect(doc.documentElement.querySelector('x\\:child')?.id).toBe('a');
  });
  it('matches via DocumentFragment.querySelectorAll', () => {
    const frag = doc.createDocumentFragment();
    frag.append(doc.createElement('x:child'));
    expect(frag.querySelectorAll('x\\:child').length).toBe(1);
  });
  it('matches in an HTML document', () => {
    const html = new win.DOMParser().parseFromString('<div><x:child id="c"/></div>', 'text/html');
    expect(html.querySelectorAll('x\\:child').length).toBe(1);
  });
});
