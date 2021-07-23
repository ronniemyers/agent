# Secured React Field Agent

## Tasks

- [x] Part 0 (30min)
- [ ] Part 1 (2 hours)
- [ ] Part 2 ()
- [ ] Part 3 ()

### Part 0: Set Up and Planning

- [x] Create a new GitHub repo for this assessment or continue working in the repo from last week's React Field Agent repository (10min)
  - [x] When creating your repo, be sure to add a `.gitignore` file using the GitHub Node template
  - [x] Update the README with the contents from this file
  - [ ] If not done, add the instruction team as collaborators (smashdevcode, WillSuggs, scertain)
  - [x] Create a new branch for all work on the assessment

- [x] Clone the [`secured-field-agent`](https://github.com/dev10-program/secured-field-agent) repo (10min)
  - Test starting the app by running the command `docker-compose up` from the root of the repo
  - Use the provided HTTP requests to test the provided User and Field Agent endpoints
- [x] Review the requirements (15min)
- [x] Identify any research that I need to do (10min)

### Part 1: Client-Side Routes (Friday Morning)

- [x] Implement the required client-side routes (40min)
  - [x] Install `react-router-dom`
  - [x] Define the necessary client-side routes (see list of routes below)
  - [x] Stub out any components that are needed to support the client-side routes
  - [x] Display a "Not Found" message if a route doesn't match one of the defined routes

- [x] Migrate HTML and CSS from Module 8 assessment (10min)
  - [x] Home
  - [x] User Login
  - [x] User Registration

- [x] Split apart the Agents CRUD UI component into multiple components (1 hour)
  - [x] A component to display all agents
  - [x] A component to add an agent
  - [x] A component to update an agent
  - [x] And optionally, a component to delete an agent (it's okay to handle delete from the list component)

### Part 2: User Login and Registration (Friday Afternoon)

- [] Implement user login and registration.
- [] Require a user to login to view the Agents CRUD UI.
- [] Display the logged in user's username in the header.
- [] Provide a way for the user to logout.

### User Login/Registration

- Explore the endpoints provided
- Use to register your user
- Use to authenticate (i.e. login) a user

**Display the logged in user's username in the header.** This will make it clear when a user is currently logged in. Provide a way for the user to logout.

**Require a user to login to view the Agents CRUD UI.** If the user attempts to browse to any of the routes for the Agents CRUD UI, redirect them to the "Login" route.

**Make sure that my GitHub repo is updated (i.e. push all commits to my local feature branch to the remote repo)!**

### Part 3: Fetch API (Weekend)

- [ ] Use the Fetch API to send all CRUD operations to the back-end data service.
- [ ] Display all API validation errors in the React UI.
- [ ] Use the provided test plan to manually test the application
- [ ] Create a pull request in GitHub to facilitate code review

### Part 1: Project Setup and Agents List (Friday Morning)

- [ ] Create a new React project with CRA (create-react-app)
  - [ ] Remove the cruft (refer back to the Components and JSX exercise for instructions)

- [ ] Migrate CSS files from last week's assessment
  - [ ] Copy them into the `public` folder
  - [ ] Link to them in the `index.html` file

- [ ] Add in provided `data.js` file for the Field Agents data

- [ ] Create `FieldAgents` component (stub)
  - [ ] Update `App` component to render `FieldAgents`

- [ ] Update `FieldAgents` to render list of Agents
  - [ ] Copy over HTML from previous assessment
  - [ ] Replace static data with dynamic data
  - [ ] Stub out click event handlers ("Add Agent", "Edit Agent", "Delete Agent") as necessary

### Part 2: Add Agent and Delete Agent (Friday Afternoon)

- [x] Create a form to add an Agent
  - [x] Add form JSX
  - [x] Decide between using individual state variables for input elements or a single object
  - [x] Add onChange event handlers to input elements
  - [ ] Add onSubmit event handler to form element
  - [ ] Prevent the form from submitting!
  - [ ] Create Agent object and update the Agents array (don't modify the original array!)

- [ ] Support deleting Agents
  - [ ] Store the "delete agent ID" in a new state variable
  - [ ] Retrieve the agent to delete
  - [ ] Update form state variable(s)
  - [ ] Add delete confirmation JSX
  - [ ] Add button click handler to perform the delete (don't modify the original array!)

- [ ] Conditionally render sections of the component
  - [ ] Add state variable to track the current view
  - [ ] Add conditional logic to the JSX to display the appropriate view

### Part 3: Edit Agent (Weekend)

- [ ] Support editing Agents
  - [ ] Store the "edit agent ID" in a new state variable
  - [ ] Retrieve the agent to edit
  - [ ] Update form state variable(s)
  - [ ] Add form JSX
  - [ ] Add onChange event handlers to input elements
  - [ ] Add onSubmit event handler to form element
  - [ ] Prevent the form from submitting!
  - [ ] Create Agent object and update the Agents array (don't modify the original array!)
- [ ] Use the provided test plan to manually test the application

## High-Level Requirements

- Use the Fetch API to send all CRUD operations to the back-end data service.
- Display all API validation errors in the React UI.
- Implement the required client-side routes.
- Display a "Not Found" message if a route doesn't match one of the defined routes.
- Create new React components as needed to support the required client-side routes.
- Implement user login and registration.
- Require a user to login to view the Agents CRUD UI.
- Display the logged in user's username in the header.
- Provide a way for the user to logout.

## Technical Requirements

- Use `fetch` for async HTTP.
- You are not allowed to change the Field Agent HTTP Service or database (unless there's a confirmed bug and your instructor approves).
- Use React Router to implement the client-side routes.
- Use React Context to share the current logged in user's information to any component that needs access to that information.
- Use the provided User API to support adding user login and registration.
- Use React Router's `useHistory` hook to programmatically redirect users.
- Use React Router's `useParams` hook to access parameters, paths, and other data.

## Client-Side Routes

- "Home" `/` - Renders a component that displays a welcome message and a link to the "Agents" route
  - Links to other parts of the website could be added in the future
- "Agents" `/agents` - Renders a component that displays a list of agents
- "Add Agent" `/agents/add` - Renders a component that displays a form to add an agent
- "Edit Agent" `/agents/edit/:id` - Renders a component that displays a form to edit the agent specified by the `:id` route parameter
- "Delete Agent" `/agents/delete/:id` (optional) - Renders a component that displays a confirmation message to delete the agent specified by the `:id` route parameter
- "Login" `/login` - Renders a component that displays a form to login a user
- "Register" `/register` - Renders a component that displays a form to register a user
- "Not Found" - Renders a component that displays a friendly "not found" message if the requested route doesn't match one of the defined routes
