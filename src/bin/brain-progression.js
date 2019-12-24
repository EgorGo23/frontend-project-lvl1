#!/usr/bin/env node

import { userName, brainGame } from '..';

console.log('Welcome to the Brain Games!');
console.log('What number is missing in the progression?');

const greeting = userName();
console.log(`Hello, ${greeting}`);

brainGame(greeting, 'brain-progression');