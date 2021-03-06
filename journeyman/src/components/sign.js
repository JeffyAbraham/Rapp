    import React, { Component } from 'react'
    import '../styles/style2.css'
    import {Link} from 'react-router-dom'
    import {fire} from '../database/config' 
    import {Form,Button} from 'react-bootstrap'
import Signup from './signup';
    
    export default class Sign extends Component {
      constructor(props){
        super(props);
        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this)
        this.state={
          email:'',
          password:''
        }




      }
      handleChange(e)
      {
        this.setState({[e.target.name]:e.target.value});
      }
      login(e){

          e.preventDefault();
          fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>
          
          {}).catch((error)=>{
            alert(error.message)
          })


      }
      
      render() {
        return (
          <div>
            <Signup/>
          <form >
            
  
            <h1>login</h1>

  <Form.Group controlId="formBasicEmail">
    <Form.Label><h2>Email address</h2></Form.Label>
    <Form.Control value={this.state.email} onChange={this.handleChange} type="email" placeholder="Enter email" name="email"/>
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label><h2>Password</h2></Form.Label>
    <Form.Control value={this.state.password} onChange={this.handleChange}type="password" placeholder="Password" name="password"/>
  </Form.Group>
 
  <Button variant="primary" type="submit" onClick={this.login}>
login 
  </Button>
      </form>


      </div>

         
        )
      }
    }
    