"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

interface FormValues {
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
  termsConditions: boolean;
}

export default function ContactUsForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit = async (data: FormValues) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "contactUs",
        ...data,
      });

      setSuccess(true);
    }

    // Reset the form after successful submission
    reset();
  };

  return (
      <section>
        <div className="pt-6">
          <p className="mb-6 font-light text-gray-500">
            We&apos;d love to hear from you! Got a question, feedback, or just want to say hi? We&apos;re all ears. Plus, if you have ideas for our next blog post (we&apos;re always looking for inspiration), let us know!
          </p>
          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">
              <p>Your message has been sent successfully!</p>
            </div>
          )}
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full group">
                <label htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-gray-900">
                  First name
                </label>
                <input type="text"
                  id="firstName"
                  {...register("firstName", { required: "Required" })}
                  className={`${errors.firstName ? 'border-red-500' : 'border-gray-300'} shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5`}
                />
              </div>
              <div className="relative z-0 w-full group">
                <label htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-gray-900">
                  Last name
                </label>
                <input type="text"
                  id="lastName"
                  {...register("lastName", { required: "Required" })}
                  className={`${errors.lastName ? 'border-red-500' : 'border-gray-300'} shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5`}
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900">
                Subject
              </label>
              <input type="text"
                id="subject"
                {...register("subject", { required: "Required" })}
                className={`${errors.subject ? 'border-red-500' : 'border-gray-300'} block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border shadow-sm focus:outline-none`}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900">
                Your message
              </label>
              <textarea id="message"
                rows={6}
                {...register("message", { required: "Required" })}
                className={`${errors.message ? 'border-red-500' : 'border-gray-300'} block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border focus:outline-none`}
              />
            </div>
            <div className="flex">
              <div className="">
                <input id="termsConditions"
                  type="checkbox"
                  {...register("termsConditions", { required: "Required" })}
                  className={`${errors.termsConditions ? 'outline-red-500 outline outline-1' : 'outline-none'} w-4 h-4 text-blue-600 rounded`}
                />
              </div>
              <label htmlFor="termsConditions" className="ms-2 font-medium text-gray-900">
                I agree to the <Link className="text-blue-600" target="_blank" href="/terms-of-use">Terms of Use</Link> and <Link className="text-blue-600" target="_blank" href="/privacy-policy">Privacy Policy</Link>.
              </label>
            </div>
            <button type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-600 sm:w-fit focus:outline-none">
              Send message
            </button>
          </form>
        </div>
      </section>
  );
}
