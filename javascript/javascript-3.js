function getPath (element) {
  let el = element;
  let selector = '';
  let elId = '';
  let elClasses = '';
  let elTag = '';

  do {
    let nodeSelector = '';
    let elIndex = 0;

    elId = el.id.trim();
    elClasses = el.className.trim();
    elTag = el.tagName.toLowerCase();

    if (elId !== '') {
      nodeSelector = `#${elId}`;
    } else {
      if (elClasses !== '') {
        nodeSelector = `.${elClasses.replace(/\s+/gm, '.')}`
      } else {
        nodeSelector = elTag;
      }

      for (let currentEl = el; currentEl !== null; currentEl = currentEl.previousElementSibling) {
        elIndex++;
      }

      if (elIndex > 1) {
        nodeSelector = `${nodeSelector}:nth-child(${elIndex})`;
      }
    }

    selector = `${nodeSelector} ${selector}`;
    el = el.parentNode;
  } while (elId === '' && elTag !== 'body');

  return selector.trim();
}
