// Redirect to unknown endpoint
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
};

// Handle errors
const errorHandler = (error, request, response, next) => {
    console.log(`Error: ${error.message}`);

    // example error
    if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({ error: 'invalid token' });
    }

    next(error);
};

module.exports = { unknownEndpoint, errorHandler };
