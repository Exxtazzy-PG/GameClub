import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, Shield, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Веб-разработка',
      description: 'Создаем современные и функциональные веб-приложения с использованием новейших технологий',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Дизайн',
      description: 'Проектируем интуитивные интерфейсы, которые обеспечивают отличный пользовательский опыт',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Мобильные приложения',
      description: 'Разрабатываем нативные и кроссплатформенные мобильные приложения для iOS и Android',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Globe size={32} />,
      title: 'SEO Оптимизация',
      description: 'Повышаем видимость вашего сайта в поисковых системах и привлекаем целевую аудиторию',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Shield size={32} />,
      title: 'Безопасность',
      description: 'Обеспечиваем высокий уровень безопасности ваших данных и защиту от киберугроз',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Zap size={32} />,
      title: 'Производительность',
      description: 'Оптимизируем скорость загрузки и производительность для лучшего пользовательского опыта',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Предлагаем полный спектр цифровых услуг для развития вашего бизнеса
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6`}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} 
                   style={{ padding: '2px' }}>
                <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;