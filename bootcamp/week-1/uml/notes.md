```
OOP

```

## User Stories (Use Cases)

* As an {X}, I want to {Y}, by {Z}

X == Kind of user
Y == Action
Z == Behavior

* As a customer, I want to withdraw money, by entering my PIN
* As a customer, I want to check my balance, by entering my PIN and selecting 'Savings'
* As a customer, I want to confirm my account, by selecting "Checking" or "Savings"
* As a teller, I want to log in to the ATM, by entering my password
* As a teller, I want to check remaining cash, by logging in with my account

## Class Diagram (Pseudo-OOP)

```
class ATM {
	
	id: INTEGER
	location: STRING
	authenticateUser()
	withdraw()
	deposit()
	checkBalance()
	updateBalance()
}

class User {

	id : INTEGER
	name : STRING
	balace: FLOAT
	insertCard()
	retrieveCash()
}

```