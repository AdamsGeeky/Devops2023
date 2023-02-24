# Notes on Nodejs

Node.js uses a single-threaded event loop architecture, which means that it has only one main thread of execution. However, Node.js also provides support for creating child processes, which can run in their own threads and communicate with the main thread through inter-process communication (IPC). Aka (pipe | )

 thread refers to a single execution context within a program. It is a lightweight process that can run concurrently with other threads within the same program.
 
 
Overall, while Node.js itself is single-threaded, it provides various mechanisms for developers to create and manage threads within their programs, allowing them to take advantage of multi-core processors and improve the performance of their applications.





<details>
<summary>Middleware in Express.js</summary> 

refers to a function that processes a request in a series of steps before it reaches the final endpoint. It is an important concept in Express.js as it allows developers to add additional functionality to an API, such as authentication, authorization, and data validation.

In Express.js, middleware is defined using the app.use() method, which takes a function as an argument and executes it for each incoming request. This function can modify the request and response objects, execute additional functions, and return the response to the client.

Examples of common middleware functions in Express.js include:

- Body Parser: This middleware parses the request body and makes it available in the req.body object.

- Error Handling: This middleware is used to catch and handle any errors that occur during the processing of a request.

- Logging: This middleware logs each incoming request and its details, such as the method, URI, and response time.

- Session Management: This middleware is used to manage user sessions and store user data on the server.

- Authentication: This middleware is used to validate a user's credentials and grant or deny access to certain resources.

- Authorization: This middleware is used to check if a user is authorized to access a specific resource or perform a specific action.

Middleware functions can be stacked and executed in a specific order, allowing developers to build complex APIs with multiple layers of functionality.

In conclusion, middleware is an essential component of Express.js, allowing developers to add additional functionality and control to their APIs. By using middleware, developers can write modular, maintainable, and scalable APIs.
</details>
