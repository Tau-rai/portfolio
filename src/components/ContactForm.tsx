import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const NEXT_PUBLIC_EMAILJS_SERVICE_ID="service_3avmtng";
const NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="template_bnvsrt9";
const NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="Us-cpzrQOgio4aqm6";

emailjs.init(NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

const ContactForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const form = e.currentTarget;
    
    try {
      await emailjs.sendForm(
        NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      
      toast({
        id: "message-sent",
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
        console.error('EmailJS Error:', error);
      toast({
        id: "error",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input name="user_name" placeholder="Your Name" required />
      <Input name="user_email" type="email" placeholder="Your Email" required />
      <Textarea name="message" placeholder="Your Message" className="min-h-[150px]" required />
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;