/*
Directed or Undirected Graphs
Weighted or Unweighted Graphs
*/

/****************
 * This is a Graph :)

    [2] ------------- [0]
    /  \
   /    \
  /      \
 [1]------[3]
 *****************/


// Edge List
const edgeGraph = [[0, 2], [2, 3], [2, 1], [1, 3]];

// Adjacent List - index of node is the coresponding value, (0 is connected to 2, 1 is connected to 2 and 3, ect)
const adjGraph = [[2], [2, 3], [0, 1, 3], [1, 2]];

// Adjacent Matrix
const matrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];






