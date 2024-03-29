// IMPORT MODULES under test here:
import { makeStatsString } from '../utils.js';

const test = QUnit.test;


test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You changed the head 4 times, the shirt 5 times, and the pants 1 times.`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(4, 5, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'should return "you changed the head 4 times, the shirt 5 times, and the pants 1 times');
});
