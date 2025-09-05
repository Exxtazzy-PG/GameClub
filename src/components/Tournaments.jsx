import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Trophy, Calendar, Users, Gift, Clock } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Tournaments = () => {
  const tournaments = [
    {
      title: 'CS2 Winter Championship',
      game: 'Counter-Strike 2',
      date: '15 февраля 2024',
      time: '18:00 MSK',
      prize: '500,000 ₽',
      participants: '128 команд',
      status: 'Регистрация открыта',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      color: 'from-orange-500 to-red-500',
      statusColor: 'bg-green-500'
    },
    {
      title: 'Dota 2 Pro League',
      game: 'Dota 2',
      date: '22 февраля 2024',
      time: '20:00 MSK',
      prize: '750,000 ₽',
      participants: '64 команды',
      status: 'Скоро',
      image: 'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      color: 'from-blue-500 to-purple-500',
      statusColor: 'bg-yellow-500'
    },
    {
      title: 'Valorant Masters',
      game: 'Valorant',
      date: '1 марта 2024',
      time: '19:00 MSK',
      prize: '300,000 ₽',
      participants: '96 команд',
      status: 'Регистрация открыта',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      color: 'from-pink-500 to-purple-500',
      statusColor: 'bg-green-500'
    },
    {
      title: 'LoL Spring Cup',
      game: 'League of Legends',
      date: '8 марта 2024',
      time: '17:00 MSK',
      prize: '400,000 ₽',
      participants: '80 команд',
      status: 'Регистрация закрыта',
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      color: 'from-cyan-500 to-blue-500',
      statusColor: 'bg-red-500'
    }
  ];

  return (
    <section id="tournaments" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
        />
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
            <Trophy size={20} className="text-purple-600 dark:text-cyan-400" />
            <span className="text-purple-600 dark:text-cyan-400 font-medium">Турниры</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
            Предстоящие турниры
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Участвуйте в захватывающих турнирах и выигрывайте крупные призы
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="tournaments-swiper pb-12"
          >
            {tournaments.map((tournament, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full"
                >
                  {/* Tournament Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      src={tournament.image}
                      alt={tournament.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 ${tournament.statusColor} text-white text-sm font-medium rounded-full flex items-center gap-1`}>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      {tournament.status}
                    </div>

                    {/* Prize */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-full">
                      <Gift size={16} className="text-yellow-400" />
                      <span className="text-white font-semibold">{tournament.prize}</span>
                    </div>
                  </div>

                  {/* Tournament Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {tournament.title}
                    </h3>
                    
                    <p className="text-purple-600 dark:text-cyan-400 font-medium mb-4">
                      {tournament.game}
                    </p>

                    {/* Tournament Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{tournament.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                        <Clock size={16} />
                        <span className="text-sm">{tournament.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                        <Users size={16} />
                        <span className="text-sm">{tournament.participants}</span>
                      </div>
                    </div>

                    {/* Register Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={tournament.status === 'Регистрация закрыта'}
                      className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                        tournament.status === 'Регистрация закрыта'
                          ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                          : `bg-gradient-to-r ${tournament.color} text-white shadow-lg hover:shadow-xl`
                      }`}
                    >
                      <Trophy size={18} />
                      {tournament.status === 'Регистрация закрыта' ? 'Регистрация закрыта' : 'Зарегистрироваться'}
                    </motion.button>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tournament.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Tournament Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50+', label: 'Турниров в месяц' },
            { value: '2M₽', label: 'Общий призовой фонд' },
            { value: '5K+', label: 'Участников' },
            { value: '24/7', label: 'Поддержка' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tournaments;