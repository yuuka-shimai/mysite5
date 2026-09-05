import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  const table = block.querySelector('table');
  const tableRow = table ? table.closest(':scope > div') : null;
  const titleRow = [...block.children].find((row) => row !== tableRow);

  if (titleRow && titleRow.textContent.trim()) {
    const heading = document.createElement('h3');
    moveInstrumentation(titleRow, heading);
    heading.append(...titleRow.childNodes);
    titleRow.replaceWith(heading);
  }

  if (table && tableRow) {
    moveInstrumentation(tableRow, table);
    tableRow.replaceWith(table);
  }
}
