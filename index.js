// eslint-disable-next-line import/extensions
import { DateTime } from './modules/luxon.js';
// eslint-disable-next-line import/extensions
import showBooks from './modules/Manipulation.js';

const date = document.querySelector('.date');
setInterval(() => {
  const now = DateTime.now();
  date.textContent = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);

showBooks();