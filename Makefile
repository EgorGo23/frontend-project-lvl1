install:
	npm install

start:
	npx babel-node src/bin/brain-games.js
	npx babel-node src/bin/brain-even.js
	npx babel-node src/bin/brain-calc.js

publication:
	npm publish --dry-run

lint:
	npx eslint src/index.js
