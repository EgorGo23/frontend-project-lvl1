install:
	npm install

start:
	npx babel-node src/bin/Games/brain-games.js
	npx babel-node src/bin/Games/brain-even.js
	npx babel-node src/bin/Games/brain-calc.js
	npx babel-node src/bin/Games/brain-gcd.js
	npx babel-node src/bin/Games/brain-progression.js
	npx babel-node src/bin/Games/brain-prime.js

even:
	npx babel-node src/bin/Games/brain-even.js
calc:
	npx babel-node src/bin/Games/brain-calc.js
gcd:
	npx babel-node src/bin/Games/brain-gcd.js
progression:
	npx babel-node src/bin/Games/brain-progression.js
prime:
	npx babel-node src/bin/Games/brain-prime.js

publication:
	npm publish --dry-run

lint:
	npx eslint src/index.js
