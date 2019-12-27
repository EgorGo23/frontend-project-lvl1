install:
	npm install

start:
	npx babel-node src/bin/games/brain-games.js
	npx babel-node src/bin/games/brain-even.js
	npx babel-node src/bin/games/brain-calc.js
	npx babel-node src/bin/games/brain-gcd.js
	npx babel-node src/bin/games/brain-progression.js
	npx babel-node src/bin/games/brain-prime.js

even:
	npx babel-node src/bin/games/brain-even.js
calc:
	npx babel-node src/bin/games/brain-calc.js
gcd:
	npx babel-node src/bin/games/brain-gcd.js
progression:
	npx babel-node src/bin/games/brain-progression.js
prime:
	npx babel-node src/bin/games/brain-prime.js

publication:
	npm publish --dry-run

lint:
	npx eslint src/index.js
