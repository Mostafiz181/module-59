import React from "react";

const RegisterRB = () => {
    const handleReactOnlyB=(event=>{
        event.preventDefault()
        const email =event.target.email.value;
        const password= event.target.password.value;
        console.log(email,password)
    })
  return (
    <div className="container">
      <h2>Bootstrap</h2>

      <form onSubmit={handleReactOnlyB}>
        <div className="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            placeholder="Enter Your Email"
          />

        </div>
        <div className="mb-3">

          <input
            type="password"
            class="form-control"
            name="password"
            placeholder="Enter Your Password"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onSubmit={handleReactOnlyB} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterRB;
