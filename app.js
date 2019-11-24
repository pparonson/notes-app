const fs = require("fs");
const yargs = require("yargs");
const validator = require("validator");
const notes = require("./notes.js");

// create, add, list, remove notes
// const addNote = async (file, input) => {
//     await notes.addNote(file, input);
// };

// const printNote = async () => {
//     const note = await notes.getNotes();
//     console.log(note);
// };

// const createNote = async (file, input) => {
//     notes.createNote("./notes.txt", input);
// };

// update yargs version
yargs.version = "1.1.0";

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        console.log(
            `Adding a new note. Title: ${argv.title}, body: ${argv.body}`
        );
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler() {
        console.log("Removing a note");
    }
});

yargs.command({
    command: "read",
    describe: "Read a note",
    handler() {
        console.log("Reading a note");
    }
});

yargs.command({
    command: "list",
    describe: "List all notes",
    handler() {
        console.log("Listing all notes");
    }
});

// let command = yargs.argv._[0];
// if (command === "add") {
//     let _title = yargs.title ? yargs.title : "";
//     let _body = yargs.body ? yargs.body : "";
//     if (_title && _body) {
//         let note = {
//             title: _title,
//             body: _body
//         };
//         notes.addNote("./notes.txt", note);
//     }
// }
// if (command === "create") {
// }

// printNote();

// let testEmail = "pparonson@homail.com";
// console.log("EMAIL VALIDATOR: ", validator.isEmail(testEmail));

yargs.parse();
