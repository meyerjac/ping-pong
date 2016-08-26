# Ping-Pong-Project

#### This Ping-Pong project will manipulate user input, 8/18/16

#### By Jackson Meyer, 8/25/2016

## Description

The purpose of this app is to take a any number from user input and manipulate it based on a set of commands and then return the number as a string with certain numbers removed.  It is to show an understanding for the backend and front-end logic.

## Setup/Installation Requirements

* This is a web application, just open the index file in current browser window.  Also a link of our project can be found here: https://meyerjac.github.io/ping-pong/

## Known Bugs

There are no known bugs with this application.

##Specifications

Rule:
After the number is inputted and submitted, it is returned as an array of numbers from 1,2,3....all the way up and including that inputted number.
  Example Input: 4
  Example Output: [1,2,3,4]

Rule:
If a user inputs a non-numeral character, it will return asking him/her/they to enter a number.
  Example Input: hello, %, @#%, "I cant wait!"
  Example Output: "Please enter a number!"

Rule:
After the number is inputted, submitted, and returned as an array of numbers, it will replace numbers that are divisible by 3 with the word "ping"
  Example Input: 6
  Example Output: 1, 2, "ping", 4, 5, "ping"

Rule:
After the number is inputted, submitted, and returned as an array of numbers, it will replace numbers that are divisible by 5 with the word "pong"
  Example Input: 6
  Example Output: 1, 2, "ping", 4, "pong", "ping"

Rule:
After the number is inputted, submitted, and returned as an array of numbers, it will replace numbers that are divisible by 5 with the word "pong"
  Example Input: 6
  Example Output: 1, 2, "ping", 4, "pong", "ping"

Rule:
After the number is inputted, submitted, and returned as an array of numbers, it will replace numbers that are divisible by 15 (or 3 and 5) with the word "ping-pong"
  Example Input: 16
  Example Output: 1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "ping-pong", 16.

Rule:
After we already got a response, be able to enter a new number and have the old one go away.
  Example output: [1, 2]
  New Example Input: 5
  New Example Output: 1, 2, "ping", 4, "pong",

## Support and contact details

If you run into problems with this application, please contact me at jackson.meyer7@gmail.com.

## Technologies Used

This application uses very basic HTML, CSS, jquery, and JavaScript.

### License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2016 Jackson Meyer
