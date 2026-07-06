# Backend API Document

## Project
Employee Management Demo

## Feature
Employee Management API

## Description
This feature provides a REST API to retrieve employee information. The API returns employee details such as ID, Name, and Department in JSON format.

## Changes Implemented

- Added Employee API endpoint
- Added employee data response
- Added new employee record
- Enabled frontend integration through API

## Endpoint

GET /employees

## Sample Response

[
  {
    "id": 1,
    "name": "John Doe",
    "department": "IT"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "department": "HR"
  },
  {
    "id": 3,
    "name": "Alex Brown",
    "department": "Finance"
  },
  {
    "id": 4,
    "name": "Mike Wilson",
    "department": "Operations"
  }
]

## Testing Performed

- Verified API is running successfully
- Verified employee data is returned in JSON format
- Verified frontend can consume the API response

## Author

Shaik Umar
