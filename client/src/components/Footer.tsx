import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertMessageSchema, type InsertMessage } from '@shared/schema';
import { useCreateMessage } from '../hooks/use-messages';
import { SectionTitle } from './SectionTitle';
import { Github, Twitter, Linkedin, Mail, Loader2, Send } from 'lucide-react';

export function Footer() {
  const { mutate: createMessage, isPending } = useCreateMessage();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = (data: InsertMessage) => {
    createMessage(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 border-t border-slate-800/50 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Contact Info */}
          <div data-aos="fade-right">
            <SectionTitle title="Let's Connect" subtitle="Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!" />
            
            <div className="mt-12 flex flex-col gap-6">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors text-lg group w-fit">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                  <Mail size={20} />
                </div>
                hello@alexsterling.dev
              </a>
              
              <div className="flex gap-4 mt-6">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    onClick={(e) => e.preventDefault()}
                    className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" className="bg-slate-800/30 p-8 md:p-10 rounded-3xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                <input
                  id="name"
                  {...form.register('name')}
                  className="w-full bg-background border border-slate-700 text-foreground px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && (
                  <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <input
                  id="email"
                  type="email"
                  {...form.register('email')}
                  className="w-full bg-background border border-slate-700 text-foreground px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="john@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  id="message"
                  {...form.register('message')}
                  rows={5}
                  className="w-full bg-background border border-slate-700 text-foreground px-4 py-3 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="What's on your mind?"
                />
                {form.formState.errors.message && (
                  <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 rounded-xl font-bold bg-gradient-primary text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isPending ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
          
        </div>

        <div className="text-center pt-8 border-t border-slate-800 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Alex Sterling. Built with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
