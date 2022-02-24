package com.crudapi.Employeesystem.service;

import com.crudapi.Employeesystem.model.Employee;

import java.util.List;

public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public List<Employee> getAllEmployee();
    public Employee get(Integer id);
    public void delete(Integer id);


}
