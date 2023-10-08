# Proyecto_Informatico

## Group 5

### Developers:

1. Alisson Tobar Ariza
2. Javier Andres Vasquez Pabon
3. Simon David Colmenares Sanchez
4. Diego Maya Perea
5. Julian David Velasquez Patiño

## IMPORTANT NOTE
The developer team has taken the decision to migrate from PHP to TypeScript with frameworks like NestJS and React. This changes
will be uploaded inside the folder named "parcial2"

To use this new app, please follow the next steps:

1. Open a terminal inside each carpet (except "Database") and run the comand "npm install"
2. To run the Backend, in the open terminal asociated to "backend" run "npm run start:dev"
3. To run the Frontend, in the open terminal asociated to "frontend" run "npm run dev"

## Functional Requirements

For this project, the development team has found critical requirements for this Login Screen App.
We describe each functional requirement with an UID, a description and a keyword for better comprehension:

| FR ID | Description                                                                                                                                                    | Keyword              |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| FR-1  | The system must allow users to log in to the application by providing a username and password, both values must be valid.                                      | **Data Reading**     |
| FR-2  | The login screen must validate the user's entry, confirming that the data provided is of the correct type.                                                     | **Data Validation**  |
| FR-3  | The login screen must show an error message if the user enters an incorrect username or password, as well as users and passwords that are not in the database. | **Error Control**    |
| FR-4  | The system must redirect users to a home page after successful login.                                                                                          | **Page Redirection** |

## Non-functional Requirements

The non-functional requirements that were defined by the team for the optimal functioning of the application are shown below. Just like the functional requirements, they were defined with a UID and a description, in addition to giving them a degree of priority to take into account in the development of the code.

| NFR ID | Description                                                                                                                                                                                                                                       | Priority   |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| NFR-1  | The login screen should load in 3 seconds or less under normal usage conditions and moderate server load to ensure a fluid user experience. These normal conditions will be measured with the ISO 25000 performance efficiency standard.          | **MEDIUM** |
| NFR-2  | The system must guarantee the security of user accounts by implementing protection measures, including the use of encryption techniques such as sha256 encryption to transmit passwords at the login screen, ensuring the integrity of user data. | **HIGH**   |
| NFR-3  | The login interface must be intuitive and easy to use, with a logical layout of fields and labels. This is based on the usability topic within the ISO 25010 standard.                                                                            | **MEDIUM** |
| NFR-4  | The login screen must be compatible with a variety of web browsers and adapt to different screen sizes, such as mobile devices and tablets.                                                                                                       | **MEDIUM** |
