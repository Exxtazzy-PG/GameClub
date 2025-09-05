import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Clock, Gamepad2, Play } from 'lucide-react';


const Games = () => {
  const games = [
    {
      title: 'Counter-Strike 2',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      players: '2.5K',
      rating: 4.9,
      category: 'FPS',
      description: 'Легендарный шутер от первого лица с тактическим геймплеем',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Dota 2',
      image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      players: '1.8K',
      rating: 4.8,
      category: 'MOBA',
      description: 'Стратегическая игра с глубоким геймплеем и командной работой',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Valorant',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      players: '3.2K',
      rating: 4.7,
      category: 'FPS',
      description: 'Тактический шутер с уникальными способностями агентов',
      color: 'from-pink-500 to-purple-500'
    },
    {
      title: 'League of Legends',
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      players: '4.1K',
      rating: 4.6,
      category: 'MOBA',
      description: 'Самая популярная MOBA игра в мире с миллионами игроков',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Apex Legends',
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      players: '1.9K',
      rating: 4.5,
      category: 'Battle Royale',
      description: 'Динамичная королевская битва с уникальными легендами',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Rocket League',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      players: '1.3K',
      rating: 4.8,
      category: 'Sports',
      description: 'Футбол на машинах - уникальная спортивная аркада',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
      />
    ));
  };

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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
    <section id="games" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <Gamepad2 size={20} className="text-purple-600 dark:text-cyan-400" />
            <span className="text-purple-600 dark:text-cyan-400 font-medium">Популярные игры</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Наши игры
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Выберите свою любимую игру и присоединяйтесь к тысячам игроков в захватывающих турнирах
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {games.map((game, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
            >
              {/* Game Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${game.color} text-white text-sm font-medium rounded-full`}>
                  {game.category}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                  {renderStars(game.rating)}
                  <span className="text-white text-sm ml-1">{game.rating}</span>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-cyan-500 transition-all duration-300">
                  {game.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {game.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Users size={16} />
                    <span className="text-sm">{game.players} игроков</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                    <Clock size={16} />
                    <span className="text-sm">Онлайн</span>
                  </div>
                </div>

                {/* Play Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 bg-gradient-to-r ${game.color} text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <Play size={18} />
                  Играть сейчас
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${game.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Games;