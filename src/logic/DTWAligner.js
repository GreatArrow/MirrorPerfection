// DTWAligner.js

/**
 * Performs Dynamic Time Warping to align two sequences (e.g., video frames and animation frames).
 * @param {Array<number>} seqA - The first sequence.
 * @param {Array<number>} seqB - The second sequence.
 * @returns {Object} - The optimal alignment cost and the path.
 */
function dynamicTimeWarping(seqA, seqB) {
    const n = seqA.length;
    const m = seqB.length;

    // Create cost matrix
    const cost = Array(n + 1).fill(null).map(() => Array(m + 1).fill(Infinity));
    cost[0][0] = 0;

    // Fill the cost matrix
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            const costMatrixValue = Math.abs(seqA[i - 1] - seqB[j - 1]);
            cost[i][j] = costMatrixValue + Math.min(cost[i - 1][j], cost[i][j - 1], cost[i - 1][j - 1]);
        }
    }

    // Backtrack to find the optimal path
    let i = n;
    let j = m;
    const path = [];

    while (i > 0 || j > 0) {
        path.unshift([i - 1, j - 1]);
        const minCost = Math.min(
            cost[i - 1][j],  // Deletion
            cost[i][j - 1],  // Insertion
            cost[i - 1][j - 1] // Match
        );
        if (minCost === cost[i - 1][j]) {
            i--;
        } else if (minCost === cost[i][j - 1]) {
            j--;
        } else {
            i--;
            j--;
        }
    }

    return { cost: cost[n][m], path };
}

// Export the function for use in other modules
module.exports = dynamicTimeWarping;
