
# Pharmacy Management System

A simple CRUD application for managing medications in a pharmacy.

## Features

- Add new medications with their name, quantity, and price.
- View a list of all medications in the pharmacy.
- Update existing medication details.
- Delete medications that are no longer needed.

## Technologies Used

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Styling**: CSS (Material-UI for components)
- **Deployment**: [Heroku](https://www.heroku.com/) (for demo purposes)

## Getting Started

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd pharmacy-management
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   ```bash
   cd ../server
   npm install
   ```

4. Set up MySQL database:
   - Create a new database named `pharmacy`.
   - Run the SQL script located at `server/database.sql` to create the `medications` table.

5. Configure environment variables:
   - Create a `.env` file in the `server` directory and add the following variables:
     ```
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=pharmacy
     PORT=5000
     ```

6. Start the backend server:

   ```bash
   cd server
   node server.js
   ```

7. Start the React development server:

   ```bash
   npm start
   ```

8. Access the application in your browser at `http://localhost:3000`.

[url=https://postimg.cc/kVbX4vfx][img]https://i.postimg.cc/kVbX4vfx/image.png[/img][/url]

[url=https://postimg.cc/gLYYgFdD][img]https://i.postimg.cc/gLYYgFdD/image2.png[/img][/url]

[url=https://postimg.cc/Hc1W78hF][img]https://i.postimg.cc/Hc1W78hF/image3.png[/img][/url]

[url=https://postimg.cc/8JdpdP8c][img]https://i.postimg.cc/8JdpdP8c/image4.png[/img][/url]


