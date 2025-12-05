import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-secondary flex flex-col items-center justify-center w-full h-40 opacity-0 lg:opacity-100 ">
     <div className="w-full max-w-6xl mx-auto px-4 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center md:place-items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <button className="flex items-center gap-2">
                <Image
                    src="./wings.png"
                    alt="Wings"
                    width={20}
                    height={20}
                    className="h-5 w-8"
                />
                </button>
              <span className="text-lg font-bold">Humane Thrift</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Quality pre-loved fashion supporting local communities across Canada.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    About Us
                </Link>
              </li>
              <li>
                <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                    Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@thrifthub.ca
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Toronto, ON, Canada
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
}