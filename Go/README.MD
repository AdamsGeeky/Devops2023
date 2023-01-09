
# overview
write a simple CLI application...

... to learn the core concept and syntax of Go 

# learn concept while writing an application

# syllbus
- [x] overview 
    programming Language developed at Google in 2007 
    and open source in 2009
- [x] why Go was developd ?
    the possible Question is you hear another programming language 
    - [x] what is the purpose ?
    - [x] why another programming language ?
    - [x] how is it better or diffrent ?

    **motivation** Evolution of infrastructure
    the infrastructure where application is Deploy  changed a lot in the last few year **multicore Processors** become common, And also using **Cloud infrastructure** which hundred or thousand of **Servers** which multiple prosesor to deploy application become universaly common,This make Cloud infrastructure **Scalable and Distributed** **Dynamic** **more Capacity**. 
    However most of the  *Existing Programming Languages* did not fully take Advantage of infrastructure improvement 
    so what am saying is that before you have app that **execute one task** at time in order
    # TODO diagram single task execuation
    but infrastructure improvement it possible you can 
    write application that **execute multiple task** at the same time in paralled to Do multiple things at once, this way make the application faster and more user frendly
    # TODO diagram task in parallad
    this is the concept of multi-threading, chellenges of multi-threadingg
        - multiple users editting the same document
        - muttiple user Booking at the same time
        this should work in a way that no double booking having this Concenpt is colled **Concurrency** is About dealing with lots of thing at once need to be handle by developer in code
        - Developers need to write a code to prevent conflicts when task run in parallel accessing shared data 
    And many Language Do have feature for implementation such application however the code will get complex
    # TODO diagram of Language with Build-in Mechanism
    # TODO diagram of Language no Build-in Mechanism
    # where Go excell
    **Go was designed to run on multiple cores and build to support concurrency**
    Concurrency in Go is **Cheap and Easy**
    we will explore and learn move in the  later
- [x] Go use Cases
    - For writting Performant application
    - Running on Scaled, distributed systems
- [x] How it compares to other programming ? 
    for Developing Go they attemp to combile both: 
        - simple and readble synteax of Dynamic type language like Python
        - Efficiency and safety of a lower-level, statically type language like c++
    - Server-side or Backend language 
        that is 
        - web application
        - Database services
        - Microservices  
    - simple syntax: Easy to learn, read and write code
    - Fast build time, start up and run
    - Require fewer resources
    - GO is Compiled Language
    - Consistent across diffrent os     
- [x] installation and local Dev Enviroment
    To start writting Go application you need two application software
    1. Go compliter 
    2. install an Ide 
    we use Visual studio Code, but you can use any other editor you choice
    - Go Extention
    VS provide feature like code complition, code navigation, etc
- [x] Basic Struture of a Go file
    - first program and file structure
```bash
go mod init **modele path**
```
- initialized a go.mod file which Discribes the **module**: name/module path **go** version
the module path is also the import path

- **Package**
All our code must belong to a package
the first ststement in Go file must be
```go
package main
```
the **main** is the standard name of the main application file

```go
func main(){

}
```
 is the entry point of our Go program
```go
import "github.com/AdamsGeeky/"
```
module path can correspond to a repository you plant to publish your module to (that is github/AdamsGeeky/)

- Core Concept 
    - Data Types
        - string
        - integer
        - Booleans
    - Array
    - Slices
    - Maps
    - Structs
    - Varibles and Constats
    - User Input/output 
        - formatted output
        - Getting and validating user input
    - Pointers
    - varibale scope
    - control  statement 
        - loops
        - if - else
        - switch
    - Functions
    - package
    - Goroutines
        - concurency

# Range
iterate over element of diffrent Data Structures (so not only Array and slices)