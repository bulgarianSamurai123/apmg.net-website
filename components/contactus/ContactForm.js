import React from "react";
import Section from "../UI/Section";
import Button from "../UI/Button";

const ContactForm = () => {
  return (
    <div className="pt-16">
      <form className="space-y-5 bg-card-white-color border border-card-border-color rounded-3xl p-7 w-2/3">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block font-jakarta-sans text-base font-normal text-text-color"
          >
            Name
          </label>
          <input
            className="border border-botticelli w-full rounded-xl px-3 py-2 placeholder:text-neutral-400 focus:border-acccent-color focus:border-2 focus:outline-none"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            // defaultValue={state.values?.name}
            // aria-invalid={!!state.errors?.name}
            // aria-describedby={state.errors?.name ? "name-error" : undefined}
            // className={field}
          />
          {/* {state.errors?.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600">
              {state.errors.name}
            </p>
          )} */}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block font-jakarta-sans text-base font-normal text-text-color"
          >
            Email
          </label>
          <input
            className="border border-botticelli w-full rounded-xl px-3 py-2 placeholder:text-neutral-400 focus:border-acccent-color focus:border-2 focus:outline-none"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            // defaultValue={state.values?.email}
            // aria-invalid={!!state.errors?.email}
            // aria-describedby={state.errors?.email ? "email-error" : undefined}
            // className={field}
          />
          {/* {state.errors?.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {state.errors.email}
            </p>
          )} */}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1 block font-jakarta-sans text-base font-normal text-text-color"
          >
            Message
          </label>
          <textarea
            className="border border-botticelli w-full rounded-xl px-3 py-2 placeholder:text-neutral-400 focus:border-acccent-color focus:border-2 focus:outline-none"
            id="message"
            name="message"
            rows={6}
            // defaultValue={state.values?.message}
            // aria-invalid={!!state.errors?.message}
            // aria-describedby={
            //   state.errors?.message ? "message-error" : undefined
            // }
            // className={field}
          />
          {/* {state.errors?.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600">
              {state.errors.message}
            </p>
          )} */}
        </div>

        {/* {state.status === "error" && state.message && (
          <p role="alert" className="text-sm text-red-600">
            {state.message}
          </p>
        )} */}

        <Button>Send request</Button>
      </form>
    </div>
  );
};

export default ContactForm;
