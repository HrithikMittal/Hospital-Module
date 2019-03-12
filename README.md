# Work-Flow

<table>
  <tr>
    <th>Step No</th>
    <th>Name of Updated File</th>
    <th>What is update</th>
    <th>Remarks</th>
  </tr>
  
  <tr>
    <td>1</td>
    <td>hospital_add_remove.js</td>
    <td>Add inputs in the forms for more details.</td>
    <td>No Remark</td>
  </tr>
  
  
  <tr>
    <td>2</td>
    <td>adddoctor.js</td>
    <td>Update the object which is to be inserted into database.</td>
    <td>No Remark</td>
  </tr>
  
  
  
  <tr>
    <td>3</td>
    <td>adddoctor.js</td>
    <td>Make the csv from the doctor details.</td>
    <td>For this i used npm module "fast-csv"</td>
  </tr>
  
  
  
  <tr>
    <td>4</td>
    <td>adddoctor.js</td>
    <td>append the csv from the doctor details.</td>
    <td>For this i used npm module "csv-write-stream"</td>
  </tr>
  
  
  
  <tr>
    <td>5</td>
    <td>Whole module</td>
    <td>Testing the complete module</td>
    <td>Add Error Handling and add stability to the program</td>
  </tr>
  
  
</table>


# Requirements?
<h3>Download the following dependicies in terminal.</h3>

```
  npm install mongodb
  npm install express
  npm install body-parser
  npm install fs
  npm install csv-write-stream
  npm install fast-csv
```

# How to run?
<h3>Run this in your terminal.</h3>

```
  nodemon index.js
```
<h3>Server will run on localhost:3000/ </h3>

# Routes For reference
<table>
  <tr>
    <th>Module Name</th>
    <th>Database Name</th>
    <th>Collection Name</th>
    <th>Route</th>
    <th>Post</th>
    <th>Get</th>
    <th>Description</th>
  </tr>
 
 
  <tr>
  <td>Hospital</td>
    <td> No </td>
    <td> No </td>
    <td> http://localhost:3000/ or http://localhost:3000/reg</td>
    <td>No</td>
    <td>No</td>
    <td>This is Main Page </td>
  </tr>
 
  <tr>
  <td>Hospital</td>
    <td> devsoc </td>
    <td> hospitaldata </td>
    <td> http://localhost:3000/hospitalsreg </td>
    <td>Yes</td>
    <td>No</td>
    <td>Signup For hospital</td>
  </tr>
 
 
  <tr>
  <td>Hospital</td>
    <td> devsoc </td>
    <td> hospitaldata </td>
    <td> http://localhost:3000/hospitallogin </td>
    <td>No</td>
    <td>Yes</td>
    <td>Login For hospital</td>
  </tr>
 
  <tr>
  <td>Hospital</td>
    <td> devsoc </td>
    <td> doctorsdata </td>
    <td> http://localhost:3000/add_doctor </td>
    <td>Yes</td>
    <td>No</td>
    <td>Add Doctor</td>
  </tr>
 
  <tr>
  <td>Hospital</td>
    <td> devsoc </td>
    <td> doctorsdata </td>
    <td> http://localhost:3000/add_remove </td>
    <td>Yes</td>
    <td>Yes</td>
    <td>Remove Doctor</td>
  </tr>
 
 
  </table>

