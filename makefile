# Variables
NPM = npm
SRC_PROJECT = ./app

# Targets
.PHONY: all

install: 
	cd $(SRC_PROJECT) && $(NPM) install
	
# Execute
run:
# > make run webapi
ifeq (dev, $(filter dev,$(MAKECMDGOALS)))
	cd $(SRC_PROJECT) && $(NPM) run dev
endif