### This page contains all the tests for the javascript business logic required for the page to function properly, and a whiteboard/ scratch paper section for work-in-progress notes.

### Tests

Describe: beepBoop()

Test: It should return an array of numbers beginning at zero up to and including the user's inputted number.
Code: beepBoop(5)
Expected Output: [0, 1, 2, 3, 4, 5]





### Notes

- Initial function should return an array from 0 to whatever number the user input. Array should not be visible to user, but should be placed into its own variable.
    - For UI logic - input should not permit negative or non-numeric characters

- Second function should then take array output from first function and loop through array, replacing each number with appropriate word or phrase, and then return the output in an array to the user.