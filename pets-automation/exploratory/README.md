# Monefy exploratory test session

## Market
Financial

## Target
End users

|   |   |
|---|---|
|platform| iOS mobile|
| version | 1.3.30 |
| language | ES |
| environment | UAT |
| total time invested | 3.5 hs |
| doc version | 1.0 |

## Charters

-------------------------------------------------------------------------
### Chart 001: Download, install and first 'login' application

#### Tester
*Andres Vaninetti*

#### Priority: P1
If application cannot be downloaded or installed, users cannot use it.

#### Estimated session time: 10 mins

#### Scenarios
- Search for the application in the store and install it  
- Open the application  
- Check welcome screen just for first time application open  
- Check continue button lead us to the following statement and finish welcome  
- Check application language    
- Verify look and feel  
- Check we can proceed without any offer or trial  
- Check after finish first welcome screen we are in the 'main screen'  


#### Testing notes
There is a welcome screen  
Welcome screen cannot be skipped  
There is no explicit button to go back, if we want to go back we need to touch the previous 'dot'  
We have a unique welcome offer  
There is a trial, it could be tested  
We are in the 'main screen'  

#### Bugs

#### Observations
There is no formal login like user and password, this is a personal finanacial app, with sensitive information. Since mobiles are lost or stolen, more secutity layers are needed.
-------------------------------------------------------------------------
### Chart 002: Discovering main screen

#### Tester
Andres Vaninetti

#### Priority: P2
Main screen is important to know application services

#### Estimated session time: 10 mins

#### Scenarios
- Verify default currency can be modified.  
- Verify selected month is the current.  
- Check categories  
- Check amount is 0  
- Check top bar: input search, filters, transfer and rigth menu  

#### Testing notes
Top bar  
App name  
Euro currency is set by default -> maybe could be more specific using location  
There is a filter by search  
Left menu have more filters  
We can do transfers  
We can add incomes and spents  
There are 2 buttons, to add income and spents  
Only month is displayed by default, we can change and customize it  
There are lot of categories  
There is a menu button  

#### Bugs

#### Observations
-------------------------------------------------------------------------
### Chart 003: Add income and spent

#### Tester
*Andres Vaninetti*

#### Priority: P1
This is the main feature of the application, it should be tested deepley with positive and negative scenarios as you can

#### Estimated session time: 30 mins

#### Scenarios
- Verify we can add a new income or spent related to a specific category  
- Verify we can add a new income or spent selecting '+' or '-'  
- Verify we can add a new income or spent selecting the balance   
- Verify total is updated depending of type on new income or new spent
  - Green amount modified for income
  - Red for spents
- Verify percentage of spents by category change accordingly  
- Verify we can cancel an income/spent  
- Verify we can see the history incomes and spents  
  - Check history is ordered from top(bigger) to bottom(smallest) by total  
- Verify graphic portions makes sense  

#### Testing notes
Selecting a category, we can add a new spent  
There is a percent by category  
Green color for income, red for spents  
History is ordered by income/spents and it's order is defined by total from major to minor  
percentages round to 0% when spending becomes negligible  
Relationship lines between percentages and category disapperars when the spents is 0%  
Clean data removes all app configuration, selected language switch to default. I expected only data about spents transfers amd income to be deleted  

#### Bugs

#### Observations
In history, when raws exceed the mobile related px, it could be better if the app shows the first transaction and hide the bottom. Now is doing upside down

-------------------------------------------------------------------------
### Chart 004: Transactions

#### Tester
*Andres Vaninetti*

#### Priority: P1
This is another of the main features of the application, should be tested with full focus and execute more scenarios as posible

#### Estimated session time: 20 mins

#### Scenarios
- Check we can set and amount, integers and decimals  
- Check we can add a description note  
- Verify we can use all our available wallets  
- Verify we can cancel a transfer  
- Check currency is correct  

#### Testing notes
Calendar to date transaction  
Total to transfer  
Select from and to  
cash or card or whatever  

#### Bugs

#### Observations
Save transfer button only appear when select the keyboard, there should be a specific one
-------------------------------------------------------------------------
### Chart 005: Add new account feature

#### Tester
Andres Vaninetti

#### Priority: P1
This is another main and complex feature that should be fully tested

#### Estimated session time: 15 mins

#### Scenarios
- Create a new account with a name, balance, wallet type and currency. We can do some negative cases for requried fields  
- Check if it's included to the balance, this is updated or not  
- Verify if new account are available to do transfers  
- Check if the balance is updated with the selected amount   
- Verify if we can perform a complete transfer, check updated amounts  
- Check accounts can be merged  
- Check accounts can be disabled  

#### Testing notes
Right menu -> accounts  
Set the name of the new account  
We can select currency  
We can set an initial balance and date for that balance  
We can choose the wallet type  
Some features are not allowed for trial  
There is no cripto currencies to select  

#### Bugs

#### Observations
Crypto wallets like Bitcoin' can be selected, but there is no BTC currency to select  

-------------------------------------------------------------------------
### Chart 006: Integrations

#### Tester
*Andres Vaninetti*

#### Priority: P3
Integrations are not crucial in this application

#### Estimated session time: 5 mins

#### Scenarios
- Verify app can work without internet connection  
- Check integrations, delete and restore data 

#### Testing notes
Integrations with google drive and dropbox  
Data could be stored in cloud  
We can store remove and restore data sets  

#### Bugs

#### Observations
-------------------------------------------------------------------------
### Chart 007: Offers

#### Tester
*Andres Vaninetti*

#### Priority: P1
Premium subscription is crucial for 'monefy' the application

#### Estimated session time: 20 mins

#### Scenarios

#### Testing notes
Offer system

#### Bugs

#### Observations
-------------------------------------------------------------------------
