# Delivrier

<p align="center">
  <img 
  alt="Delivrier Logo"
  width="300" src="/delivrier-frontend/src/assets/delivrier-logo.png">
</p>

## Intro

Delivrier is a courrier and package delivery platform. Works in all USA territory. It provides particular services in their area, like a tracking service for the shippings in their page or by a bot in Telegram.

### Written in:
- Vue.JS (Client side)
- Nest.JS (Server side)

### Integrations:
- TypeORM (Database integration)
- SendGrid (Email service)
- POEditor (Standar i18n)
- LocationIQ (Simulation and generation of routes)
- Firebase (Login with Google and Facebook accounts)
- Telegram (Shipments tracking service)

## Index
- [Installation Guide](#instalation-guide)
  - [Requirements](#requirements)
  - [Database](#database)
  - [Backend](#backend)
  - [Fronend](#frontend)
  - [Telegram](#telegram)
- [Authors and acknowledgment](#authors-and-acknowledgment)
  - [Team 3](#team-3)
  - [Colaborators from Consortium 2](#colaborators-from-consortium-2)

## Instalation Guide

### Requirements
- NodeJS and NPM
- PostgreSQL
- Vue CLI
- Nest CLI

After you got the requirements, download this repository, you can do it by executing the command: 
```bash
git clone https://github.com/ingswucab/consorcio2-delivrier.git
```
Or download this project like a zip in GitHub in the option **Clone or Download** if you prefer or you don't have git in your PC

### Database
1. Create a new database in PosgreSQL, we recomend the name "delivrier-c2" for that database, but you can called you preffer
2. Open the root of the project with the **File Explorer** and go to */delivrier-backend/db/scripts/*, there, you must see 3 files (*create.sql*,*insert.sql*, and *drop.sql*) 
3. Open the file *create.sql*, their content is the creates of the database, go to the database just you created and run that scripts.
4. Open the file *insert.sql*, their content is the inserts to got the database in their initial state to use the Delivrier aplication, go again to the database and now run this scripts.

After this, you will got the database ready to run the project

> **IMPORTANT**: Don't try to run the back-end or the front-end before this steps, that will produce errors in the compilation of the back-end application, and, if the back-end fail, the front-end can't respond in the best way

### Backend
1. Open a new terminal in the root of the project and execute the next command (is equal if you're on Windows or Linux):
```bash
cd ./delivrier-backend
```
2. Now, install the dependencies of the project with the next NPM command and await for the end of the download:
```bash
npm install
```
3. While you await the finish of the instalation, you can create this 2 files in the shoulder /delivrier-backend
- *ormconfig.json*: 
The *ormconfig.json* is the file where TypeORM got the information to connect our project with the database, so, create a new file with this name, and write the next structure in that file:
```bash
{
  "type": "<NAME_OF_DBMS>",
  "host": "<HOST_WHERE_THE_DATABASE_IS>",
  "port": <DATABASE_NUMBER_PORT>,
  "username": "DATABASE_USERNAME",
  "database": "DATABASE_NAME",
  "password": "USER_PASSWORD",
  "entities": ["dist/entities/**.entity{.ts,.js}"]
}
```
> **IMPORTANT**: Where you see the <> is where you put the information about your database, the attribute "entities" stays equal, DON'T CHANGE IT, don't remove or add "" in the structure, only change the information between the <> (include this <>) for the information of your database
- *.env*: 
The *.env* is the file where we stored data like a Api Keys for some services that was integrated in the back-end (SendGrid, POEditor) or information for the generation or validation of JWT, so, create a new file with this name and write the next structure in that file:
```bash
JWT_SECRET=""
JWT_EXPIRE=""
SENDGRID_API_KEY=""
SENDGRID_ADDRESS_FROM=""
SENDGRID_WELCOME_EMAIL=""
SENDGRID_INVOICE_EMAIL=""
POE_EDITOR_API_KEY=""
POE_EDITOR_PROJECT_ID=""
TELEGRAM_API_TOKEN=
```
Now, for security reasons, contact with the Delivrier team to the data for this file
> **IMPORTANT**: When you recibe the data, put it inside the "", DON'T DELETE IT
4. Now, after the download of the node modules is over, and you created and complete the files *.env* and *ormconfig.json*, you are ready for execute the project, in the terminal you opened for this in the beginning, on the folder **./delivrier-backend** execute the next comand to run the application:
```bash
npm start
```
- If you prefer, and you go to the development in the project, you can run this other command to run the back-end and and facilitate development
```bash
npm run start:dev
```
Now, wait until you see something like this in the terminal:
```bash
Delivrier-Back-End is running on: http://[::1]:3000
```
> **IMPORTANT**: Don't try to run the front-end before the back-end, that can make the front-end can't respond in the best way

### Frontend
1. Open a new terminal in the root of the project (apart from the other terminal that we created for the back-end) and execute the next command (is equal if you're on Windows or Linux):
```bash
cd ./delivrier-frontend
```
2. Now, install the dependencies of the project with the next NPM command and await for the end of the download:
```bash
npm install
```
3. While you await the finish of the instalation, you can create this file in the shoulder /delivrier-frontend
- *.env.local*
The *.env.local* is like a *.env* file you created in the back-end, but, this is for the front-end, in this we stored data like a Api Keys for some services that was integrated in the front-end (Firebase, LocationIQ) and another information for the front-end, so, create a new file with this name and write the next structure in that file:
```bash
VUE_APP_DELIVRIER_API=""
VUE_APP_API_KEY=""
VUE_APP_AUTH_DOMAIN=""
VUE_APP_DATABASE_URL=""
VUE_APP_PROJECT_ID=""
VUE_APP_STORAGE_BUCKET=""
VUE_APP_MESSAGING_SENDER_ID=""
VUE_APP_APP_ID=""
VUE_APP_LOCATION_IQ_URL_ADDRESS=""
VUE_APP_LOCATION_IQ_URL_ROUTE=""
VUE_APP_LOCATION_IQ_TOKEN=""
VUE_APP_IP=""
```
Now, for security reasons, contact with the Delivrier team to the data for this file
> **IMPORTANT**: When you recibe the data, put it inside the "", DON'T DELETE IT
4. Now, after the download of the node modules is over, and you created and complete the files *.env* and *ormconfig.json*, you are ready for execute the project, in the terminal you opened for this in the beginning, on the folder **./delivrier-backend** execute the next comand to run the application:
```bash
npm run serve
```
Now, wait until you see something like this in the terminal:
```bash
App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://<YOUR_IP_ADDRESS>:8080/
```
> **INFO**: When you saw this in the terminal, please, contact with the Delivrier Team and provides the information the IP direction that will appear in the part <YOUR_IP_ADDRESS>, this information is important for login with Firebase.

### Telegram
- Open a Telegram account
- In contact on telegram find the name of the bot: @myDelivirerBot
- Press the start button in the Telegram chat with the bot
- Write the command /PackageCheck ######## where the '#' represent the 8 numbers of the tracking id

## Authors and acknowledgment

### Team 3

<p>
  <img
    alt="Luis Fuentes Github Avatar" 
    width="80" 
    src="https://github.com/LuisRFuentes.png?size=80">
    <img
      alt="Diego Gutierrez Github Avatar" 
    width="80" 
    src="https://github.com/Dagutierrez14.png?size=80">
    <img
      alt="Anthony Rodriguez Github Avatar" 
    width="80" 
    src="https://github.com/thonygrz.png?size=80">
</p>

Luis Fuentes [@LuisRFuentes](https://github.com/LuisRFuentes)  
Diego Gutierrez [@Dagutierrez14](https://github.com/Dagutierrez14)  
Anthony Rodríguez [@thonygrz](https://github.com/thonygrz)

### Colaborators from Consortium 2

<p>
  <img
    alt="Angel Sucasas Github Avatar" 
    width="40" 
    src="https://github.com/angelsucasas.png?size=40">
    <img
    alt="Gabriel Ortega Github Avatar" 
    width="40" 
    src="https://github.com/GabrielOrtegaUCAB.png?size=40">
    <img
    alt="Andrea Da Github Avatar" 
    width="40" 
    src="https://github.com/avdasilvab25.png?size=40">
    <img
    alt="Michelle Alleyne Github Avatar" 
    width="40" 
    src="https://github.com/michellealleyne.png?size=40">
    <img
      alt="Alejandro Jauregui Github Avatar" 
    width="40" 
    src="https://github.com/alejjb.png?size=40">
    <img
      alt="Gustavo Sánchez Github Avatar" 
    width="40" 
    src="https://github.com/gustavosr98.png?size=40">
</p>

Angel Sucasas [@angelsucasas](https://github.com/angelsucasas)  
Gabriel Ortega [@GabrielOrtegaUCAB](https://github.com/GabrielOrtegaUCAB)  
Andrea Da Silva [@avdasilvab25](https://github.com/avdasilvab25)  
Michelle Alleyne [@michellealleyne](https://github.com/michellealleyne)  
Alejandro Jauregui [@alejjb](https://github.com/alejjb)  
Gustavo Sánchez [@gustavosr98](https://github.com/gustavosr98)
