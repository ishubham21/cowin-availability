# Vaccine Availability

The main aim of this application is to show the availability of Covid-19 vaccines in India. All you have to do is put in your area PIN code, select the date and Voila! You can now see different centers, vaccine availability, center address, fee and much more.

This app is powered by [CoWin's public API](https://apisetu.gov.in/public/marketplace/api/cowin) and makes use of the 'axios' module to perform API calls.

## Running the app

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version

    $ npm --version

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/ishubham21/cowin-availability
    $ cd cowin-availability
    $ yarn install

## Running the project

    $ yarn start

## To run the application, open your browser and in the address bar type:

    $ http://localhost:8000


