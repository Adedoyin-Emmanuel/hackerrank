class NotesStore {
  collection = [];

  constructor() {
    this.collection = [];
  }

  checkValidNotesState(state) {
    switch (state.toLowerCase()) {
      case "completed":
        return true;
      case "active":
        return true;
      case "others":
        return true;
      default:
        throw new Error(`Invalid state ${state}`);
    }
  }

  addNote(state, name) {
    if (!name) throw new Error("Name cannot be empty");
    this.checkValidNotesState(state);

    const newNote = {
      state,
      name,
    };

    this.collection.push(newNote);
  }

  getNotes(state) {
    this.checkValidNotesState(state);

    return this.collection
      .filter((note) => note.state == state)
      .map((note) => note.name);
  }
}
