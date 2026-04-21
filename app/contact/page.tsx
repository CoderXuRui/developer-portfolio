"use client";

import { Mail, MapPin, Contact, Link2 } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "邮箱",
    value: "13985108687@163.com",
    href: "mailto:13985108687@163.com",
    color: "bg-red-500/10 text-red-500",
  },
  {
    icon: Link2,
    label: "GitHub",
    value: "github.com/zhangxuri",
    href: "https://github.com",
    color: "bg-gray-500/10 text-gray-700",
  },
  {
    icon: Contact,
    label: "微信",
    value: "ZXR3737",
    href: null,
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: MapPin,
    label: "位置",
    value: "深圳",
    href: null,
    color: "bg-green-500/10 text-green-500",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background-alt to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
              联系<span className="text-gradient"> 我</span>
            </h1>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              有任何问题或合作意向，欢迎联系我
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-6 animate-fade-in-up">联系方式</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href || undefined}
                  target={method.href?.startsWith("http") ? "_blank" : undefined}
                  rel={method.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all hover:shadow-md ${
                    method.href ? "bg-white border border-border hover:border-primary cursor-pointer" : "bg-background-alt cursor-default"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center`}>
                    <method.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm text-foreground-muted">{method.label}</span>
                    <p className="font-medium">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-background-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-display font-semibold mb-6 animate-fade-in-up">关注我</h3>
          <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {[
              { icon: Link2, href: "https://github.com", label: "GitHub" },
              { icon: Contact, href: null, label: "微信" },
              { icon: Mail, href: "mailto:13985108687@163.com", label: "邮箱" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href || "#"}
                target={social.href?.startsWith("http") ? "_blank" : undefined}
                rel={social.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors ${!social.href ? "cursor-default" : ""}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}