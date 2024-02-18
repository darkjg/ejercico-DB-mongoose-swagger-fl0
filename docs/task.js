module.exports = {
    paths: {
        "/create": {
            post: {
                tags: {
                    Users: "Create a task",
                },
                description: "Create task",
                operationId: "createTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Task created successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            }
        },

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        "/": {
            get: {
                tags: {
                    Users: "Get the task",
                },
                description: "Get all tasks",
                operationId: "getTasks",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Tasks get  successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            }
        },

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        "/id/:_id": {
            delete: {
                tags: {
                    Users: "Delete the task",
                },
                description: "Delete tasks",
                operationId: "deleteTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Task",
                            },
                        },
                    },
                },
                responses: {
                    204: {
                        description: "Tasks delete successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        "/id/{_id}": {
            put: {
                tags: {
                    Tasks: "Update the name task",
                },
                description: "Update Task",
                operationId: "updateTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "Id of Task to be updated",
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Task" },
                        },
                    },
                },
                responses: {
                    200: { description: "Task updated successfully" },
                    500: { description: "Server error" },
                },
            },
        },
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    },
};
