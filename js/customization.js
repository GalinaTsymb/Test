import {parseUrl} from './modules/helpers.js';
import {tabsNavigation} from './modules/navi-tabs.js';

// Tabs Navigation functionality
tabsNavigation('.js-tabSwitchSelectors', '.js-tabPanelSelectors');


/**
 * show in tab [BUY FONTS] only info active font
 * @type {NodeListOf<HTMLElement>}
 */
let fontsList             = document.getElementsByName('fonts'); // all input (fonts)
let allPricesParent       = document.querySelector('.fonts-purchase-list');
let child                 = ([...allPricesParent.children]); // all list - info about every font

document.addEventListener('click', function(e) {

    //track pressing on radio button (select font)
    for (let i = 0; i < fontsList.length; i++) {
        //if radio button checked
        if (fontsList[i].type === "radio" && fontsList[i].checked) {
            //in tab [BUY FONTS] remove content
            const MESSAGE =  document.querySelector(".js-purchase-massage");
                  MESSAGE.classList.remove('js-tabPanelSelectors');
                  MESSAGE.removeAttribute("id");
            //Remove active state from all list - info about every font
             for(let y = 0; y < child.length; y++){
                 child[y].classList.remove('js-tabPanelSelectors');
                 child[y].removeAttribute("id");
                //Add active state information (only selected font) and show it in tab [BUY FONTS]
                if(fontsList[i].value === child[y].dataset.index){
                    child[y].classList.add('js-tabPanelSelectors');
                    child[y].id = "top";
                     tabsNavigation('.js-tabSwitchSelectors', '.js-tabPanelSelectors');
                  }
             }
        }
    }
});




/**
 * task 2
 * show work and performance function parseUrl
 * @type {number}
 */

const URLElement    = 'http://ffwagency.com/do/ani.php?a=1#foo';

let time_1          = performance.now();
let obj             = parseUrl(URLElement);
let time_2          = performance.now();

console.log("function performance is" + (time_2 - time_1) + " milliseconds.");

console.log("hash = ", obj.hash);
console.log("hostname =", obj.hostname);
console.log("pathname", obj.pathname);



