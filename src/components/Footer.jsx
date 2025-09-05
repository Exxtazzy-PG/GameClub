import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Heart, Github, Twitter, Linkedin, Instagram, Youtube, Twitch } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Twitch size={20} />, href: '#', label: 'Twitch', color: 'hover:text-purple-500' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub', color: 'hover:text-gray-600' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
  ];

  const footerLinks = [
    {
      title: 'Игры',
      links: [
        { name: 'Counter-Strike 2', href: '#' },
        { name: 'Dota 2', href: '#' },
        { name: 'Valorant', href: '#' },
        { name: 'League of Legends', href: '#' },
      ]
    },
    {
      title: 'Турниры',
      links: [
        { name: 'Расписание', href: '#tournaments' },
        { name: 'Правила', href: '#' },
        { name: 'Призы', href: '#' },
        { name: 'Рейтинг', href: '#' },
      ]
    },
    {
      title: 'Сообщество',
      links: [
        { name: 'Discord', href: '#' },
        { name: 'Форум', href: '#' },
        { name: 'Стримы', href: '#' },
        { name: 'Блог', href: '#' },
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    if (sectionId.startsWith('#') && sectionId.length > 1) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Gamepad2 size={32} className="text-cyan-400" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full opacity-20 blur-sm"
                />
              </motion.div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                GameClub
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Крупнейшее игровое сообщество России. Участвуйте в турнирах, 
              находите команду и становитесь лучшими в своих любимых играх.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <h3 className="text-white font-semibold text-lg mb-6">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.button
                      whileHover={{ x: 5, color: '#06B6D4' }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-cyan-400 transition-all duration-200 text-left"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© 2024 GameClub. Создано с</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>для геймеров</span>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <motion.a
                whileHover={{ color: '#06B6D4' }}
                href="#"
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                Правила турниров
              </motion.a>
              <motion.a
                whileHover={{ color: '#06B6D4' }}
                href="#"
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                Политика конфиденциальности
              </motion.a>
              <motion.a
                whileHover={{ color: '#06B6D4' }}
                href="#"
                className="hover:text-cyan-400 transition-colors duration-200"
              >
                Условия использования
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;