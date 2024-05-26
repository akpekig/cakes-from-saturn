set-node:
	(. ${NVM_DIR}/nvm.sh && nvm use) || (. ${NVM_DIR}/nvm.sh && nvm install)

install:
	yarn install

build:
	yarn build

dev:
	yarn dev

start:
	yarn start

generate-types:
	yarn run prisma generate

deploy-build: generate-types build

deploy-dev: generate-types dev

all: set-node install generate-types dev
