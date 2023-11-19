import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`

export const createAssignment = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignmentId, assignment) => {
  //console.log("Sending update for assignmentId:", assignmentId);
  //console.log("With data:", assignment);
  try {
    const response = await axios.put(
      `${API_BASE}/assignments/${assignmentId}`,
      assignment
    );
    return response.data;
  } catch (error) {
    //console.error("Error updating assignment:", error);
    throw error;
  }
};

export const deleteAssignment = async (assignmentId) => {
  const response = await axios.delete(
    `${API_BASE}/assignments/${assignmentId}`
  );
  return response.data;
};
