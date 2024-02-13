import { useState } from "react"
import { loginFormType } from "../../../types"
const defaultValue:loginFormType = {
    email:'',
    password:''
  }
const Login = () => {
    const [formData,setFormData] = useState<loginFormType>(defaultValue)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(formData)
  }
  return (
    <section className="vh-100 gradient-custom" >
  <div className="container  h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 h-99 p-0">
        <div className="card bg-dark text-white" style={{borderRadius:'2rem'}}>
          <div className="card-body p-1 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">
              <form onSubmit={handleSubmit}>
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" onChange={handleChange} value={formData.email}/>
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg"  onChange={handleChange} value={formData.password}/>
                <label className="form-label" htmlFor="typePasswordX">Password</label>
              </div>
              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
              </form>
            </div>
           
            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Login;
