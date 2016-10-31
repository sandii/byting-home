{

const text = 'Tiger, tiger, burning bright/In the forests of the night,/What immortal hand or eye/Could frame thy fearful symmetry?/Hello World!';
const arr = text.split('');
const len = text.length;
const cursor = '<span class="cursor"></span>';
const cursorBlink = '<span class="cursor blink"></span>';

let out = '';
let count = 0;
let write = (t, blink) => {
	out += t;
	let end = blink ? cursorBlink : cursor;
	document.body.innerHTML = out + end;
};
let read = () => {
	let letter = arr[count];
	let delay = 60;
	let blink = false;
	if (letter === '/') {
		letter = '<br>'
	}
	if (['.', '!', '?', '/'].includes(letter)) {
		delay = 1000;
		blink = true;
	}
	write(letter, blink);
	count++;
	if (count === len) return;
	setTimeout(read, delay);
};
read();

}