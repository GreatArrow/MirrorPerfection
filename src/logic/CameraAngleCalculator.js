// CameraAngleCalculator.js

/**
 * Calculate camera angle based on pose estimation data
 * @param {Object} pose - The pose estimation data
 * @param {number} pose.x - The x coordinate
 * @param {number} pose.y - The y coordinate
 * @param {number} pose.z - The z coordinate
 * @returns {number} - The calculated camera angle in degrees
 */
function calculateCameraAngle(pose) {
    const { x, y, z } = pose;
    // Simple calculation for demo purposes, replace with real logic
    const angle = Math.atan2(y, x) * (180 / Math.PI); // Convert radians to degrees
    return angle;
}

module.exports = calculateCameraAngle;