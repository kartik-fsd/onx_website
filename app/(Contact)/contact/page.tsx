import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Form from "@/components/form/page";

const ContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Get In Touch</h1>
      <p className="text-center text-gray-600 mb-8">
        Feel free to contact us? submit your queries here and we will get back
        to you as soon as possible.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-indigo-600 rounded-lg p-6 text-white">
          <MapPin className="w-8 h-8 mb-2" />
          <h3 className="font-semibold text-lg mb-1">Address</h3>
          <p>
            Awign Pvt. Ltd. 3rd & 4th Floor, HustleHub H1904, 1502, 19th Main
            Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <Phone className="w-8 h-8 mb-2 text-indigo-600" />
          <h3 className="font-semibold text-lg mb-1 text-indigo-600">
            Contact
          </h3>
          <p className="text-gray-800">8618624340</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <Mail className="w-8 h-8 mb-2 text-indigo-600" />
          <h3 className="font-semibold text-lg mb-1 text-indigo-600">Email</h3>
          <p className="text-gray-800">busniess@awign.com</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.36838811006!2d77.6449818!3d12.9178684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149d15fd071b%3A0x8a5e95f5c93eed0e!2sAwign%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1727767928149!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
