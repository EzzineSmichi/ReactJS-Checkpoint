import { Component } from "react";



class Main extends Component{
    render(){
        return(
            <div className='main d-lg-flex justify-content-between align-items-center p-5'>
                <div className='card col-sm-10 col-md-8 col-lg-5 bg-info mx-auto'>
                    <div class="card-body">
                        <h3 class="card-title text-center">Login</h3>
                        
                        <form>
                            <div className='form-group mb-3'>
                                <label htmlFor='id'>Your ID :</label>
                                <input type="text" className='form-control w-75' name='id' id='id'/>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='pass'>Password :</label>
                                <input type='password' className='form-control w-75' name='pass' id='pass'/>
                            </div>
                            <div >
                                <a href='#'>Forget Password ?</a>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                <label class="form-check-label" for="autoSizingCheck">Remember me</label>
                            </div>

                            <div className='text-center mt-3'>
                                <button type='submit' className='btn btn-primary mr-3'>Submit</button>
                                <button type='reset' className='btn btn-primary'>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='card col-sm-10 col-md-8 col-lg-5 bg-info mt-3 mx-auto'>
                    <div class="card-body">
                        <h3 class="card-title text-center">Register</h3>
                        <form>
                            <div className='form-group mb-3'>
                                <label htmlFor='fname'>First Name :</label>
                                <input type="text" className='form-control w-75' name='fname' id='fname'/>
                            </div>
                            <div className='form-group '>
                                <label htmlFor='lname'>Last Name :</label>
                                <input type='text' className='form-control w-75' name='lname' id='lname'/>
                            </div>
                            <div className='form-group '>
                                <label htmlFor='mail'>Email :</label>
                                <input type='email' className='form-control w-75' name='mail' id='mail'/>
                            </div>
                            <div className='form-group mb-3'>
                                <label htmlFor='id'>Your ID :</label>
                                <input type="text" className='form-control w-75' name='id' id='id'/>
                            </div>
                            <div className='form-group '>
                                <label htmlFor='pass'>Password :</label>
                                <input type='password' className='form-control w-75' name='pass' id='pass'/>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="c1" id="ck1"/>
                                <label class="form-check-label" for="ck1">Accept terms and conditions</label>
                            </div>
                            <div className='text-center mt-3'>
                                <button type='submit' className='btn btn-primary mr-3'>Submit</button>
                                <button type='reset' className='btn btn-primary'>Reset</button>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
    )};
    
}

export default Main;