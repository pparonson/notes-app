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
    // check duplicate notes array
    const duplicateNotes = notes.filter(note => {
        return note.title.toLowerCase() === _title.toLowerCase();
    });

    if (duplicateNotes.length > 0) {
        console.log("note title already exists");
    } else {
        try {
            const note = {
                title: _title,
                body: _body
            };
            notes = [...notes, note];
            await saveNotes(notes);
        } catch (e) {
            console.log("Error: ", e);
        }
    }
};

const removeNote = async _title => {
    let notes = await loadNotes();
    let filteredNotes = notes.filter(note => {
        if (note.title.toLowerCase() === _title.toLowerCase()) {
            console.log(`Removing ${note.title}`);
        }
        return note.title.toLowerCase() !== _title.toLowerCase();
    });

    if (notes.length === filteredNotes.length) {
        console.log(`${_title} not found. Nothing removed.`);
    }

    await saveNotes(filteredNotes);
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
    removeNote,
    createNote,
    loadNotes
};
