# Overview
A basic react form to display how to integrate React JS and Django. An input is accepted in the frontend,
It is being passed to the backend for verification and the appropriate result is being passed and displayed in the frontend. Fetch API is being used to pass the data from
the frontend to the backend. Corsheaders and rest-framework are requirements.

# How to run?
`npm run start` to start the frontend server <br/>
`python manage.py runserver` to start the backend server <br/><br/>
>Ensure that the appropriate port numbers are mentioned in the corsheaders whitelist in the settings.py of the django backend and in the fetch api endpoint in 
the frontend form.
