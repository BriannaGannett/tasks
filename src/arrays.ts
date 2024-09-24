/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let finalArray: number[] = [];
    if (numbers.length == 0) return finalArray;
    else finalArray = [numbers[0], numbers[numbers.length - 1]];
    return finalArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((number) => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((number) => {
        const tempNum = parseInt(number);
        if (isNaN(tempNum)) {
            return 0;
        } else {
            return tempNum;
        }
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount) => {
        let finalString = "";
        if (amount[0] !== "$") {
            finalString = amount;
        } else {
            finalString = amount.slice(1);
        }
        let tempNum = parseInt(finalString);
        if (isNaN(tempNum)) {
            return 0;
        } else {
            return tempNum;
        }
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let filteredMessages = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );
    let shoutedMessages = filteredMessages.map((message: string) => {
        if (message[message.length - 1] === "!") {
            return message.toUpperCase();
        } else {
            return message;
        }
    });
    return shoutedMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let lengths = words.map((word) => word.length);
    let shortLengths = lengths.filter((length) => length < 4);
    let countOfShortWords = shortLengths.length;
    return countOfShortWords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let filteredColors: string[] = [];
    filteredColors = colors.map((color) => color.toUpperCase());
    filteredColors = filteredColors.filter(
        (color: string): boolean => color !== "RED",
    );
    filteredColors = filteredColors.filter(
        (color: string): boolean => color !== "BLUE",
    );
    filteredColors = filteredColors.filter(
        (color: string): boolean => color !== "GREEN",
    );
    if (filteredColors.length == 0) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = 0;
    let finalString: string = "";
    if (addends.length === 0) {
        return "0=0";
    }
    sum = addends.reduce((accumulator, current) => accumulator + current, 0);
    let additionString = addends.map(String).join("+");
    finalString += sum;
    finalString += "=";
    finalString += additionString;
    return finalString;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum: number = 0;
    let newValues: number[] = [...values];
    if (values.length == 0) {
        return [0];
    }
    let negativeIndex = values.findIndex((value) => value < 0);
    let sliceEnd: number;
    if (negativeIndex !== -1) {
        sliceEnd = negativeIndex;
    } else {
        sliceEnd = values.length;
    }
    sum = values
        .slice(0, sliceEnd)
        .reduce((accumulator, current) => accumulator + current, 0);
    if (negativeIndex !== -1) {
        newValues.splice(negativeIndex + 1, 0, sum);
    } else {
        newValues.push(sum);
    }
    return newValues;
}
