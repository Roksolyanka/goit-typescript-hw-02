/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/
type MaleOrFemale = "male" | "female";
let myGender: MaleOrFemale;
myGender = "male";
myGender = "female";

export {};
