// Define globally exposed module objects
/* eslint-disable */

import alert from 'bootstrap/js/src/alert.js';
import button from 'bootstrap/js/src/button.js';
import carousel from 'bootstrap/js/src/carousel.js';
import collapse from 'bootstrap/js/src/collapse.js';
import dropdown from 'bootstrap/js/src/dropdown.js';
import index from 'bootstrap/js/src/index.js';
import modal from 'bootstrap/js/src/modal.js';
import popover from 'bootstrap/js/src/popover.js';
import scrollspy from 'bootstrap/js/src/scrollspy.js';
import tab from 'bootstrap/js/src/tab.js';
import tooltip from 'bootstrap/js/src/tooltip.js';
import util from 'bootstrap/js/src/util.js';

// Define local components
import navigation from './components/navigation';
import content from './components/content';
import sitemap from './components/sitemap';
import search from './components/search';
import form from './components/form';
import img from './components/img';

navigation();
content();
sitemap();
search();
form();
img();
/* eslint-enable */
