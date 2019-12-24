#!/usr/bin/env node

import { userName, brainGame } from '..';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');

const greeting = userName();
console.log(`Hello, ${greeting}`);

brainGame(greeting, 'brain-gcd');
