const skills = [
  { name: 'Microsoft Office', icon: '💼', desc: 'Word, Excel, PowerPoint' },
  { name: 'Canva', icon: '🎨', desc: 'Дизайн и визуальный контент' },
  { name: 'Искусственный интеллект', icon: '🤖', desc: 'Работа с ИИ-инструментами' },
  { name: 'Фотография', icon: '📷', desc: 'Портретная и репортажная съёмка' },
  { name: 'СММ', icon: '📱', desc: 'Ведение и продвижение соцсетей' },
];

export default function AboutSection() {
  return (
    <section className="bg-black py-24 px-8 md:px-16">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-white/50 text-sm uppercase tracking-widest">О себе</p>
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Привет, я Махмадраджаб
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Мне 23 года, я из Таджикистана. Занимаюсь фотографией и помогаю людям и брендам выглядеть круто в интернете. Снимаю, создаю контент и веду социальные сети.
            </p>
            <div className="w-12 h-px bg-white/30" />
            <div className="space-y-3">
              <p className="text-white/50 text-sm uppercase tracking-widest">Контакты</p>
              <a href="tel:+79997670704" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <span>📞</span>
                <span>+7 999 767-07-04</span>
              </a>
              <a href="https://t.me/itsrahimov" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <span>✈️</span>
                <span>@itsrahimov</span>
              </a>
              <a href="https://instagram.com/mahmadrajab.r" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                <span>📸</span>
                <span>@mahmadrajab.r</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-white/50 text-sm uppercase tracking-widest mb-6">Навыки</p>
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-4 p-4 border border-white/10 hover:border-white/30 transition-colors duration-300 group"
              >
                <span className="text-2xl">{skill.icon}</span>
                <div>
                  <p className="text-white font-light">{skill.name}</p>
                  <p className="text-white/50 text-sm">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}