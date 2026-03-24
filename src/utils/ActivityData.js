// ActivityData.js

// Predefined activities
const activities = [
    { id: 1, name: 'Running', duration: 30 },
    { id: 2, name: 'Cycling', duration: 60 },
    { id: 3, name: 'Swimming', duration: 45 },
];

// Function to get all activities
function getAllActivities() {
    return activities;
}

// Function to add a new activity
function addActivity(name, duration) {
    const newActivity = { id: activities.length + 1, name, duration };
    activities.push(newActivity);
    return newActivity;
}

// Function to remove an activity by ID
function removeActivity(id) {
    const index = activities.findIndex(activity => activity.id === id);
    if (index !== -1) {
        return activities.splice(index, 1);
    }
    return null;
}

// Export functions and activities
module.exports = { getAllActivities, addActivity, removeActivity, activities };