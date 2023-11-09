import axios from "axios";
const COURSES_URL = "http://localhost:4000/api/courses";

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
      `http://localhost:4000/api/assignments/${assignmentId}`,
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
    `http://localhost:4000/api/assignments/${assignmentId}`
  );
  return response.data;
};
