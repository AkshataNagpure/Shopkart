import { useForm } from "react-hook-form";
import "./Login.css";
function Login(){
  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
  } = useForm();


  // form submit 
  const onSubmit=(data) =>{
    console.log("user data:",data);
    alert("Registration successful!");
    reset();
  };

  return ( 
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>User Registration</h2>
          {/* name */}
          <div className="form-group">
            <label >Name:</label> <br />
            <input type="text" {...register("name",{required:"Name is required"})} />
            <p className="error">
              {errors.name?.message}
            </p>
          </div>

          {/* email */}
          <div className="form-group">
            <label>Email:</label> <br />
            <input type="email" {...register("email",{required:"email is required", pattern:{value:/^\S+@\S+$/i, message:"invalid email format"}})} />
            <p className="error">
              {errors.email?.message}
            </p>
          </div>

          <div className="form-group">
            <label>Password:</label> <br />
            <input type="password" {...register("password",{required:"password is required"})} />
            <p className="error">
              {errors.password?.message}
            </p>
          </div>

          <button className="login-btn">Register</button>

        </form>

      </div>
  )
}
export default Login;