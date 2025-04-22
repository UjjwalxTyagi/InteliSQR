import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "../utils/validation";
import { loginUser } from "../api/auth";
import { useMutation } from "@tanstack/react-query";

const LoginForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setShowSuccess(true); // ✅ show success
      setTimeout(() => setShowSuccess(false), 4000); // ✅ auto hide after 4 sec
    },
    onError: (error: any) => {
      alert("❌ " + error.response.data.message);
    },
  });

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", paddingTop: "50px" }}>
      {/* Centering the Welcome Back message */}
      <h2 style={{ textAlign: "center" }}>Welcome Back</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>UID</label>
          <input {...register("email")} />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        <div>
          <label>Password</label>
          <input type="password" {...register("password")} />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Success message */}
      {showSuccess && (
        <p
          style={{
            marginTop: "20px",
            color: "green",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          🎉 Hurray! You’ve successfully signed in.
        </p>
      )}
    </div>
  );
};

export default LoginForm;
