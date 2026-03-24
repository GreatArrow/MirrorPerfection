// ModelManager.js

class ModelManager {
    constructor() {
        this.models = { male: [], female: [], custom: [] };
    }

    addModel(type, model) {
        if (this.validateModel(type, model)) {
            this.models[type].push(model);
        } else {
            throw new Error('Invalid model data.');
        }
    }

    validateModel(type, model) {
        const isValid = model && typeof model.name === 'string' && model.name.length > 0;
        // Additional validation logic can be added here
        return isValid;
    }

    getModels(type) {
        return this.models[type];
    }

    removeModel(type, modelName) {
        this.models[type] = this.models[type].filter(model => model.name !== modelName);
    }
}

// Example usage:
// const modelManager = new ModelManager();
// modelManager.addModel('male', { name: 'MaleModel1' });
// modelManager.addModel('female', { name: 'FemaleModel1' });

export default ModelManager;
