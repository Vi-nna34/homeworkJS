'use strict';

const styles = [ 'Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles.splice(1, 1, 'Класика');
styles.shift();
styles.unshift('Реп', 'Реггі');
console.log(styles);