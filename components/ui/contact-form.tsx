"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null; // What kind of message to show
    message: string; // The actual message text
  }>({ type: null, message: "" }); // Start with no message

  // Initialize React Hook Form with our validation schema
  const {
    register, // Function to connect form inputs to React Hook Form
    handleSubmit, // Function that handles form submission
    formState: { errors, isSubmitting }, // Track errors and submission state
    reset, // Function to clear the form after successful submission
  } = useForm<ContactFormData>({
    // Use Zod schema for validation - checks data as user types
    resolver: zodResolver(contactSchema),
  });

  // Function that runs when user submits the form
  // This is where we send data to our API
  const onSubmit = async (data: ContactFormData) => {
    try {
      // Clear any previous status messages
      setSubmitStatus({ type: null, message: "" });

      // Send data to our API route using fetch (like making a web request)
      const response = await fetch("/api/contact", {
        method: "POST", // POST means we're sending data to the server
        headers: {
          "Content-Type": "application/json", // Tell server we're sending JSON
        },
        body: JSON.stringify(data), // Convert form data to JSON string
      });

      // Get the response data from the server
      const result = await response.json();

      // If response is not OK (status 200), something went wrong
      if (!response.ok) {
        // Throw error to be caught below
        throw new Error(result.error || "Something went wrong");
      }

      // Success! Show success message to user
      setSubmitStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });
      // Clear the form fields so user can send another message
      reset();
    } catch (error) {
      // If anything goes wrong, show error message to user
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-center text-lg uppercase">
        <em>----Contact Me----</em>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="">
          <label htmlFor="name" className="text-sm uppercase">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full border-b border-gray-400"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full border-b border-gray-400"
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="text-sm uppercase">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            {...register("subject")}
            className="w-full border-b border-gray-400"
            placeholder="What's this about?"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="text-sm uppercase">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={5}
            maxLength={200}
            className="w-full border border-gray-400 resize-none min-h-[50px]"
            placeholder="Your message..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn uppercase"
        >
          {isSubmitting ? "Sending..." : "Submit Message"}
        </button>

        {submitStatus.type && (
          <div
            className={` ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}
