const fs = require("fs");

const getNotes = async () => {
    try {
        return await fs.readFileSync("./notes.txt").toString("utf8");
    } catch (e) {
        console.log("Error: ", e);
    }
};

const addNote = async (file, input) => {
    let note = `\n${input}`;
    try {
        await fs.appendFileSync(file, note);
    } catch (e) {
        console.log("Error: ", e);
    }
};

const createNote = async (file, text) => {
    try {
        fs.writeFileSync(file, `${text}`);
    } catch (e) {
        console.log("Error: ", e);
    }
};

module.exports = {
    getNotes,
    addNote,
    createNote
};
