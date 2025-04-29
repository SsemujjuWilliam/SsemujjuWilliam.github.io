
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Message sent successfully! I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <a href="mailto:SsemujjuWilliam@outlook.com" className="text-muted-foreground hover:text-primary transition-colors">
                    SsemujjuWilliam@outlook.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                    <path d="M9 15h6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">WhatsApp</h3>
                  <a href="https://wa.me/message/C6YVX7OIAJLVN1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Message me on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Location</h3>
                  <p className="text-muted-foreground">
                    Uganda 🇺🇬
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card p-6 rounded-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Your message details..."
                ></textarea>
              </div>
              <div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
