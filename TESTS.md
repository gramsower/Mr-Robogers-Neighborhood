### This page contains all the tests for the javascript business logic required for the page to function properly.

### Tests

Describe: beepBoop()

Test: It should return an array of numbers beginning at zero up to and including the user's inputted number.
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: It should return an error message if the user fails to enter a value.
Code: beepBoop();
Expected Output: 'Error: You must enter a number--greater than zero--if you want me to talk to you (other than this sentence!)'

Test: It should return an error message if the user enters '0' as the value.
Code: beepBoop(0);
Expected Output: 'Error: You must enter a number--greater than zero--if you want me to talk to you (other than this sentence!)'

Test: It should return "Beep!" in place of an array value if any part of that value is '1'.
Code: beepBoop(1);
Expected Output: [0, "Beep!"]

Test: It should return "Boop!" in place of an array value if any part of that value is '2'.
Code: beepBoop(2);
Expected Output: [0, "Beep!", "Boop!"]

Test: It should return "Won't you be my neighbor?" in place of an array value if any part of that value is '3'.
Code: beepBoop(3);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

Test: It should return "Won't you be my neighbor?", "Boop!", or "Beep!" if any of the entries in the array contains a '3', '2', or '1', respectively.
Code: beepBoop(13);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]