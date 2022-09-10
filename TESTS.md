### This page contains all the tests for the javascript business logic required for the page to function properly, and a whiteboard/ scratch paper section for work-in-progress notes.

### Tests

Describe: beepBoop()

Test: It should return an array of numbers beginning at zero up to and including the user's inputted number.
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: It should return an error message if the user enters '0' as the value.
Code: beepBoop(0);
Expected Output: 'Error: You must enter a number greater than zero if you want me to talk to you (other than this sentence!)'


Test: It should return 'Beep!' when the user enters '1'.
Code: findAndReplace(1)
Expected Output: 'Beep!'



### Notes

- Initial function should return an array from 0 to whatever number the user input. Array should not be visible to user, but should be placed into its own variable.
    - Function should use a for (?) loop where index 0 = 0, index 1 = index 0+1, index 2 = index 1+1, and so on.
    - Variables: userInput = input from html form;




    - For UI logic/ html: use "number" form.

- Second function should then take array output from first function and loop through array, replacing each number with appropriate word or phrase, and then return the output in an array to the user.