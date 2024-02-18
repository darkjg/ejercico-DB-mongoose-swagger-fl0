module.exports = {
    components: {
        schemas: {
            Task: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'objectId',
                        description: "user identification number",
                        example: "6201064b0028de7866e2b2c4"
                    },
                    title: {
                        type: 'string',
                        description: "username to register",
                        example: "John"
                    },
                    completed: {
                        type: 'Boolean',
                        description: "if complete or not",
                        example: false
                    },
                  
                }
            }
        }
    }
}
