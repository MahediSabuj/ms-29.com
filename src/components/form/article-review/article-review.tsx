"use client";

import { useState } from "react";
import Rating from "react-rating";
import { Controller, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

interface FormValues {
  firstName: string;
  lastName: string;
  message: string;
  articleRating: number;
}

export default function ArticleReviewForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors},
    reset,
    control,
    setValue
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit = async (data: FormValues) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "articleReview",
        ...data,
      });

      setSuccess(true);
    }

    // Reset the form after successful submission
    reset();
  }

  return (
    <div className="mt-4">
      <div className='py-1 mt-4 border border-x-0 border-t-0'>
        <strong>Write your Comment</strong>
      </div>
      <div>
        {success && (
          <div className="mb-6 mt-4 p-4 bg-green-100 text-green-800 rounded">
            <p>Thanks for your message. We will review and get back to you.</p>
          </div>
        )}
      </div>
      <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
        {/*<div>*/}
        {/*  <label htmlFor="message"*/}
        {/*       className="block mb-2 text-sm font-medium text-gray-900">*/}
        {/*    Rating*/}
        {/*  </label>*/}
        {/*  <Controller*/}
        {/*    name="articleRating"*/}
        {/*    control={control}*/}
        {/*    // defaultValue={0}*/}
        {/*    rules={{ required: "Required" }}*/}
        {/*    render={({ field }) => (*/}
        {/*      <Rating*/}
        {/*        className="red"*/}
        {/*        initialRating={field.value}*/}
        {/*        placeholderRating={field.value}*/}
        {/*        emptySymbol={<FontAwesomeIcon icon={faStarEmpty} size={'lg'} />}*/}
        {/*        fullSymbol={<FontAwesomeIcon icon={faStarFull} size={'lg'} />}*/}
        {/*        placeholderSymbol={<FontAwesomeIcon icon={faStarFull} size={'lg'} />}*/}
        {/*        fractions={2}*/}
        {/*        onClick={(reviewRating) => {*/}
        {/*          setValue('articleRating', reviewRating);*/}
        {/*        }}*/}
        {/*      />*/}
        {/*    )}*/}
        {/*  />*/}
        {/*  <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors.articleRating?.message}</p>*/}
        {/*</div>*/}
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
          <button type="submit"
              className="mt-3 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-600 sm:w-fit focus:outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
