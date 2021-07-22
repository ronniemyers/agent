# React Field Agent

## Introduction

Implement a full CRUD UI for agents.

- Display all agents
- Add an agent
- Update an agent
- Delete an agent

## Tasks

- [x] Review the requirements (10 min)
- [x] Identify any research that I need to do (5 min)
- [x] Part 1 (30 min)
- [x] Part 2 (5 hours)
- [x] Part 3 (4 hours)

## Dependencies

```zsh
npm install react
npm install -g npm-checker
npm install react-router-dom
npm install styled-components
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.0"
```

### Part 1: Project Setup and Agents List (Friday Morning)

- [x] Create a new React project with CRA (create-react-app)
  - [x] Remove the cruft (refer back to the Components and JSX exercise for instructions)
- [x] Migrate CSS files from last week's assessment
  - [x] Copy them into the `public` folder
  - [x] Link to them in the `index.html` file
- [x] Add in provided `data.js` file for the Field Agents data
- [x] Create `Agent` component (stub)
  - [x] Update `App` component to render `Agent`
- [x] Update `Agent` to render list of Agents
  - [x] Copy over HTML from previous assessment
  - [x] Replace static data with dynamic data
  - [x] Stub out click event handlers ("Add Agent", "Edit Agent", "Delete Agent") as necessary

### Part 2: Add Agent and Delete Agent (Friday Afternoon)

- [x] Create a form to add an Agent
  - [x] Add form JSX
  - [x] Decide between using individual state variables for input elements or a single object
  - [x] Add onChange event handlers to input elements
  - [x] Add onSubmit event handler to form element
  - [x] Prevent the form from submitting!
  - [x] Create Agent object and update the Agents array (don't modify the original array!)

- [x] Support deleting Agents
  - [x] Store the "delete agent ID" in a new state variable
  - [x] Retrieve the agent to delete
  - [x] Update form state variable(s)
  - [x] Add delete confirmation JSX
  - [x] Add button click handler to perform the delete (don't modify the original array!)

- [x] Conditionally render sections of the component
  - [x] Add state variable to track the current view
  - [x] Add conditional logic to the JSX to display the appropriate view

### Part 3: Edit Agent (Weekend)

- [x] Support editing Agents
  - [x] Store the "edit agent ID" in a new state variable
  - [x] Retrieve the agent to edit
  - [x] Update form state variable(s)
  - [x] Add form JSX
  - [x] Add onChange event handlers to input elements
  - [x] Add onSubmit event handler to form element
  - [x] Prevent the form from submitting!
  - [x] Create Agent object and update the Agents array (don't modify the original array!)
- [x] Use the provided test plan to manually test the application

## Technical Requirements

- Use Create React App
- Use in memory data
- Use your HTML and CSS from the previous assessment or a CSS framework

---

## Test Plan

- [x] Agents
  - [x] Displays a list of the agents from the provided data with basic information
  - [x] Includes a button/link to display to the Add Agent view
  - [x] For each agent, includes buttons/links to display the Edit Agent and Delete Agent views
- [x] Add Agent
  - [x] Displays a form for the user to enter an agent's information
  - [x] Includes a button to submit the form
  - [x] Includes a button/link to cancel the add operation and return to the list of agents
  - [x] An agent's information can be entered into the form and when the form is submitted, the agent is added to the list of agents
- [x] Edit Agent
  - [x] Displays a form for the user to edit an agent's information
  - [x] Includes a button to submit the form
  - [x] Includes a link to cancel the edit operation and return to the list of agents
  - [x] The form pre-populates with the agent's current information
  - [x] The agent's information can be changed in the form and when the form is submitted, the agent is updated in the list of agents
- [x] Delete Agent
  - [x] Displays an agent's basic information
  - [x] Displays a delete confirmation message
  - [x] Includes a button to complete the delete operation
  - [x] Includes a link to cancel the delete operation and return to the list of agents
  - [x] Proceeding with the delete operation removes the agent from the list of agents
