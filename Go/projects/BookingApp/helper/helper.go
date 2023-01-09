package helper

import "strings"

func ValidateUserInput(firstName string, lastName string, email string, userTicket uint, remaingTickets uint) (bool, bool, bool) {
	isValidName := len(firstName) >= 2 && len(lastName) >= 2
	isValidEmail := strings.Contains(email, "@")
	isValidTicketNumber := userTicket > 0 && userTicket <= remaingTickets
	return isValidName, isValidEmail, isValidTicketNumber
}
