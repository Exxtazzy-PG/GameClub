import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { UserPlus, Mail, User, Gamepad2, Trophy, Shield, Users, Zap } from 'lucide-react';

const registrationSchema = z.object({
  username: z.string().min(3, 'Никнейм должен содержать минимум 3 символа'),
  email: z.string().email('Введите корректный email адрес'),
  fullName: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  game: z.string().min(1, 'Выберите игру'),
  experience: z.string().min(1, 'Выберите уровень опыта'),
  team: z.string().optional(),
});

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data) => {
    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log('Registration data:', data);
    alert('Регистрация успешна! Добро пожаловать в GameClub!');
    reset();
  };

  const games = [
    'Counter-Strike 2',
    'Dota 2',
    'Valorant',
    'League of Legends',
    'Apex Legends',
    'Rocket League'
  ];

  const experienceLevels = [
    'Новичок',
    'Любитель',
    'Опытный',
    'Профессионал',
    'Киберспортсмен'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
          >
            <UserPlus size={20} className="text-cyan-400" />
            <span className="text-cyan-400 font-medium">Присоединяйтесь</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Регистрация в 
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> GameClub</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Станьте частью нашего игрового сообщества и участвуйте в захватывающих турнирах
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Игровой никнейм *
                </label>
                <div className="relative">
                  <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    {...register('username')}
                    type="text"
                    className={`w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 text-white placeholder-gray-400 ${
                      errors.username
                        ? 'border-red-400 focus:ring-red-500'
                        : 'border-white/20 focus:ring-cyan-500'
                    }`}
                    placeholder="Ваш игровой никнейм"
                  />
                </div>
                {errors.username && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Полное имя *
                </label>
                <input
                  {...register('fullName')}
                  type="text"
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 text-white placeholder-gray-400 ${
                    errors.fullName
                      ? 'border-red-400 focus:ring-red-500'
                      : 'border-white/20 focus:ring-cyan-500'
                  }`}
                  placeholder="Ваше полное имя"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Email адрес *
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  {...register('email')}
                  type="email"
                  className={`w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 text-white placeholder-gray-400 ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-500'
                      : 'border-white/20 focus:ring-cyan-500'
                  }`}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Game Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Основная игра *
                </label>
                <div className="relative">
                  <Gamepad2 size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    {...register('game')}
                    className={`w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 text-white ${
                      errors.game
                        ? 'border-red-400 focus:ring-red-500'
                        : 'border-white/20 focus:ring-cyan-500'
                    }`}
                  >
                    <option value="" className="bg-gray-800">Выберите игру</option>
                    {games.map((game) => (
                      <option key={game} value={game} className="bg-gray-800">
                        {game}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.game && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.game.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Уровень опыта *
                </label>
                <div className="relative">
                  <Trophy size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <select
                    {...register('experience')}
                    className={`w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 text-white ${
                      errors.experience
                        ? 'border-red-400 focus:ring-red-500'
                        : 'border-white/20 focus:ring-cyan-500'
                    }`}
                  >
                    <option value="" className="bg-gray-800">Выберите уровень</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level} className="bg-gray-800">
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.experience && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.experience.message}
                  </p>
                )}
              </div>
            </div>

            {/* Team (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">
                Команда (необязательно)
              </label>
              <div className="relative">
                <Shield size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  {...register('team')}
                  type="text"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Название вашей команды"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <UserPlus size={20} />
                  Присоединиться к GameClub
                </>
              )}
            </motion.button>
          </form>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
          >
            {[
              { icon: <Trophy size={20} />, text: 'Участие в турнирах' },
              { icon: <Users size={20} />, text: 'Поиск команды' },
              { icon: <Zap size={20} />, text: 'Эксклюзивные события' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 text-cyan-400 text-sm"
              >
                {benefit.icon}
                <span>{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;