import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Container, Paper } from '@mui/material';
import { Delete } from '@mui/icons-material';


export default function Employee() {
    const paperStyle={padding : '50px 20px',width:600,margin:"20px auto"}
    const [name,setName]=React.useState('')
    const[address,setAddress]=React.useState('')
    const [Employee,setEmployee]=React.useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const Employee={name,address}
        console.log(Employee)
        fetch("http://localhost:8080/employee/add",{method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Employee)
    }).then(()=>{console.log("new student added")})
    }
    
    React.useEffect(()=>{
        fetch("http://localhost:8080/employee/getAll")
        .then(res=>res.json())
        .then(result=>{
            setEmployee(result);
        })

    },[])
      

       const deleteFun=(id)=>{
            // const rem=Employee.filter((emp)=>emp.id!=id)
            // setEmployee(rem)
            fetch("http://localhost:8080/employee/"+id,{
                method:"DELETE",headers:{"Content-Type":"application/json"}
            })
            .then(res=>res.text())
            .then(res=>console.log(res))


       } 

  return (
    
      <Container>
          <Paper elevation={3} style={paperStyle}>
              <h1 style={{color:"blue"}}><u>Add Employee</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Employee Name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=> setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Employee Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=> setAddress(e.target.value) }
      />
      
    </Box>
    
        <Button variant='contained' color='success'onClick={handleClick}>SUBMIT</Button>
    
    </Paper>
    <h1>Employee</h1>


    <Paper elevation={3} style={paperStyle}>
    
      {Employee.map(Employee=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={Employee.id}>
         Id:{Employee.id}<br/>
         Name:{Employee.name}<br/>
         Address:{Employee.address}
         <p align="right">
         <Button variant="outlined" startIcon={<Delete></Delete>} onClick={()=>deleteFun(Employee.id)} >
        Delete
    </Button></p>
        </Paper>
      ))
}
    </Paper>
    </Container>
  );
}
