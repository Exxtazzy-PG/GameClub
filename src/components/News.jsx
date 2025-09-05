import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Zap } from 'lucide-react';

const News = () => {
  const news = [
    {
      title: 'Новый сезон CS2 Championship начинается в феврале',
      excerpt: 'Готовьтесь к самому масштабному турниру года с призовым фондом 1 миллион рублей',
      author: 'GameClub Admin',
      date: '25 января 2024',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Турниры',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Обновление системы рейтинга игроков',
      excerpt: 'Представляем новую систему рейтинга, которая более точно отражает навыки игроков',
      author: 'Tech Team',
      date: '23 января 2024',
      image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Обновления',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Новые игры добавлены в турнирную сетку',
      excerpt: 'Apex Legends и Rocket League теперь доступны для соревновательной игры',
      author: 'GameClub Team',
      date: '20 января 2024',
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Игры',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Партнерство с ведущими киберспортивными командами',
      excerpt: 'Заключили соглашения с топовыми командами для проведения мастер-классов',
      author: 'Partnership Team',
      date: '18 января 2024',
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Партнерство',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Открытие нового игрового зала в Москве',
      excerpt: 'Современное оборудование и комфортные условия для тренировок команд',
      author: 'GameClub Admin',
      date: '15 января 2024',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Новости',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Мобильное приложение GameClub уже доступно',
      excerpt: 'Следите за турнирами, общайтесь с командой и регистрируйтесь на события',
      author: 'Mobile Team',
      date: '12 января 2024',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      category: 'Приложение',
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="news" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
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
            <Zap size={20} className="text-purple-600 dark:text-cyan-400" />
            <span className="text-purple-600 dark:text-cyan-400 font-medium">Последние новости</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Новости клуба
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Будьте в курсе всех событий и обновлений GameClub
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {news.map((article, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 cursor-pointer"
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${article.color} text-white text-sm font-medium rounded-full`}>
                  {article.category}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-cyan-500 transition-all duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-purple-600 dark:text-cyan-400 font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Читать далее
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${article.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Загрузить еще новости
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default News;