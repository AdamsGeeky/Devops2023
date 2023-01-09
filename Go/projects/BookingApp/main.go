package main

import (
	"fmt"
	"sync"
	"time"

	// user define Package
	"bookingApp/helper"
)

/*
package level variable
*/
const eventTickets = 25

var eventName = "Go Programming Bootcamp"
var remaingTickets uint = 25
var bookings = make([]UserData, 0)

type UserData struct {
	first         string
	last          string
	email         string
	numberOfTicks uint
}

/* wait */
var chailSave = sync.WaitGroup{}

/* entrypoint where execution start */
func main() {

	/* geeting function w ith 3 Argument*/
	greetUser()
	// for {

	/* return Value of getUserInput() */
	firstName, lastName, email, userTicket := getUserInput()

	/* for the invalid user input */
	isValidName, isValidEmail, isValidTicketNumber := helper.ValidateUserInput(firstName, lastName, email, userTicket, remaingTickets)

	if isValidName && isValidEmail && isValidTicketNumber {
		ticketBooking(userTicket, firstName, lastName, email)
		/* Goroutine to backgroud thread for 10 sec */
		fmt.Println("processing ....")
		chailSave.Add(1) // for syn this single Thread
		go sendTicket(userTicket, firstName, lastName, email)
		/* end if tikets sold*/
		if remaingTickets == 0 {
			fmt.Printf("the %v is sold out\n ", eventName)
			//	break
		}
	} else {
		/* user feedback on input */
		if !isValidName {
			fmt.Println("Fist Name or Last Name Entered is too short")
		}
		if !isValidEmail {
			fmt.Println("Email Address Entered doesn't contain @")
		}
		if !isValidTicketNumber {
			fmt.Println("Number of Ticket Entered is invalid")
		}
	}
	// Untail thread finish
	chailSave.Wait()
}

/* function   */
func greetUser() {
	fmt.Printf("Welcome to %v Booking Application\n", eventName)
	fmt.Printf("\t We have %v tickets and %v still available \n", eventTickets, remaingTickets)
	fmt.Println("reserve your tickets to learn practical skills")
}

/* function defination with return type*/

func getFirstName() []string {
	/* Slice to store sub slice of firstName*/
	firstNames := []string{}
	for _, booking := range bookings {
		firstNames = append(firstNames, booking.first)
	}
	return firstNames
}

func getUserInput() (string, string, string, uint) {
	// positive only integer
	var userTicket uint
	var firstName string
	var lastName string
	var email string

	fmt.Println("Enter your firstName:")
	fmt.Scan(&firstName)

	fmt.Println("Enter your lastName:")
	fmt.Scan(&lastName)

	fmt.Println("Enter your Email:")
	fmt.Scan(&email)

	fmt.Println("Enter the number of ticket:")
	fmt.Scan(&userTicket)

	return firstName, lastName, email, userTicket
}

func ticketBooking(userTicket uint, firstName string, lastName string, email string) {
	remaingTickets -= userTicket
	/* variable declaration from struct type */

	var userData = UserData{
		first:         firstName,
		last:          lastName,
		email:         email,
		numberOfTicks: userTicket,
	}

	/* while To Add element to the slice of Maps */
	bookings = append(bookings, userData)

	/* function call with Slice Argument */
	firstNames := getFirstName()
	fmt.Printf("The first Names of bookings are: %v\n", firstNames)
	fmt.Printf("Thank %v %v for booking %v tickets you will receive the comfirmation at %v \n", firstName, lastName, userTicket, email)
	fmt.Printf("remain %v ticket available \n", remaingTickets)
	fmt.Printf("The bookings are: %v\n", bookings)
}

/* Sending*/
func sendTicket(userTicket uint, firstName string, lastName string, email string) {
	time.Sleep(10 * time.Second)
	var ticket = fmt.Sprintf("%v ticket for %v %v", userTicket, firstName, lastName)
	fmt.Println("#################")
	fmt.Printf("Sending ticket:\n %v \nto email Address %v\n", ticket, email)
	fmt.Println("#################")
	chailSave.Done() // notify when done
}
