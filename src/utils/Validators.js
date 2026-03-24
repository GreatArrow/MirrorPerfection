// Validators.js

/**
 * Checks if the file name has a valid video extension.
 * Valid extensions: .mp4, .avi, .mkv
 * @param {string} filename - The name of the file
 * @returns {boolean} - True if valid video file, false otherwise
 */
function isValidVideoFile(filename) {
    const validExtensions = ['.mp4', '.avi', '.mkv'];
    const fileExtension = filename.slice((Math.max(0, filename.lastIndexOf('.')) || Infinity) + 1);
    return validExtensions.includes('.' + fileExtension);
}

/**
 * Checks if the file name has a valid model file extension.
 * Valid extensions: .model, .pb, .h5
 * @param {string} filename - The name of the file
 * @returns {boolean} - True if valid model file, false otherwise
 */
function isValidModelFile(filename) {
    const validExtensions = ['.model', '.pb', '.h5'];
    const fileExtension = filename.slice((Math.max(0, filename.lastIndexOf('.')) || Infinity) + 1);
    return validExtensions.includes('.' + fileExtension);
}

/**
 * Validates activity names.
 * Activity names must be a string and not empty.
 * @param {string} name - The name of the activity
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidActivityName(name) {
    return typeof name === 'string' && name.trim() !== '';
}

module.exports = { isValidVideoFile, isValidModelFile, isValidActivityName };