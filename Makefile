set-node:
	. ${NVM_DIR}/nvm.sh && nvm use || . ${NVM_DIR}/nvm.sh && nvm install

install:
	npm install

build:
	npm run build

dev:
	npm run dev

start:
	npm run start

generate-types:
	npx prisma generate

all: set-node install generate-types build dev
