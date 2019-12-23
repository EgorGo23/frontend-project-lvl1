#!/usr/bin/env node

import { userName, brainGame } from '..';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');

const greeting = userName();
console.log(`Hello, ${greeting}`);

brainGame(greeting, 'brain-calc');
