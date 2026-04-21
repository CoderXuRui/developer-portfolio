import Link from "next/link";
import { Mail, Heart, Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">张栩睿</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              后端开发工程师，专注于 Java 技术栈，
              热爱技术，热爱生活。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-gray-400">
              快速链接
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-gray-300 hover:text-primary transition-colors text-sm">
                关于我
              </Link>
              <Link href="/projects" className="text-gray-300 hover:text-primary transition-colors text-sm">
                项目经历
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors text-sm">
                技术博客
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors text-sm">
                联系方式
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-gray-400">
              联系方式
            </h4>
            <div className="flex gap-4">
              <a
                href="mailto:zhangxuri@example.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="GitHub"
              >
                <Link2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} 张栩睿. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
}