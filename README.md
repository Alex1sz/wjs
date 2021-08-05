This is a client side implementation of the water jug problem bootstrapped with create react app.

# Instructions:

## Goals
1. Measure Z gallons of water in the most efficient way.
2. Build a UI where a user can enter any input for X, Y, Z and see the solution.
3. If no solution, display "No Solution".
4. Dockerfile to make it easy to run

## LIMITATIONS
● No partial measurement. Each jug can be empty or full.
● Actions allowed: Fill, Empty, Transfer.
● Ignore styling & design of UI elements

## Code Notes

The code for the actions (fill, empty, transfer) can be viewed in: src/utils/util.js

Breadth first search is used to determine the most efficient path. A single react component WaterJugSimulator is used to render the solution path.

The rendered solution is displayed as a table of the steps/actions and includes the state of the jugs for each.

Notes: Ignore styling/design aspects of UI.

## Available Scripts

In the project directory, you can run:

### `docker-compose down -v && docker-compose run -p 3000:3000 dev`

Run app in docker container on port 3000 and see the solution.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

