export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'InProgress' | 'Done';
export type tabName = 'AllTask' | 'Done' | 'InProgress'

export interface Task {
  id: string; 
  title: string;
  description: string;
  date: Date;
  priority: Priority;
  status: Status;
}

export interface User {
  fName: string; 
  lName: string;
  email: string;
  password: string;
}