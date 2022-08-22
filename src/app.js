import { gsap } from 'gsap';
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";
// import Splitting from "splitting";
import { preloadImages } from './js/utils';
import { CursorText } from './js/cursor';
import { Slide } from './js/slide';
// import { Observer } from 'gsap/Observer.js';
// 
preloadImages('.slide__img-inner').then( _ => {
	console.log("listo");
	document.body.classList.remove('loading');
	

});

