# PET

## TC-01: Create a new pet
   
### Test steps
    1. POST -> http://localhost:8080/api/v3/pet  
    
    # Expected result
      200 OK
-------------------------------------------------------------
## TC-02: Update a pet

### Test steps
    1. POST -> http://localhost:8080/api/v3/pet  
    2. PUT -> http://localhost:8080/api/v3/pet
-------------------------------------------------------------
## TC-03: Find pets by status

### Test steps
    1. POST -> http://localhost:8080/api/v3/pet
    1. GET -> http://localhost:8080/api/v3/pet/getByStatus?status={status}  
-------------------------------------------------------------
## TC-04: Find pets by tag

### Test steps
    1. POST -> http://localhost:8080/api/v3/pet
    1. GET -> http://localhost:8080/api/v3/pet/getByTags?tags={status}  
-------------------------------------------------------------
## TC-05: Get pet by ID

### Test steps
    1. POST -> http://localhost:8080/api/v3/pet
    1. GET -> http://localhost:8080/api/v3/pet/{id}  
-------------------------------------------------------------
## TC-06: Update a pet with form data

### Test steps
    1. POST -> http://localhost:8080/api/v3/pet
    1. POST -> http://localhost:8080/api/v3/pet/{ID}?name={name}&status={status}  
-------------------------------------------------------------
## TC-07: Update a pet image
### Test steps
    1. POST -> http://localhost:8080/api/v3/pet
    1. POST -> http://localhost:8080/api/v3/pet/{ID}?additionalMetadata={image_path}  
-------------------------------------------------------------
## TC-08: Delete a pet by ID
### Test steps
    1. api_key required
    1. POST -> http://localhost:8080/api/v3/pet
    1. DELETE -> http://localhost:8080/api/v3/pet/{ID}  
-------------------------------------------------------------
We can add more postive and negative scenarios to check how project behaves to errors:  
500  
400  
404  
401  
403  
and more...