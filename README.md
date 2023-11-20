# DrinksRESTAPI
Will deliver external API

# Express.js Drinks App

This is a simple web application built using Express.js to manage a list of drinks. Users can view a list of drinks, see details of individual drinks, add new drinks, and delete existing drinks.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of drinks with details (name, ingredients, description).
- View details of a specific drink.
- Add a new drink to the list.
- Delete an existing drink.

## Getting Started

### Prerequisites

Before running the app, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lily2t/DrinksRESTAPI.git


1. Change into the project directory:

    ````bash
    cd your-express-app

2. Install dependencies:

    ```bash
    npm install

Usage

Start the server:


    ```bash
    npm start

Open a web browser and navigate to http://localhost:3000 to access the application.

Endpoints

GET /drinks: View the list of drinks.
GET /drinks/:id: View details of a specific drink.
POST /drinks: Add a new drink.
DELETE /drinks/:id: Delete a drink.
Styling
The application uses simple CSS styles for basic styling. Feel free to customize the styles in the public/stylesheets directory.

Contributing

If you'd like to contribute to the project, follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name.
Make your changes and commit them: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/your-feature-name.
Submit a pull request.


