const fs = require("fs");

const getNote = async () => {
    try {
        return await fs.readFileSync("./notes.txt").toString("utf8");
    } catch (e) {
        console.log("Error: ", e);
    }
};

const addNote = async (_title, _body) => {
    let notes = await loadNotes();
    try {
        const note = {
            title: _title,
            body: _body
        };
        notes = [...notes, note];
        saveNotes(notes);
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

const loadNotes = async () => {
    try {
        // receives a binary data buffer parsed to JSON string
        const dataJSON = await fs.readFileSync("./notes.json").toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        // console.log("Error: ", e);
        // if file not found, return []
        return [];
    }
};

const saveNotes = async data => {
    try {
        const dataJSON = JSON.stringify(data);
        await fs.writeFileSync("./notes.json", dataJSON);
    } catch (e) {
        console.log("Error: ", e);
    }
};

module.exports = {
    getNote,
    addNote,
    createNote,
    loadNotes
};
