"use client";
import { registerUser } from "@/db/action";
import toast from "react-hot-toast";

function FormAction() {
  return (
    <form
      className="login-form"
      action={async (formData) => {
       const toastId= toast.loading("Waiting...");
        const result = await registerUser(formData);

        if (result.error) {
          toast.error(result.error, {
            id: toastId,
          });
        }
      }}
    >
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" required />
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" required />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" required />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>

      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        Create Account
      </button>
    </form>
  );
}

export default FormAction;
