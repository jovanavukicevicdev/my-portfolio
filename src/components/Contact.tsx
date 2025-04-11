'use client';
import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import Heading from '@/components/shared/Heading';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Create the form data object
    const formData = {
      name,
      email,
      subject,
      message,
    };

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
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');

        // Clear the success message after 10 seconds
        setTimeout(() => {
          setStatus(null);
        }, 10000);
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again later.');
      console.error(error);
    }
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
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="w-[600px] max-lg:w-[400px] max-sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex max-lg:flex-col gap-x-3 max-lg:gap-y-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-emerald-500 rounded-md bg-gray-100 px-4
                         py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Name"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-emerald-500 rounded-md bg-gray-100 px-4
                         py-2 text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="w-full border border-emerald-500 rounded-md bg-gray-100 px-4
                       py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="max-h-[250px] min-h-[150px] border border-emerald-500 rounded-md bg-gray-100
                       px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Feel free to write me a novel (or just a few lines)."
          ></textarea>
          <input
            type="submit"
            className="w-full bg-emerald-500 px-4 py-2 rounded-full
                       text-sm font-light tracking-wider text-white outline-none
                       hover:bg-emerald-600 transition-colors cursor-pointer"
            value="Send Message"
          />

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
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
