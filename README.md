# Secured React Field Agent

## Tasks

- [x] Part 0 (30min)
- [x] Part 1 (5 hours)
- [x] Part 2 (6 hours)
- [x] Part 3 (4 hours)

### Part 0: Set Up and Planning

- [x] Create a new GitHub repo for this assessment or continue working in the repo from last week's React Field Agent repository (10min)
  - [x] When creating your repo, be sure to add a `.gitignore` file using the GitHub Node template
  - [x] Update the README with the contents from this file
  - [x] If not done, add the instruction team as collaborators (smashdevcode, WillSuggs, scertain)
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

- [x] Implement user login and registration.
- [x] Require a user to login to view the Agents CRUD UI.
- [x] Display the logged in user's username in the header.
- [x] Provide a way for the user to logout.

### User Login/Registration

- Explore the endpoints provided
- Use to register your user
- Use to authenticate (i.e. login) a user

### Part 3: Fetch API (Weekend)

- [x] Use the Fetch API to send all CRUD operations to the back-end data service.
- [x] Display all API validation errors in the React UI.
- [x] Use the provided test plan to manually test the application
- [x] Create a pull request in GitHub to facilitate code review

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
