import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 } from 'uuid'
import { useAppSelector } from "../../../store/hook"
import { signFormType } from "../../../types"
import { showAuthAlert } from "../../../utils/alertHandler"
import { errorSelector as authErrorSelector, successSelector as authSuccessSelector, messageSelector } from "../authenticationSlice"
import { imageUploadUrl } from "../hooks/useImageUpload"
const defaultValue:signFormType= {
    email:'',
    password:'',
    name:'',
    photoUrl:''
}
const Sign = () => {
    const [formData,setFormData] = useState<signFormType>(defaultValue)
    const [photoUpload,setPhotoUpload] = useState<File | null>(null)
    const error = useAppSelector(authErrorSelector)
    const [id,setId] = useState('')
    const message = useAppSelector(messageSelector)
    const success = useAppSelector(authSuccessSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getUrl = imageUploadUrl()
    const handlePhotoChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const selectedFile = e.target.files?.[0];
    if(selectedFile){
        setPhotoUpload(selectedFile)
    }
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(formData)
    const photoUrl = getUrl(id,photoUpload as File)
    
  }
  useEffect(()=>{
    showAuthAlert(success,error,message,dispatch,navigate)
  },[error,success])
  useEffect(()=>{
    setId(v4())
  },[])
  return (
    <section className="vh-100 gradient-custom" >
  <div className="container  h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 h-99 p-0">
        <div className="card bg-dark text-white" style={{borderRadius:'2rem'}}>
          <div className="card-body p-1 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">
              <form onSubmit={handleSubmit}>
              <h2 className="fw-bold mb-2 text-uppercase">Sign</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <div className="form-outline form-white mb-4">
                <input type="text" id="typeEmailX" className="form-control form-control-lg" onChange={handleChange} value={formData.name}/>
                <label className="form-label" htmlFor="typeEmailX">Name</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" className="form-control form-control-lg" onChange={handleChange} value={formData.email}/>
                <label className="form-label" htmlFor="typeEmailX">Email</label>
              </div>
              <div className="form-outline form-white mb-4">
                <input type="file" accept="image/*" id="typeEmailX" className="form-control form-control-lg" onChange={handleChange} value={formData.email}/>
                <label className="form-label" htmlFor="typeEmailX">Upload Photo</label>
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

export default Sign;
