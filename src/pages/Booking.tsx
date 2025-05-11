import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Booking: React.FC = () => {
  const { translate } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    address: '',
    isHomeService: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const {
      name,
      phone,
      email,
      service,
      date,
      time,
      isHomeService,
      address
    } = formData;

    const message = `
📋 *Booking Details*
-----------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email || 'N/A'}
💅 *Service:* ${service}
📅 *Date:* ${date}
⏰ *Time:* ${time}
🏠 *Home Service:* ${isHomeService ? 'Yes' : 'No'}
📍 *Address:* ${isHomeService ? address : 'N/A'}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '918978703629'; // Replace with your actual WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">{translate('booking')}</h1>

        <div className="max-w-2xl mx-auto bg-pink-50 rounded-lg p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translate('name')}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  value={formData.name}
                  onChange={handleChange}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translate('email')}
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {translate('selectService')}
              </label>
              <select
                name="service"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">{translate('chooseService')}</option>
                <option value="facial">{translate('facial')}</option>
                <option value="haircut">{translate('hairCut')}</option>
                <option value="makeup">{translate('makeup')}</option>
                <option value="mehendi">{translate('mehendi')}</option>
                <option value="manicure">{translate('manicure')}</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translate('date')}
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translate('time')}
                </label>
                <input
                  type="time"
                  name="time"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="isHomeService"
                id="isHomeService"
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                checked={formData.isHomeService}
                onChange={handleChange}
              />
              <label htmlFor="isHomeService" className="ml-2 block text-sm text-gray-700">
                {translate('homeService')}
              </label>
            </div>

            {formData.isHomeService && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {translate('address')}
                </label>
                <textarea
                  name="address"
                  rows={3}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 px-6 rounded-md hover:bg-pink-600 transition duration-300"
            >
              {translate('confirmBooking')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
