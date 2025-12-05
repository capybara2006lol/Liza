import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
             <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://picsum.photos/400/500?random=2" 
                  alt="Recycling process" 
                  className="rounded-3xl w-full h-64 object-cover object-center shadow-card transform translate-y-8"
                />
                <img 
                  src="https://picsum.photos/400/500?random=3" 
                  alt="Eco Map usage" 
                  className="rounded-3xl w-full h-64 object-cover object-center shadow-card"
                />
             </div>
             {/* Decorative Circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-eco-light rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-eco-primary font-bold tracking-wider uppercase text-sm">О проекте</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-eco-dark">
              Миссия EcoLink
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              EcoLink — цифровая экоплатформа, которая объединяет людей, школы и компании для развития экологичных привычек. Мы упрощаем сортировку отходов, создаём сеть пунктов сдачи и мотивируем пользователей EcoPoints.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Наша цель — сделать экологичное поведение доступным каждому, превращая заботу о планете в увлекательный и выгодный процесс.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-8">
              <div>
                 <h4 className="text-4xl font-bold text-eco-primary mb-1">50+</h4>
                 <p className="text-sm text-gray-500">Пунктов сдачи</p>
              </div>
              <div>
                 <h4 className="text-4xl font-bold text-eco-primary mb-1">10k+</h4>
                 <p className="text-sm text-gray-500">Пользователей</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};