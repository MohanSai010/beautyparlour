import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { translate } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const whatsappMessage = `
✉️ *New Inquiry*
--------------------------
👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
💬 *Message:* ${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '918978703629'; // Replace with your actual WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">{translate('contactUs')}</h1>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-pink-50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-pink-600 mt-1" />
                <div>
                  <p className="font-medium">Address:</p>
                  <p className="text-gray-600">3rd road, Dwaraka Nagar</p>
                  <p className="text-gray-600">Eluru</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-pink-600" />
                <div>
                  <p className="font-medium">Phone:</p>
                  <p className="text-gray-600">8978703629</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-pink-600" />
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-gray-600">info@snehabeauty.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-pink-600 mt-1" />
                <div>
                  <p className="font-medium">Working Hours:</p>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-pink-100 rounded-lg">
              <h3 className="font-semibold mb-2">About Our Beautician</h3>
              <p className="text-gray-700">
                D.S.N. Malleswari is a government certified beautician with 20 years of experience in the beauty industry.
                She specializes in bridal makeup, facials, and hair treatments.
              </p>
            </div>

            <div className="mt-6 p-4 bg-pink-100 rounded-lg">
              <h3 className="font-semibold mb-2">Home Service Available</h3>
              <p className="text-gray-700">
                We offer home beauty services for your convenience. Book an appointment and our expert beautician will visit your location.
              </p>
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translate('name')}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translate('email')}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translate('phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translate('message')}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition duration-300"
              >
                {translate('sendMessage')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
