# Basic User Dashboard in Next.js

## Overview
This project represents a basic user dashboard within an admin panel, developed using Next.js. Users can be listed, and their details can be edited from this dashboard.

## Installation
Follow these steps to install the project:
1.	Clone the repository.
2.	Use `npm install` in the project directory to install the necessary dependencies.
3.	Start the development server with `npm run dev`.

## Running the Application
After starting the development server, head to ﻿localhost:3000 in your browser to view the user dashboard.

## Development Tasks
Here are specific tasks to be implemented in this project:
1.	**User Listing**: On the dashboard, display a list of users using the `<User user={user}>` component.
2.	**User Editing**: Add an 'Edit' button to the `<User user={user}>` component. Clicking this button should redirect to the user edit page at `/edit/:id`.
3.	**User Edit Page**: This page can be accessed at `/edit/:id`. It should consist of a prefilled form with the following fields:
  - Name
  - Username
  - Email

After the form submission, the data should not be sent to a server. Instead, it should appear as a JSON object in the console.

Through these tasks, this project allows for the exploration of basic CRUD functionality in Next.js leveraging components, routing, and form handling.

## Information
This project uses https://jsonplaceholder.typicode.com/ to simulate a REST API. The data is fetched using the `getStaticProps` function in `pages/index.js`. The `User` component is located in `components/User.js`. The `UserEdit` component is located in `components/UserEdit.js`. The `UserEdit` page is located in `pages/edit/[id].js`.