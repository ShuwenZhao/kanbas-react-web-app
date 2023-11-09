import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  assignments: JSON.parse(localStorage.getItem('assignments')) || db.assignments,
  assignment: {
    name: "New Assignment",
    description: "New Assignment Description",
    points: "100",
    assign: "",
    dueDate: "",             // Default value for dueDate
    availableFromDate: "",   // Default value for availableFromDate
    availableUntilDate: ""   // Default value for availableUntilDate
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignmentAction: (state, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },
    addAssignmentAction: (state, action) => {
      const newId = new Date().getTime().toString();
      const newAssignment = {
        ...action.payload,
        _id: newId
      };
      state.assignments = [
        newAssignment,
        ...state.assignments,
      ];
    },
    deleteAssignmentAction: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
      
    },
    updateAssignmentAction: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
      
    },
    selectAssignmentsAction: (state, action) => {
      // Spread the payload to ensure all properties are updated
      state.assignment = {
        ...state.assignment,  // This spreads the current properties of the assignment
        ...action.payload    // This spreads and updates with the new properties from the payload
      };
    },
    setAssignmentsAction: (state, action) => {
      state.assignments = action.payload;
    },
  },
});

export const { addAssignmentAction, deleteAssignmentAction, updateAssignmentAction, selectAssignmentsAction, setAssignmentsAction } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
