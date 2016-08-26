# Ping-Pong-Project

#### This project will input and return a fun list of numbers and words based on input!  8/18/16

#### By Jackson Meyer, 8/25/2016

## Description

The purpose of this app is to take a any number from user input and manipulate it based on a set of commands and then return the number as a string with certain numbers removed.  This is a code review to show an understanding for the backend and front-end logic as well as functions and ability to manipulate data.

## Setup/Installation Requirements

This is a web application, please open the index file in current browser window.  Click the link below to be taken right to our application: https://meyerjac.github.io/ping-pong/

## Known Bugs

There are no known bugs with this application.

##Specifications

Rule:
return an string/array of numbers from 1 to the input.
  Example Input: 4
  Example Output: [1,2,3,4]

Rule:
when a non-numerical input is read, the application will alerting user to enter a number.
  Example Input: "I cant wait!"
  Example Output: "Please enter a number!"

Rule:
The application will replace numbers that are divisible by 3 with the word "ping"
  Example Input: 6
  Example Output: 1, 2, "ping", 4, 5, "ping"

Rule:
The application will replace numbers that are divisible by 5 with the word "pong"
  Example Input: 6
  Example Output: 1, 2, "ping", 4, "pong", "ping"

Rule:
After the number is inputted, submitted, and returned as an array of numbers, it will replace numbers that are divisible by 15 with the word "ping-pong"
  Example Input: 16
  Example Output: 1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong", 16.

Rule:
Be able to enter a new number and have the old one go away.
  Example previous output: [1, 2, 3, 4, 5, 6]
  New Example Input: 3
  New Example Output: 1, 2, "ping"

## Support and contact details

If you run into problems with this application, please contact me at jackson.meyer7@gmail.com.

## Technologies Used

This application uses very basic HTML, CSS, jquery, and JavaScript.

### License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2016 Jackson Meyer
