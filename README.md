# Beep Boop

#### A word/phrase insertion app.

#### By Scott Bergler

## Description
Given a numeric input the program returns a range of numbers from 0 to the inputted number with the following exceptions in order of importance:
1. Numbers divisible by 3 are replaced with "I'm sorry, Dave. I'm afraid I can't do that."

2. Numbers that contain a 1 are replaced (all digits) with "Boop!"

3. Numbers that contain a 0 are replaced (all digits) with "Beep!"

### Specifications:
##### Spec: Return user input:
- [x] ** Expect: ** beepBoop(19) === "19";

##### Spec: Return all integers from 0 up to and including the user input:
- [x] ** Expect: ** beepBoop(19) === "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,17 ,18, 19";

##### Spec: Replace numbers divisible by 3 with "I'm sorry, Dave. I'm afraid I can't do that.":
- [x] ** Expect: ** beepBoop(9) === "0, 1, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, I'm sorry, Dave. I'm afraid I can't do that., 7, 8, I'm sorry, Dave. I'm afraid I can't do that.";

##### Spec: Replace numbers containing a 1 with "Boop!":
- [x] ** Expect: ** beepBoop(19) === "0, Boop!, 2, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, I'm sorry, Dave. I'm afraid I can't do that., 7, 8, I'm sorry, Dave. I'm afraid I can't do that., Boop!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., Boop!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., Boop!, Boop!, Boop!, Boop!";

##### Spec: Replace numbers containing a 0 with "Beep!":
- [x] ** Expect: ** beepBoop(27) === "Beep!, Boop!, 2, I'm sorry, Dave. I'm afraid I can't do that., 4, 5, I'm sorry, Dave. I'm afraid I can't do that., 7, 8, I'm sorry, Dave. I'm afraid I can't do that., Boop!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., Boop!, Boop!, I'm sorry, Dave. I'm afraid I can't do that., Boop!, Boop!, Boop!, Boop!, Beep!, Boop!, 22, 23, I'm sorry, Dave. I'm afraid I can't do that., 25, 26, I'm sorry, Dave. I'm afraid I can't do that.";


## Objectives

- [x] JavaScript business logic and user interface logic are separate.

- [x] Variable names are descriptive and use lower camel case (e.g. myVariableExample).

- [x] Code is clean, well-refactored, and easy-to-read. This includes correct indentation, spacing, and including only necessary comments and debugging tools.

- [x] All previous objectives have been met.

- [x] Logic is broken down into "plain English" specs, listed in README.

- [ugh] Project is in a presentable, portfolio-quality state.

- [x] Required functionality is in place by Friday deadline.

- [x] Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

- [x] Application implements a loop and works as expected.

## Setup/Installation Requirements
View the code at [GitHub](https://github.com/skillitzimberg/beepBoop).

## Known Bugs


## Support and contact details

Scott Bergler :: commandinghands@gmail.com

## Technologies Used

HTML, CSS, & Javascript.

### License

Licensed under the MIT license.

Copyright (c) 2018 ** Scott Bergler **
