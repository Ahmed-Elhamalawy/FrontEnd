import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  let schema = yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("required")
      .min(8, "this should be more than 8 chars"),
    // .matches(
    //   "^(?=.*[A-Z])(?:[a-zA-Z]+?d+[a-zA-Z]+?)+$",
    //   "at least 1 uppercase and 1 number "
    // ),
  });

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFormHandler = (data) => {
    localStorage.setItem("token", `${data.email}${data.password}`);
    navigate("/");
  };
  console.log(formState.errors);
  return (
    <form onSubmit={handleSubmit(submitFormHandler)}>
      <div className="mt-4 relative flex flex-col gap-5 ">
        <input
          {...register("email")}
          type="text"
          autoComplete="off"
          id="first_name"
          className="  text-sm rounded-lg  block w-full p-2.5 h-9  placeholder:text-light placeholder:font-bold "
          placeholder="Email"
        />
        <p className=" text-red text-start ">
          {formState?.errors?.email?.message}
        </p>
      </div>
      <div className="mt-4 relative flex flex-col gap-5 ">
        <input
          {...register("password")}
          autoComplete="off"
          type="password"
          id="password"
          placeholder="Password"
          className="text-sm rounded-lg  block w-full p-2.5 h-9 placeholder:text-light placeholder:font-bold "
        />
        <p className=" text-red text-start">
          {formState?.errors?.password?.message}
        </p>
      </div>

      <button className="btn glass w-1/3">Login</button>
    </form>
  );
};

export default LoginForm;
