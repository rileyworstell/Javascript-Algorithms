/*
    it's photo day at the local school, and you're the photographer assigned to take class photos
    half the students are wearing blue and the other half are wearing red.
    Each student in the back row must be strictly taller than the student in front of them.
    return true if this is possible
*/

function classPhotos(redHeights, blueHeights) { // red and blue referring to shirt colors :)
    let sortedArr1 = redHeights.sort((a, b) => a - b);
    let sortedArr2 = blueHeights.sort((a, b) => a-b);
    if (sortedArr1[0] < sortedArr2[0]) { // arr2 should be lower height 
        [sortedArr2, sortedArr1] = [sortedArr1, sortedArr2];
    }

    for (let i = 0; i < redHeights.length; i++) {
        if (sortedArr2[i] >= sortedArr1[i]) {
            return false;
        }
    }
    return true;

}

redShirtHeights = [5, 8, 1, 3, 4];
blueShirtHeights = [6, 9, 2, 4, 5];
console.log(classPhotos(redShirtHeights, blueShirtHeights))
// yes the blue shirts can be in the back row.
