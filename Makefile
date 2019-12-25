install:
	npm install

start:
	npx babel-node src/bin/brain-games.js
	npx babel-node src/bin/brain-even.js
	npx babel-node src/bin/brain-calc.js
	npx babel-node src/bin/brain-gcd.js
	npx babel-node src/bin/brain-progression.js
	npx babel-node src/bin/brain-prime.js

even:
	npx babel-node src/bin/brain-even.js
calc:
	npx babel-node src/bin/brain-calc.js
gcd:
	npx babel-node src/bin/brain-gcd.js
progression:
	npx babel-node src/bin/brain-progression.js
prime:
	npx babel-node src/bin/brain-prime.js

publication:
	npm publish --dry-run

lint:
	npx eslint src/index.js
