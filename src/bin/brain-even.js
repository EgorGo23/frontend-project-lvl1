#!/usr/bin/env node

import { userName, brainGame } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const greeting = userName();
console.log(`Hello, ${greeting}`);

brainGame(greeting, 'brain-even');
