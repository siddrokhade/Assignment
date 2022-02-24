package com.crudapi.Employeesystem.service;

import com.crudapi.Employeesystem.model.Employee;
import com.crudapi.Employeesystem.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceimpl implements EmployeeService{

    @Autowired
    private EmployeeRepo employeeRepo;
    @Override
    public Employee saveEmployee(Employee employee) {

        return employeeRepo.save(employee);
    }

    @Override
    public List<Employee> getAllEmployee() {
        return employeeRepo.findAll();
    }
    @Override
    public Employee get(Integer id){
        return employeeRepo.findById(id).get();
    }
    @Override
    public void delete(Integer id){
        employeeRepo.deleteById(id);
    }
}
