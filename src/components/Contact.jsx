import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Headphones } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Введите корректный email адрес'),
  subject: z.string().min(5, 'Тема должна содержать минимум 5 символов'),
  message: z.string().min(10, 'Сообщение должно содержать минимум 10 символов'),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log('Contact form data:', data);
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    reset();
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Звоните с 9:00 до 21:00',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'info@gameclub.ru',
      description: 'Ответим в течение 2 часов',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Адрес',
      value: 'Москва, ул. Геймерская, 42',
      description: 'Игровой центр GameClub',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Headphones size={24} />,
      title: 'Поддержка',
      value: '24/7 онлайн',
      description: 'Техническая поддержка',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-full mb-6"
          >
            <MessageCircle size={20} className="text-purple-600 dark:text-cyan-400" />
            <span className="text-purple-600 dark:text-cyan-400 font-medium">Связаться с нами</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Контакты
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Есть вопросы? Мы всегда готовы помочь и ответить на все ваши вопросы
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-100 dark:border-gray-600 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gaming Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 p-6 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-2xl text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} />
                <h3 className="text-xl font-bold">Часы работы</h3>
              </div>
              <div className="space-y-2 text-purple-100">
                <p>Пн-Пт: 10:00 - 23:00</p>
                <p>Сб-Вс: 12:00 - 01:00</p>
                <p className="text-cyan-200 font-medium">Турниры: 24/7</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Ваше имя *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.name
                          ? 'border-red-300 focus:ring-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:ring-purple-500'
                      }`}
                      placeholder="Введите ваше имя"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email адрес *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.email
                          ? 'border-red-300 focus:ring-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:ring-purple-500'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Тема сообщения *
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.subject
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-purple-500'
                    }`}
                    placeholder="Тема вашего сообщения"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={6}
                    className={`w-full px-4 py-3 bg-white dark:bg-gray-900 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      errors.message
                        ? 'border-red-300 focus:ring-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-purple-500'
                    }`}
                    placeholder="Расскажите нам о вашем вопросе..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} />
                      Отправить сообщение
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Наше местоположение
            </h3>
            <div className="bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl p-1">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center">
                <MapPin size={48} className="mx-auto mb-4 text-purple-600 dark:text-cyan-400" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  GameClub Gaming Center
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Москва, ул. Геймерская, 42<br />
                  Метро "Технопарк", 5 минут пешком
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Построить маршрут
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;