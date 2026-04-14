/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Instagram, 
  Facebook, 
  Clock, 
  Sparkles, 
  Image as ImageIcon, 
  Download, 
  BookOpen, 
  Star, 
  Check,
  Quote
} from "lucide-react";

const Nav = () => (
  <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-outline-variant/10 flex justify-between items-center px-6 md:px-16 py-5">
    <div className="font-label text-xs tracking-[0.4em] text-on-surface uppercase font-medium">
      Smarita Vinnakota
    </div>
    <div className="hidden md:flex items-center space-x-10">
      {["Home", "Portfolio", "Experience", "Investment", "Contact"].map((item) => (
        <a 
          key={item}
          href={`#${item.toLowerCase()}`} 
          className="font-label tracking-[0.2em] uppercase text-[10px] text-on-surface/70 hover:text-primary transition-colors duration-300"
        >
          {item}
        </a>
      ))}
    </div>
    <a 
      href="#contact"
      className="font-label tracking-[0.2em] uppercase text-[10px] bg-on-surface text-white px-8 py-3 transition-all hover:bg-primary active:scale-95"
    >
      Inquire
    </a>
  </nav>
);

const Hero = () => (
  <header id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-5 z-10 space-y-10 order-2 lg:order-1"
      >
        <div className="space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-label text-[10px] tracking-[0.4em] uppercase text-primary font-semibold block"
          >
            Fine Art Newborn Photography
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-headline text-on-surface leading-[0.9] tracking-tight">
            Timeless <br/>
            <span className="italic font-light">Portraits</span>
          </h1>
        </div>
        <p className="text-lg text-on-surface-variant font-light max-w-md leading-relaxed">
          Capturing the delicate whispers of new life in Hyderabad. A sanctuary where heirloom art meets the quiet elegance of your baby’s first days.
        </p>
        <div className="flex items-center gap-8 pt-4">
          <button className="bg-primary text-white px-10 py-5 font-label tracking-[0.2em] uppercase text-[10px] transition-all hover:bg-primary-dim editorial-shadow">
            Book Your Session
          </button>
          <a href="#portfolio" className="font-label tracking-[0.2em] uppercase text-[10px] text-on-surface border-b border-outline-variant pb-1 hover:border-primary transition-all">
            View Gallery
          </a>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="lg:col-span-7 order-1 lg:order-2 relative"
      >
        <div className="relative w-full aspect-[4/5] lg:aspect-[1.2/1] overflow-hidden">
          <img 
            alt="Newborn baby sleeping" 
            className="w-full h-full object-cover oval-mask" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmhUGLz6hG19rfkiKPD8UOXfpZtGZbSY8ROiyppBgzQ02HfqF5b_9-_HcWw59uUmmZMkxWuuR-41NBxV26dGDi6s5vAGJJXNjvBR7CWODO-KH5SR3nVqSBfEKTJ8vqm3fE-2SgdPG3JuLtmzU_jE4rGRO-FrTXN_sU5hdD9fHuPxyU9riAP-hGUJf4yoJv45ZfNo9zAyhPFZrkH922duoR8AE7-NW_hb9FlHHr6ghzseMagjh8pMuF9Vp84Z6s805GwQKo3twnIlI"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply oval-mask"></div>
        </div>
        <div className="absolute -bottom-6 -left-6 hidden lg:block">
          <div className="bg-surface-container-lowest p-8 editorial-shadow space-y-2 max-w-[200px]">
            <div className="font-headline italic text-2xl text-primary">"Pure Magic"</div>
            <p className="text-[10px] font-label tracking-wider uppercase text-on-surface-variant">The most beautiful archive of our daughter.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </header>
);

const About = () => (
  <section className="py-32 bg-surface-container-low overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative"
        >
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <img 
            alt="Smarita Vinnakota" 
            className="w-full h-[600px] object-cover rounded-xl shadow-lg relative z-10" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDErlgp-Ht_7uCS2YCRROmRU3Basa8HWuK6Z3NfDVC9x3ZvdC6CZHsQqaR_HCqzh7lm_qlUE4hZ7AzRBzXnfz6T24krSQOGqChgS54d_1ijw47gkfKqRebLDjjtDx9HHenO0gR-c3lUt9bnr-Q2C71fmbqmiD-A_SEjjHUma9eyTprmgWCGUQCiP-Uxae5EeXeaE67PcEPHUdEM4lSvyjXEMuna9HR8eu7JUBsYL4XG_w5CnFeWUgy4AbcsnO013SdvMVEkeNkRIp0"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-8"
        >
          <span className="font-label text-sm tracking-[0.3em] uppercase text-primary font-semibold">The Story</span>
          <h2 className="text-4xl md:text-5xl font-headline text-on-surface leading-snug">Capturing the <br/>Fleeting Whispers</h2>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed">
            In the blink of an eye, the tiny fingers and soft curls of your newborn transform. My work is dedicated to pausing time, creating an ethereal archive of these first precious moments. 
          </p>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed">
            With over a decade of experience and specialized training in newborn safety, I provide a sanctuary for your family where comfort meets art. Every session is a quiet choreography of light, texture, and love.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="font-headline italic text-on-surface">Smarita Vinnakota</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section className="py-32 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20 space-y-4">
        <span className="font-label text-sm tracking-[0.3em] uppercase text-on-surface-variant">Portfolio</span>
        <h2 className="text-4xl font-headline">Signature Work</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
        <div className="md:col-span-4 aspect-[3/4] rounded-xl overflow-hidden group">
          <img 
            alt="Baby 1" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6uMY32ZKLQaBzENyGssA_adUH1VjrW6-t-Pw75yZSNzOh77LmleKEVo9KYZc7hXTyd2zy92BtXPuHkMngonNv6XNlBLQoha17JKrxSPi8W13jNmPDrtc5gohqfZFH_aGAxaB_nWzaOXy5gQGKigCl0Spd0yPBkivrAnMVgc7FVogqr1FaISxq0eoPAJdrC4heWBAu3-K-8PldfUB42XsVyQkOK3_Gt_H9RUMsJ_jFvU0F8gfEPBaqfC6aFqaYz0VtmouMyrQXaAc"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:col-span-8 aspect-video rounded-xl overflow-hidden group md:translate-y-12">
          <img 
            alt="Baby 2" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh7kN9t7y3_1n4EjgPUkVu5LnCPtFKYuGs8qSFlvBbCDOWjEJvr6bjJyPv-KoTLbrCsDOIW8MXPYlS-HCvzNr9eUki3tQx-JbSBJ4hD4YF1DLgimhQfw31J4jy9QuvCOIaKqVONN-G6keo7lYrgv-IpYBU-ShUcf7XehhnpqUIIFI_l1EA09xtFuXSGjkVBSv93Jbnqmf2DdqGfnFIz5TkMT1aPuVz32nSlAXWdTFUket3ZfrgaJEFzjII97gRR59Ovwfof5NT2fQ"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:col-span-7 aspect-[4/3] rounded-xl overflow-hidden group md:-translate-y-4">
          <img 
            alt="Baby 3" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB021i0NVw2lWp0El3QGrO0m2yRr1hjo7sZFTlFgjFcpnSxTtK_u0sstH2gfuH4nRB0NwMDSsZHEQB9Wz0toMR_vuferAGs3HkFUcPJC9ObWDn8LUSc-NRM6SHshbq578ZkFg-nz1P_mgEuACPys_4wBgHQPj8-ZG8-tICGo2v6NsgK2sC2V8LgUICoPHPShoZ038U2ICu6If8hPYCpIv2qfgkXCtUEEWAczhcfWHdwRlwHw9Ms1EPpO1F1yqwxbR3gV0dSYdMpfQ"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="md:col-span-5 aspect-square rounded-xl overflow-hidden group">
          <img 
            alt="Baby 4" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4FSZEXCjg83OS4Pr9QUyykk84m-YhJPUgtSSKKwobqm8R4dNDbXcdZQfTlGsUpKHcCYrs6Cd2ypfAT8HwmykhndgqFQ569ZCNp89gI6GFqM9FxH4RgCnPReXQnZuYlxSjwUZZE8AJMOdU-z4ozC4UWhGvjdQGVHKJpTsURpeXgmcWga-CIfC4EMgO2bVObETMoE9aiYPeldY7PtfJLzFBK7ywCdRVunTe8YfS7NgzSjKFVybiWVA-PDJmcWZaTPWAHP5CLx-DxL4"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="mt-24 text-center">
        <a href="#" className="inline-block font-label text-sm tracking-[0.2em] uppercase text-on-surface border-b border-outline-variant pb-2 hover:text-primary hover:border-primary transition-all">
          View Full Portfolio
        </a>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section className="py-32 bg-surface-container">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-headline mb-6">The Studio Experience</h2>
        <p className="text-on-surface-variant font-light">From our first consultation to the moment you hold your fine art prints, we ensure a seamless, luxurious journey designed for new parents.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {[
          {
            num: "01",
            title: "Consultation",
            desc: "We discuss your vision, preferred tones, and heirloom options over a quiet conversation to tailor the session to your family."
          },
          {
            num: "02",
            title: "The Session",
            desc: "A slow-paced, warm morning in the studio where your baby is the focus. We handle everything from wrapping to posing with utmost care."
          },
          {
            num: "03",
            title: "The Reveal",
            desc: "Review your hand-edited gallery and choose from museum-quality canvases, heirloom albums, and fine art prints."
          }
        ].map((step, i) => (
          <motion.div 
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={`space-y-6 px-4 ${i === 1 ? 'border-y md:border-y-0 md:border-x border-outline-variant/30 py-12 md:py-0' : ''}`}
          >
            <div className="text-primary text-4xl font-headline">{step.num}</div>
            <h3 className="text-xl font-headline">{step.title}</h3>
            <p className="text-on-surface-variant text-sm font-light leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-32 bg-background relative">
    <div className="container mx-auto px-6 text-center">
      <Quote className="text-primary/30 w-16 h-16 mx-auto mb-8" />
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl font-headline text-on-surface italic leading-relaxed mb-10">
          "Smarita has a magical way with babies. The studio felt so peaceful, and the portraits she captured are the most beautiful things I’ve ever seen. They are true works of art that we will cherish forever."
        </p>
        <div className="font-label tracking-widest uppercase text-sm text-primary font-semibold">— The Mehta Family</div>
      </div>
    </div>
  </section>
);

const Investment = () => (
  <section id="investment" className="py-32 bg-surface-container-low">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-headline mb-4">Investment</h2>
        <p className="text-on-surface-variant font-light">Bespoke packages tailored to preserve your legacy.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Classic",
            desc: "Essential newborn portraits highlighting simplicity and pureness.",
            features: ["2 Hour Studio Session", "10 Fine Art Digital Images", "Private Online Gallery"],
            cta: "Select Classic",
            featured: false
          },
          {
            title: "Signature",
            desc: "The complete fine art experience with family and sibling portraits included.",
            features: ["4 Hour Studio Session", "25 Fine Art Digital Images", "Parent & Sibling Poses", "8x8 Heirloom Portrait Box"],
            cta: "Select Signature",
            featured: true
          },
          {
            title: "Luxe",
            desc: "Our ultimate offering for those who desire a complete wall art collection.",
            features: ["Full Day Experience", "All Gallery Images", "Large Italian Leather Album", "Custom Wall Art Trio"],
            cta: "Select Luxe",
            featured: false
          }
        ].map((pkg) => (
          <div 
            key={pkg.title}
            className={`bg-surface-container-lowest p-12 rounded-xl editorial-shadow flex flex-col space-y-8 relative ${pkg.featured ? 'border border-primary/20 -translate-y-4 lg:-translate-y-8' : ''}`}
          >
            {pkg.featured && (
              <div className="absolute top-0 right-12 bg-primary text-white px-4 py-1 text-[10px] tracking-[0.2em] uppercase rounded-b-lg">
                Most Loved
              </div>
            )}
            <div className="space-y-2">
              <h3 className="text-2xl font-headline">{pkg.title}</h3>
              <div className="h-1 w-12 bg-primary/20"></div>
            </div>
            <p className="text-on-surface-variant text-sm font-light">{pkg.desc}</p>
            <ul className="space-y-4 text-sm font-light text-on-surface">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="text-primary w-4 h-4" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <button className={`w-full py-4 uppercase tracking-widest text-xs font-semibold transition-colors ${pkg.featured ? 'bg-primary text-white hover:bg-primary-dim' : 'border border-outline-variant hover:bg-on-surface hover:text-white'}`}>
                {pkg.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dueDate: "",
    source: "Instagram",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", dueDate: "", source: "Instagram", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-surface-container-low">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="font-label text-[10px] tracking-[0.4em] uppercase text-primary font-semibold">Get in Touch</span>
              <h2 className="text-5xl font-headline leading-tight">Begin Your <br/><span className="italic">Heirloom Journey</span></h2>
              <p className="text-on-surface-variant font-light max-w-md leading-relaxed">
                I would love to hear from you. Please share a few details about your upcoming arrival, and I will be in touch within 24 hours to discuss your vision.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Response Time</div>
                  <div className="font-headline text-lg">Within 24 Hours</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Availability</div>
                  <div className="font-headline text-lg">Booking through Oct 2024</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-surface-container-lowest p-10 md:p-16 editorial-shadow space-y-8">
            {status === "success" ? (
              <div className="text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Check className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-headline">Thank You</h3>
                <p className="text-on-surface-variant font-light">Your inquiry has been sent. We will be in touch shortly.</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-primary font-label text-[10px] tracking-widest uppercase pt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none transition-colors font-light" 
                      placeholder="E.g. Sarah Mitchell" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none transition-colors font-light" 
                      placeholder="sarah@example.com" 
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none transition-colors font-light" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Due Date / Baby's Age</label>
                    <input 
                      required
                      type="text" 
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                      className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none transition-colors font-light" 
                      placeholder="E.g. Sept 15, 2024" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">How did you find us?</label>
                  <select 
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none transition-colors font-light appearance-none"
                  >
                    <option>Instagram</option>
                    <option>Facebook</option>
                    <option>Word of Mouth</option>
                    <option>Google Search</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Your Message</label>
                  <textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-outline-variant py-2 focus:border-primary outline-none transition-colors font-light min-h-[100px]" 
                    placeholder="Tell us about your vision..."
                  ></textarea>
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-[10px] font-label tracking-wider uppercase">Something went wrong. Please try again.</p>
                )}
                <button 
                  disabled={status === "submitting"}
                  type="submit"
                  className="w-full bg-on-surface text-white py-5 font-label tracking-[0.2em] uppercase text-[10px] transition-all hover:bg-primary disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Send Inquiry"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-40 bg-background relative overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-10">
      <img 
        alt="Background texture" 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf2Vyq4HvEcvabXSrbhOLyW1Fc7RHtm_MiuWOYSyaq12xS-ks0YqKHKTPwnAf7TUw3kdJqR-ggcO6uxg1Yig5YQHO3TlJRqQpHWlnGjOb82Hz1FrdaXY4fBvIIWlVV4tyFitfQzBxTRj2RdC1knA-xY1XnqO_aX4i0edMH_gsSQ0QB3KgUIGuMxeGGqm-pnDW7r7EYRoX5gyMmJ5nJPaHHLeoHPkn2ZC2kp55T-Soe2xZvkTQioXRWuRjA0KEImZML3LNKtXeHkh0"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-headline text-on-surface mb-10 max-w-4xl mx-auto leading-tight">
        Let’s create something <span className="italic font-normal">timeless</span>
      </h2>
      <p className="text-xl text-on-surface-variant font-light mb-12 max-w-xl mx-auto">
        Now booking for sessions 2–6 months in advance. Contact us today to secure your due date.
      </p>
      <button className="bg-primary text-white px-12 py-5 font-headline tracking-widest uppercase text-sm transition-all hover:bg-primary-dim editorial-shadow">
        Inquire Now
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full py-20 px-12 bg-surface-container flex flex-col items-center text-center space-y-8">
    <div className="font-headline text-lg tracking-widest text-on-surface mb-4">SMARITA VINNAKOTA</div>
    <div className="flex flex-wrap justify-center gap-8 font-headline text-xs tracking-wider">
      {["Instagram", "Facebook", "Privacy Policy", "Terms"].map((link) => (
        <a key={link} href="#" className="text-on-surface-variant hover:text-primary transition-all">
          {link}
        </a>
      ))}
    </div>
    <div className="max-w-md text-on-surface-variant font-headline text-xs tracking-wider leading-relaxed">
      Studio Location: Banjara Hills, Hyderabad, India<br/>
      Available for worldwide commissions.
    </div>
    <p className="text-on-surface-variant font-headline text-xs tracking-wider leading-relaxed opacity-60">
      © 2024 Smarita Vinnakota Fine Art Photography. All Rights Reserved.
    </p>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Testimonial />
      <Investment />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}
