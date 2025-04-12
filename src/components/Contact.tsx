'use client';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import SendPlaneLineIcon from 'remixicon-react/SendPlaneLineIcon';
import Heading from '@/components/shared/Heading';
import FormInput from '@/components/shared/FormInput';
import FormTextarea from '@/components/shared/FormTextarea';
import { contactDefaultValues, ContactFormData, contactSchema } from '@/util/forms.util';

const Contact = () => {
  const [status, setStatus] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaultValues,
  });
  const { handleSubmit, reset } = form;

  const onSubmit = (formData: ContactFormData) => {
    const sendMessage = async () => {
      try {
        // Send data to the backend API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus('Message sent successfully!');
          // Reset form fields
          reset();

          // Clear the success message after 10 seconds
          setTimeout(() => {
            setStatus(null);
          }, 10000);
        } else {
          setStatus(`Error: ${data.message}`);
        }
      } catch (error) {
        setStatus('An error occurred. Please try again later.');
        console.error(error);
      }
    };
    sendMessage();
  };

  return (
    <div id="contact" className="h-screen max-lg:h-auto py-20 max-lg:py-40 max-xs:pb-20">
      <Heading text="Send me a message" />
      <div
        className="w-full h-full my-auto flex max-lg:flex-col items-center
                   justify-between max-lg:justify-center gap-x-20 max-lg:gap-x-0 gap-y-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={'/girl_writing_email.png'}
            alt="Contact image"
            height={400}
            width={400}
            className="w-[300px] rounded-md"
          />
        </motion.div>
        <FormProvider {...form}>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="w-[600px] max-lg:w-[400px] max-sm:w-full flex flex-col gap-3"
          >
            <div className="w-full flex max-lg:flex-col gap-x-3 max-lg:gap-y-3">
              <FormInput label="Name" name="name" />
              <FormInput label="Email" name="email" />
            </div>
            <FormInput label="Subject" name="subject" />
            <FormTextarea
              label="Feel free to write me a novel (or just a few lines)."
              name="message"
            />

            <button
              type="button"
              onClick={handleSubmit(onSubmit)}
              className="w-full flex items-center justify-center bg-sky-400 px-4 py-2 rounded-full
                       text-md font-light tracking-wider text-white outline-none
                       hover:bg-sky-500 transition-colors cursor-pointer"
            >
              <SendPlaneLineIcon className="w-5 mr-2" />
              <span>Send</span>
            </button>

            {status && (
              <div
                className={`flex justify-between items-center mt-2 py-3 px-4 rounded-md border 
                          ${
                            status.toLowerCase().includes('error')
                              ? 'border-red-600 bg-red-100 text-red-600'
                              : 'border-emerald-600 bg-emerald-100 text-emerald-600'
                          }`}
              >
                <span>{status}</span>
                <button type="button" className="cursor-pointer" onClick={() => setStatus(null)}>
                  <CloseLineIcon />
                </button>
              </div>
            )}
          </motion.div>
        </FormProvider>
      </div>
    </div>
  );
};

export default Contact;
