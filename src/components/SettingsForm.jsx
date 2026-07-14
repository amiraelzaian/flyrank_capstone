import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { settingsSchema } from "../validation/settingsSchema";
import SuccessMessage from "./SuccessMessage";

function SettingsForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitSuccess(false);

    // Simulate an async API call
    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log("Form submitted:", data);

    setSubmitSuccess(true);
    reset();
  };

  return (
    <section aria-labelledby="settings-form-heading">
      <h1 id="settings-form-heading">Account Settings</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-field">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            aria-invalid={errors.fullName ? "true" : "false"}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          {errors.fullName && (
            <p id="fullName-error" className="error-message" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" className="error-message" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby={errors.password ? "password-error" : undefined}
            {...register("password")}
          />
          {errors.password && (
            <p id="password-error" className="error-message" role="alert">
              {errors.password.message}
            </p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Settings"}
        </button>
      </form>

      {submitSuccess && <SuccessMessage />}
    </section>
  );
}

export default SettingsForm;
