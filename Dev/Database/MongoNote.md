# In Mongoose,
a schema is a blueprint that defines the structure of documents in a MongoDB collection. A model is a constructor that provides an interface for interacting with a MongoDB collection based on a specific schema. Here's how to define schemas and models in Mongoose:

## Defining a Schema:

To define a schema in Mongoose, you use the mongoose.Schema() method. Here's an example of a simple schema for a user document:

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 100
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: Number
  }
});

```
In this example, we define a schema for a user document with four fields: name, email, age, and address. The email field is defined as a unique field that is required. The age field is defined as a number with a minimum value of 18 and a maximum value of 100. The address field is defined as a sub-document with four fields: street, city, state, and zip.

## Defining a Model:

To define a model in Mongoose, you use the mongoose.model() method. Here's an example of how to create a model based on the userSchema we defined earlier:

```javascript

const User = mongoose.model('User', userSchema);
```
In this example, we create a User model based on the userSchema we defined earlier. The first argument to mongoose.model() is the name of the model (which will be used as the name of the collection in MongoDB), and the second argument is the schema that the model is based on.

Once you have defined a model, you can use it to perform CRUD operations on the MongoDB collection that it represents. For example, to create a new user document and save it to the MongoDB database, you can use the following code:

```javascript
const user = new User({
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: 12345
  }
});

user.save(function(err, savedUser) {
  if (err) {
    console.log(err);
  } else {
    console.log(savedUser);
  }
});
```
This code creates a new user document based on the User model we defined earlier, sets the values of the document's fields, and then saves the document to the MongoDB database. The save() method takes a callback function that is called when the save operation is complete. If an error occurs during the save operation, the error is passed to the callback function as the first argument. If the save operation is successful, the saved user document is passed to the callback function as the second argument.

# In Mongoose, a schema type represents the data type of a field in a document. 
There are several built-in schema types in Mongoose, and you can also define custom schema types if needed. Here are some of the built-in schema types in 

## Mongoose:

- String: Represents a string value.
- Number: Represents a numeric value.
- Boolean: Represents a boolean value.
- Date: Represents a date value.
- Buffer: Represents a binary data value.
- ObjectId: Represents a MongoDB ObjectId value.
- Array: Represents an array value.
- Mixed: Represents a value of any data type.

In addition to schema types, there are also several options that you can set for each field in a schema. Here are some of the most commonly used options:

- required: Specifies whether the field is required or not.
- default: Specifies a default value for the field.
- unique: Specifies whether the field must have a unique value.
- enum: Specifies a list of allowed values for the field.
- min: Specifies a minimum value for the field (for Number or Date fields).
- max: Specifies a maximum value for the field (for Number or Date fields).
- validate: Specifies a custom validation function for the field.
Here's an example of how to define a schema with several fields and options:

```javascript
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 100
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function(value) {
        // custom validation function
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Invalid email address'
    }
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin', 'moderator']
  }
});
```
In this example, we define a schema for a user document with four fields: name, age, email, and role. The name field is defined as a required string. The age field is defined as a number with a minimum value of 18 and a maximum value of 100. The email field is defined as a unique string that is required, and it also has a custom validation function that checks whether the email address is valid. The role field is defined as a string with a default value of 'user' and an enum that specifies a list of allowed values.


# In Mongoose, you can define two types of methods on a schema: model methods and instance methods.

Model methods are methods that are defined on the schema itself and can be called on the model. They are useful for performing operations on the entire collection of documents, such as finding all documents that match a certain criteria, updating multiple documents at once, or deleting all documents in the collection. Model methods are defined using the statics object on the schema.

Here's an example of how to define a model method:

```javascript
Copy code
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

userSchema.statics.findByAge = function(age) {
  return this.find({ age: age });
};
```
In this example, we define a model method called findByAge that takes an age parameter and returns all documents in the collection that have that age. We can then call this method on the model itself:

```javascript
Copy code
const User = mongoose.model('User', userSchema);

User.findByAge(25).then((users) => {
  console.log(users);
});
```
Instance methods are methods that are defined on the schema and can be called on individual documents. They are useful for performing operations on a single document, such as updating or deleting it. Instance methods are defined using the methods object on the schema.

Here's an example of how to define an instance method:

```javascript
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

userSchema.methods.getFullName = function() {
  return this.name;
};
```
In this example, we define an instance method called getFullName that returns the name of the document. We can then call this method on an individual document:

```javascript
const User = mongoose.model('User', userSchema);

const user = new User({
  name: 'John Doe',
  age: 25
});

console.log(user.getFullName()); // 'John Doe'
```
Note that instance methods have access to the document's properties and can modify them as well.

# CRUD Operations with Mongoose

## Creating and saving data using Mongoose
In Mongoose, you can create and save data by creating an instance of a model and then calling the save method on that instance. Here's an example:

```javascript
const User = mongoose.model('User', {
  name: String,
  age: Number
});

const user = new User({
  name: 'John Doe',
  age: 25
});

user.save().then(() => {
  console.log('User saved!');
});
```
In this example, we define a model called User with two fields: name and age. We then create a new instance of the User model and set the values of the fields to 'John Doe' and 25, respectively. Finally, we call the save method on the user instance to save the data to the database. The save method returns a Promise, so we can use .then() to log a message when the save operation is complete.

Note that Mongoose will automatically create a collection in the database based on the name of the model (in this case, 'users'). If you want to specify a different name for the collection, you can do so by passing a second argument to the mongoose.model method:

```javascript
const User = mongoose.model('User', {
  name: String,
  age: Number
}, 'my_users');
```
In this example, the collection will be named 'my_users' instead of 'users'.

## Reading and querying data with Mongoose

In Mongoose, you can read and query data from the database using the find method on a model. The find method returns a Query object that can be used to specify criteria for the search, sort the results, limit the number of results returned, and more.

Here's an example of how to use the find method:

```javascript
const User = mongoose.model('User', {
  name: String,
  age: Number
});

User.find({ age: { $gte: 25 } }).then((users) => {
  console.log(users);
});
```
In this example, we use the find method to search for all documents in the 'users' collection where the age field is greater than or equal to 25. The find method returns a Promise that resolves to an array of matching documents.

You can also chain methods on the Query object to specify additional criteria or modify the results. Here are some examples:

```javascript
// Find all documents where the name field contains the string 'John'
User.find({ name: /John/ }).then((users) => {
  console.log(users);
});

// Sort the results by age in descending order
User.find().sort({ age: -1 }).then((users) => {
  console.log(users);
});

// Limit the number of results returned to 10
User.find().limit(10).then((users) => {
  console.log(users);
});

// Count the number of documents that match the search criteria
User.countDocuments({ age: { $gte: 25 } }).then((count) => {
  console.log(count);
});
```
In addition to the find method, Mongoose provides several other query methods, such as findOne, findById, and findOneAndUpdate, that allow you to retrieve and modify individual documents.


# Updating data with Mongoose
In Mongoose, you can update data in the database using the updateOne, updateMany, or findOneAndUpdate methods on a model. These methods take a search criteria object and an update object as arguments.

Here's an example of how to use the updateOne method to update a single document:

```javascript
Copy code
const User = mongoose.model('User', {
  name: String,
  age: Number
});

User.updateOne({ name: 'John Doe' }, { age: 30 }).then(() => {
  console.log('User updated!');
});
```
In this example, we use the updateOne method to find the first document in the 'users' collection where the name field is 'John Doe' and set its age to 30. The updateOne method returns a Promise that resolves when the update operation is complete.

You can also use the updateMany method to update multiple documents that match the search criteria. Here's an example:

```
User.updateMany({ age: { $lt: 30 } }, { age: 30 }).then(() => {
  console.log('Users updated!');
});
```
In this example, we use the updateMany method to find all documents in the 'users' collection where the age field is less than 30 and set their age to 30.

If you want to update a single document and also retrieve the updated document, you can use the findOneAndUpdate method. Here's an example:
```
User.findOneAndUpdate({ name: 'John Doe' }, { age: 30 }, { new: true }).then((user) => {
  console.log(user);
});
```
In this example, we use the findOneAndUpdate method to find the first document in the 'users' collection where the name field is 'John Doe', set its age to 30, and retrieve the updated document. The findOneAndUpdate method returns a Promise that resolves to the updated document.

# Deleting data with Mongoose

In Mongoose, you can delete data from the database using the deleteOne, deleteMany, or findOneAndDelete methods on a model. These methods take a search criteria object as an argument.

Here's an example of how to use the deleteOne method to delete a single document:

```javascript
const User = mongoose.model('User', {
  name: String,
  age: Number
});

User.deleteOne({ name: 'John Doe' }).then(() => {
  console.log('User deleted!');
});
```
In this example, we use the deleteOne method to find the first document in the 'users' collection where the name field is 'John Doe' and delete it. The deleteOne method returns a Promise that resolves when the delete operation is complete.

You can also use the deleteMany method to delete multiple documents that match the search criteria. Here's an example:

```javascript
User.deleteMany({ age: { $lt: 30 } }).then(() => {
  console.log('Users deleted!');
});
```
In this example, we use the deleteMany method to find all documents in the 'users' collection where the age field is less than 30 and delete them.

If you want to delete a single document and also retrieve the deleted document, you can use the findOneAndDelete method. Here's an example:

```javascript
User.findOneAndDelete({ name: 'John Doe' }).then((user) => {
  console.log(user);
});
```
In this example, we use the findOneAndDelete method to find the first document in the 'users' collection where the name field is 'John Doe' and delete it, and also retrieve the deleted document. The findOneAndDelete method returns a Promise that resolves to the deleted document.
