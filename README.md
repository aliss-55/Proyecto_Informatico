# Proyecto_Informatico

## Group 5

## IMPORTANT NOTE
This is an important message for anyone who wants to test our app. We tried to learn how to deploy All our app in Azure (Database + BackEnd + FrontEnd),
BUT we have encountered many errors in the process (you can see all of our attempts in the actions list) and we solve a bunch of them, but not all.
The DataBase and the frontEnd are deployed correctly, but for the BackEnd we didn't know how to solve the issues we've encountered this weeks,
So a solution we've found for this problem is to mount the backend in a VM (provided by Azure) and run the app, making the frontend to send all 
requests to that machine `https://20.121.113.4:3000`. Other problem is the Secure Connection. The FrontEnd make the request and FORCES the resorce
to be with HTTPS, as we explained before, running the back in a VM makes the response with HTTP (being it not secure) and cause some issues.

BUT, we have found a particulary solution:

1. Enter the next link [Obtain the certificate](https://20.121.113.4:3000/auth/login)
2. Ignore the warning and make the browser enter the link to get all the user data.
   Go to "Detailed info" or "Advanced" and select the option similar to "Proceed to -- anyways"
   This will cause you to get the Auto-Signed certificate for our app
3. Acces the next link [FrontEnd](https://black-mushroom-0fc7d0d10.4.azurestaticapps.net/)

This is something we don't understand perfectly why this happen, BUT, is a solution.

To RUN the automated tests (made with JEST) for the BackEnd, go to the brach "unit_test_full", 
and run this command in the backend `npm i` and then `npm run test`.

Apologies in advance for all this mess up project, we tried our best D':

### Developers:

1. Alisson Tobar Ariza
2. Javier Andres Vasquez Pabon
3. Simon David Colmenares Sanchez
4. Diego Maya Perea
5. Julian David Velasquez Patiño

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
