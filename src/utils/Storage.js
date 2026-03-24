class Storage {
    constructor() {
        this.notesKey = 'app_notes';
        this.prefsKey = 'app_preferences';
        this.stateKey = 'app_state';
    }

    // Save notes to local storage
    saveNotes(notes) {
        localStorage.setItem(this.notesKey, JSON.stringify(notes));
    }

    // Get notes from local storage
    getNotes() {
        const notes = localStorage.getItem(this.notesKey);
        return notes ? JSON.parse(notes) : [];
    }

    // Save preferences to local storage
    savePreferences(preferences) {
        localStorage.setItem(this.prefsKey, JSON.stringify(preferences));
    }

    // Get preferences from local storage
    getPreferences() {
        const preferences = localStorage.getItem(this.prefsKey);
        return preferences ? JSON.parse(preferences) : {};
    }

    // Save app state to local storage
    saveState(state) {
        localStorage.setItem(this.stateKey, JSON.stringify(state));
    }

    // Get app state from local storage
    getState() {
        const state = localStorage.getItem(this.stateKey);
        return state ? JSON.parse(state) : {};
    }
}

export default new Storage();
