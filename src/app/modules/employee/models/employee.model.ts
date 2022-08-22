import { Department } from './../../department/models/department.model';

export class Employee {
  id: number = 0;
  name: string = '';
  departmentId: number = 0;
  departmentName: string = '';
  salary: number = 0;
  isActive: boolean = false;
}
