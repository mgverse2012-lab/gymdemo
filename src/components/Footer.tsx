import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl">
                BODYSTATION<span className="text-primary">PK</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Pakistan's most advanced fitness center with AI-powered workout plans,
              expert trainers, and 24/7 smart assistant to guide your fitness journey.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/facilities" className="hover:text-primary transition-colors">Facilities</Link></li>
              <li><Link to="/plans" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/member" className="hover:text-primary transition-colors">Member Area</Link></li>
              <li><Link to="/admin" className="hover:text-primary transition-colors">Admin Demo</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Gulberg III, Lahore, Pakistan</li>
              <li>+92 300 1234567</li>
              <li>info@bodystationpk.com</li>
              <li className="pt-2">
                <span className="text-primary font-medium">Hours:</span><br />
                Mon-Sat: 6 AM - 11 PM<br />
                Sunday: 8 AM - 8 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 BodystationPK. All rights reserved. <span className="text-primary">(Demo Version)</span>
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
