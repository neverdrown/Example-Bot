// File to record when a command has an error or basically when using it it gives you an error

module.exports = {
    log: (message) => console.log(`[LOG] ${message}`),
    error: (message) => console.error(`[ERROR] ${message}`)
};
