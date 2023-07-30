export interface IDepartmentManager{
    departmentManagerId: string;
    name: string;
}

export interface IDepartment {
    departmentId?: string;
    departmentName: string;
    departmentManager: IDepartmentManager;
}