/*
    Given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. ONly one query can be executed at a time, 
    but the queries can be executed in any order. A query's waiting time is defined as the amount of time it must 
    wait before its execution starts. In other words, if a query is executed second, then its waiting time is the duration of the first query, if a query is
    executed third then its waiting time is the sume of the durations of the first two queries.
    Return the minimum amount of total waiting time for all of the queries.
    Ex [1, 4, 5], then total waiting time if the queries were executed [5, 1, 4] would be (0) + (5) + (5+1) = 11. 
*/

// O(n) time, O(1) space
function minimumWaitingTime(queries) {
    let sortedQueries = queries.sort((a, b) => (a - b));
    let runningSum = 0;
    let waitingArr = [0, 0];
    for (let i = 1; i < queries.length; i++) {
        waitingArr[0] = waitingArr[1]
        waitingArr[1] = ((waitingArr[0] + queries[i-1]));
        runningSum += waitingArr[1];
    }
    return runningSum;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6])) // 17

// 1, 2, 2, 3, 6
// 0, 1, 3, 5, 8 = 1 + 3 + 5 + 8 = 17
