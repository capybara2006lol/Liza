import React from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { id: 1, name: "Александра П.", role: "CEO / Основатель", description: "Видение, стратегия, развитие продукта.", image: "https://picsum.photos/200/200?random=10" },
  { id: 2, name: "Михаил К.", role: "CTO", description: "Разработка платформы, техническая архитектура.", image: "https://picsum.photos/200/200?random=11" },
  { id: 3, name: "Дарья С.", role: "UX/UI-дизайнер", description: "Создание интерфейсов, дизайн приложения.", image: "https://picsum.photos/200/200?random=12" },
  { id: 4, name: "Илья Р.", role: "Product Manager", description: "Функциональность, фичи, тестирование.", image: "https://picsum.photos/200/200?random=13" },
  { id: 5, name: "Виктория Л.", role: "Маркетолог", description: "Продвижение, коммуникации, работа с аудиторией.", image: "https://picsum.photos/200/200?random=14" },
];

export const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-eco-dark mb-12 text-center">Команда проекта</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member) => (
            <div key={member.id} className="text-center group">
              <div className="relative mx-auto w-32 h-32 mb-4">
                 <div className="absolute inset-0 bg-eco-light rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                 <img 
                   src={member.image} 
                   alt={member.name} 
                   className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-md grayscale group-hover:grayscale-0 transition-all duration-300"
                 />
              </div>
              <h3 className="font-bold text-lg text-eco-dark">{member.name}</h3>
              <p className="text-eco-primary text-sm font-medium mb-2">{member.role}</p>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[150px] mx-auto">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};