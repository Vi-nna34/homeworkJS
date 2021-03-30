'use strict';

const Maxim = 55;
if (Maxim <= 16) {
    console.log('child');
} else if (Maxim > 16 && Maxim <= 60) {
    console.log('adult');
} else if (Maxim > 61 && Maxim <= 100) {
    console.log('retiree');
}