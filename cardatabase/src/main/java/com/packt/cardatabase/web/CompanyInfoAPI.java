//package com.packt.cardatabase.web;
//
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.sql.Statement;
//
//import net.minidev.json.JSONArray;
//import net.minidev.json.JSONObject;
//
//public class CompanyInfoAPI {
//
//    // 데이터베이스 연결 정보
//    private static final String DB_URL = "jdbc:mariadb://localhost:3306/cardb";
//    private static final String DB_USER = "root";
//    private static final String DB_PASSWORD = "1234";
//
//    public static void main(String[] args) {
//        try {
//            // 데이터베이스 연결
//            Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
//
//            // 부서 정보를 JSON으로 인코딩
//            JSONArray departments = encodeDepartmentInfo(connection);
//
//            // 사원 정보를 JSON으로 인코딩
//            JSONArray employees = encodeEmployeeInfo(connection);
//
//            // 부서 및 사원 데이터를 담는 JSON 객체 생성
//            JSONObject companyInfo = new JSONObject();
//            companyInfo.put("departments", departments);
//            companyInfo.put("employees", employees);
//
//            // JSON 출력
//            System.out.println(companyInfo.toString());
//
//            // 데이터베이스 연결 종료
//            connection.close();
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//    }
//
//    private static JSONArray encodeDepartmentInfo(Connection connection) throws SQLException {
//        JSONArray departments = new JSONArray();
//
//        // 부서 정보 조회 SQL
//        String query = "SELECT * FROM Departments";
//
//        // SQL 실행
//        Statement statement = connection.createStatement();
//        ResultSet resultSet = statement.executeQuery(query);
//
//        // 결과 처리
//        while (resultSet.next()) {
//            JSONObject department = new JSONObject();
//            department.put("department_id", resultSet.getInt("department_id"));
//            department.put("department_name", resultSet.getString("department_name"));
//            department.put("location", resultSet.getString("location"));
//            departments.add(department);
//        }
//
//        // 리소스 해제
//        resultSet.close();
//        statement.close();
//
//        return departments;
//    }
//
//    private static JSONArray encodeEmployeeInfo(Connection connection) throws SQLException {
//        JSONArray employees = new JSONArray();
//
//        // 사원 정보 조회 SQL
//        String query = "SELECT * FROM Employees";
//
//        // SQL 실행
//        Statement statement = connection.createStatement();
//        ResultSet resultSet = statement.executeQuery(query);
//
//        // 결과 처리
//        while (resultSet.next()) {
//            JSONObject employee = new JSONObject();
//            employee.put("employee_id", resultSet.getInt("employee_id"));
//            employee.put("employee_name", resultSet.getString("employee_name"));
//            employee.put("department_id", resultSet.getInt("department_id"));
//            employee.put("position", resultSet.getString("position"));
//            employee.put("salary", resultSet.getDouble("salary"));
//            employees.add(employee);
//        }
//
//        // 리소스 해제
//        resultSet.close();
//        statement.close();
//
//        return employees;
//    }
//}
