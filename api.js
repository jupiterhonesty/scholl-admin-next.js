import {
  fetchStudentsApi,
  searchStudentsApi,
  createStudentApi,
  deleteStudentApi,
  updateStudentAddressApi,
  updateStudentCityApi,
  updateStudentEmailApi,
  updateStudentFirstNameApi,
  updateStudentLastNameApi,
  updateStudentPhoneApi,
  updateStudentStateApi,
  updateStudentZipApi,
  fetchTestsByStudentIdApi,
  fetchProblemsByStudentTestIdApi,
  fetchLessonListApi,
  fetchUnitsApi,
  fetchStudentLessonListApi,
  assignLessonToStudentApi
} from "./components/Student/index/api";

import {
  createClassApi,
  fetchClassesApi,
  updateClassNameApi,
  updateClassStartDateApi,
  updateClassEndDateApi,
  updateClassDurationApi,
  updateClassExcludeFromStatisticsApi,
} from './components/Classes/index/api';

import { fetchInstructorsApi, searchInstructorsApi, updateInstructorFirstNameApi,
  updateInstructorLastNameApi,
  updateInstructorEmailApi,
  updateInstructorStateApi,
  updateInstructorCityApi,
  updateInstructorZipApi,
  updateInstructorAddressApi,
  addInstructorToLocationApi,
  createNewInstructorApi,
} from './components/Instructor/index/api';

export const classApi = {
  createClassApi,
  fetchClassesApi,
  updateClassNameApi,
  updateClassStartDateApi,
  updateClassEndDateApi,
  updateClassDurationApi,
  updateClassExcludeFromStatisticsApi,
};

export const studentApi = {
  fetchStudentsApi,
  searchStudentsApi,
  createStudentApi,
  deleteStudentApi,
  updateStudentAddressApi,
  updateStudentCityApi,
  updateStudentEmailApi,
  updateStudentFirstNameApi,
  updateStudentLastNameApi,
  updateStudentPhoneApi,
  updateStudentStateApi,
  updateStudentZipApi,
  fetchTestsByStudentIdApi,
  fetchProblemsByStudentTestIdApi,
  fetchLessonListApi,
  fetchUnitsApi,
  fetchStudentLessonListApi,
  assignLessonToStudentApi
};

export const instructorApi = {
  createNewInstructorApi,
  fetchInstructorsApi,
  searchInstructorsApi,
  updateInstructorFirstNameApi,
  updateInstructorLastNameApi,
  updateInstructorEmailApi,
  updateInstructorStateApi,
  updateInstructorCityApi,
  updateInstructorZipApi,
  updateInstructorAddressApi,
  addInstructorToLocationApi,

};
