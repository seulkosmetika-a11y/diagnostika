import React, { useState } from "react";

const questions = [
  {
    id: 1,
    text: "Как чаще всего рождается твой результат?",
    options: [
      { text: "Получается когда складывается — от обстоятельств, настроения, удачи", level: 1 },
      { text: "Через напряжение и усилие — если работаю в полную — результат есть", level: 2 },
      { text: "Бывают сильные периоды, но что-то сбивает — и надо начинать заново", level: 3 },
      { text: "Начинаю понимать: дело не в действиях, а в чём-то глубже", level: 4 },
      { text: "Понимаю свои паттерны, могу прогнозировать и управлять", level: 5 },
      { text: "Результат приходит через интерес и вдохновение, почти без усилий", level: 6 },
      { text: "Я сам задаю условия — результат следует за моим состоянием", level: 7 },
    ],
  },
  {
    id: 2,
    text: "Что происходит с твоей энергией в работе?",
    options: [
      { text: "Трачу много, не понимаю куда уходит — часто чувствую пустоту", level: 1 },
      { text: "Работаю на износ. Если остановлюсь — боюсь, всё рухнет", level: 2 },
      { text: "Волнами: подъём — хорошо делаю, спад — ничего не выходит", level: 3 },
      { text: "Замечаю, что старый режим истощает. Ищу другой способ", level: 4 },
      { text: "Умею восстанавливаться и балансировать. Знаю свой ресурс", level: 5 },
      { text: "Энергия есть когда занимаюсь тем, что по-настоящему моё", level: 6 },
      { text: "Энергия стабильна — она идёт из состояния, а не из усилия", level: 7 },
    ],
  },
  {
    id: 3,
    text: "Как ты принимаешь решения в бизнесе?",
    options: [
      { text: "По обстоятельствам — реагирую на то, что происходит", level: 1 },
      { text: "Через контроль и анализ всех рисков — боюсь ошибиться", level: 2 },
      { text: "Иногда чётко, иногда долго сомневаюсь — нестабильно", level: 3 },
      { text: "Начинаю прислушиваться к себе, но ещё не доверяю полностью", level: 4 },
      { text: "На основе своих ценностей и чёткой стратегии", level: 5 },
      { text: "Интуитивно — и это чаще всего работает", level: 6 },
      { text: "Из внутренней ясности. Решения приходят быстро и оказываются точными", level: 7 },
    ],
  },
  {
    id: 4,
    text: "Что происходит когда ты хочешь масштабироваться?",
    options: [
      { text: "Не очень понимаю с чего начать — нет ясной картины", level: 1 },
      { text: "Берусь за всё сразу, перегружаюсь и откатываюсь назад", level: 2 },
      { text: "Делаю рывок — потом что-то останавливает. Снова и снова", level: 3 },
      { text: "Вижу: что-то внутри тормозит сильнее, чем внешние обстоятельства", level: 4 },
      { text: "Масштабируюсь системно — понимаю этапы и свои ограничения", level: 5 },
      { text: "Расту через то, что по-настоящему вдохновляет", level: 6 },
      { text: "Масштаб — следствие моего состояния. Меняюсь я — меняется бизнес", level: 7 },
    ],
  },
  {
    id: 5,
    text: "Как ты относишься к себе в работе?",
    options: [
      { text: "Делаю что надо — особо не задумываюсь", level: 1 },
      { text: "Требую от себя много. Часто критикую, сравниваю с другими", level: 2 },
      { text: "Иногда горжусь, иногда сильно сомневаюсь — зависит от результата", level: 3 },
      { text: "Начинаю замечать свои паттерны и быть к себе мягче", level: 4 },
      { text: "Принимаю себя, вижу рост, уважаю свой путь", level: 5 },
      { text: "Получаю удовольствие от процесса, не боюсь ошибаться", level: 6 },
      { text: "Я — мой главный ресурс. Отношусь к себе как к инструменту точной настройки", level: 7 },
    ],
  },
  {
    id: 6,
    text: "Что сейчас твоя главная мотивация?",
    options: [
      { text: "Справляться и не терять то, что есть", level: 1 },
      { text: "Доказать — себе или другим — что могу", level: 2 },
      { text: "Наконец сделать стабильным то, что уже умею", level: 3 },
      { text: "Найти свою настоящую точку опоры — не внешнюю", level: 4 },
      { text: "Создать устойчивую систему и реализоваться в полную силу", level: 5 },
      { text: "Играть, творить, кайфовать от того, что делаю", level: 6 },
      { text: "Проводить свои идеи в мир и влиять через своё состояние", level: 7 },
    ],
  },
  {
    id: 7,
    text: "Как ты реагируешь на трудности в бизнесе?",
    options: [
      { text: "Жду пока само разрешится или ищу кто подскажет", level: 1 },
      { text: "Мобилизуюсь, борюсь, преодолеваю — но это дорого обходится", level: 2 },
      { text: "То справляюсь легко, то выбивает надолго — непредсказуемо", level: 3 },
      { text: "Начинаю смотреть не на проблему, а на себя в этой ситуации", level: 4 },
      { text: "Анализирую, нахожу решение, двигаюсь дальше без лишних потерь", level: 5 },
      { text: "Воспринимаю как вызов — интересно, как это разрешится", level: 6 },
      { text: "Вижу урок и возможность. Трудности не выбивают из состояния", level: 7 },
    ],
  },
  {
    id: 8,
    text: "Что для тебя сейчас означает успех?",
    options: [
      { text: "Стабильность и отсутствие больших проблем", level: 1 },
      { text: "Достичь целей и получить признание", level: 2 },
      { text: "Чтобы хорошие периоды стали нормой, а не исключением", level: 3 },
      { text: "Найти себя настоящего и действовать из этого", level: 4 },
      { text: "Устойчивый рост дохода и внутреннее равновесие одновременно", level: 5 },
      { text: "Свобода делать то, что люблю — и зарабатывать на этом хорошо", level: 6 },
      { text: "Жить и работать из своего замысла. Влиять. Оставлять след", level: 7 },
    ],
  },
];

const results = {
  1: {
    level: "Реакция",
    emoji: "🌊",
    color: "#C8A882",
    headline: "Ты управляешь из потока событий, а не из себя",
    description: "Результат есть — но он во многом зависит от обстоятельств, настроения и удачи. Ты реагируешь на то, что происходит снаружи, вместо того чтобы задавать направление изнутри. Это не слабость — это отправная точка.",
    insight: "Пока внешнее управляет тобой — масштаб будет случайным. Первый сдвиг происходит когда начинаешь замечать: я реагирую. Это уже другой уровень осознанности.",
    cta: "Именно с этой точки начинается работа, которая меняет результат.",
  },
  2: {
    level: "Перегруз",
    emoji: "⚡",
    color: "#C8A882",
    headline: "Ты умеешь добиваться — но цена слишком высока",
    description: "Результат есть, и часто хороший. Но он держится только пока ты работаешь на полную. Усилие стало единственным известным способом двигаться вперёд — и это исчерпывает ресурс быстрее, чем растёт доход.",
    insight: "Масштаб через перегруз имеет потолок. Рост дохода без изменения внутреннего состояния — это больше работы, больше давления, больше выгорания.",
    cta: "Ты уже умеешь достигать. Теперь важно научиться делать это иначе.",
  },
  3: {
    level: "Нестабильность",
    emoji: "🌗",
    color: "#C8A882",
    headline: "Ты знаешь как может быть хорошо — но не можешь это удержать",
    description: "Это самый частый запрос с которым приходят ко мне. Бывают периоды когда всё складывается: результаты есть, энергия есть, ясность есть. А потом — откат. И непонятно почему. Масштаб не берётся именно отсюда.",
    insight: "Нестабильность — это не про дисциплину и не про стратегию. Это про то, что результат привязан к состоянию, которое ты ещё не умеешь удерживать.",
    cta: "Именно эту точку мы разбираем в работе — откуда откат и как это изменить.",
  },
  4: {
    level: "Сдвиг",
    emoji: "🔑",
    color: "#C8A882",
    headline: "Ты уже видишь: дело не в инструментах",
    description: "Ты перепробовал стратегии, методики, подходы. И начинаешь чувствовать: что-то внутри тормозит сильнее, чем любые внешние обстоятельства. Это важное осознание — но одного понимания мало. Многие всё понимают, но не могут сдвинуться.",
    insight: "Сдвиг — переломная точка. Те, кто проходят её осознанно, выходят на совершенно другой уровень результата.",
    cta: "Это именно та точка, с которой начинается наша работа.",
  },
  5: {
    level: "Структура",
    emoji: "🏛",
    color: "#C8A882",
    headline: "Ты умеешь управлять собой — и это уже меняет результат",
    description: "Понимаешь свои паттерны, знаешь свой ресурс, умеешь восстанавливаться. Результат стал более предсказуемым и управляемым. Ты выстроил внутреннюю опору — и это видно в бизнесе.",
    insight: "На этом уровне часто появляется запрос на другое качество роста: не просто больше, а глубже и с большим смыслом.",
    cta: "Если чувствуешь что хочется большего — не в объёме, а в качестве — это сигнал к следующему уровню.",
  },
  6: {
    level: "Поток",
    emoji: "✨",
    color: "#C8A882",
    headline: "Ты действуешь из вдохновения — и результат это отражает",
    description: "Доход растёт не через сверхусилие, а через качество присутствия. Ты делаешь то, что по-настоящему твоё — и это притягивает нужных людей и возможности.",
    insight: "На этом уровне важно научиться удерживать поток и не терять его при масштабировании.",
    cta: "Как масштабироваться, не теряя себя — это именно то, над чем мы работаем дальше.",
  },
  7: {
    level: "Авторство",
    emoji: "🌟",
    color: "#C8A882",
    headline: "Ты задаёшь правила — бизнес следует за твоим состоянием",
    description: "Ты не просто управляешь собой — ты создаёшь реальность из своего замысла. Бизнес, команда, клиенты — всё выстраивается вокруг твоего внутреннего состояния.",
    insight: "На этом уровне вопрос уже не «как достичь» — а «как влиять» и «что оставить».",
    cta: "Если ты здесь — мне интересно познакомиться и поговорить о том, что сейчас актуально для тебя.",
  },
};

const styles = {
  root: {
    minHeight: "100vh",
    background: "#0F0E0C",
    display: "flex",
    justifyContent: "center",
    padding: "0 0 60px",
    fontFamily: "Georgia, serif",
  },
  screen: {
    width: "100%",
    maxWidth: 480,
    padding: "48px 24px 32px",
  },
  tag: {
    fontSize: 11,
    letterSpacing: "0.15em",
    color: "#C8A882",
    textTransform: "uppercase",
    marginBottom: 24,
    fontFamily: "Arial, sans-serif",
    fontWeight: 400,
  },
  title: {
    fontSize: 42,
    fontWeight: 300,
    color: "#F0E8DC",
    lineHeight: 1.15,
    marginBottom: 20,
  },
  titleItalic: {
    fontStyle: "italic",
    color: "#C8A882",
  },
  subtitle: {
    fontSize: 15,
    color: "rgba(212,200,184,0.75)",
    lineHeight: 1.7,
    marginBottom: 28,
    fontFamily: "Arial, sans-serif",
    fontWeight: 300,
  },
  divider: {
    width: 40,
    height: 1,
    background: "rgba(200,168,130,0.4)",
    marginBottom: 20,
  },
  note: {
    fontSize: 13,
    color: "rgba(212,200,184,0.5)",
    lineHeight: 1.7,
    fontStyle: "italic",
    fontFamily: "Arial, sans-serif",
  },
  progressWrap: {
    width: "100%",
    height: 2,
    background: "rgba(255,255,255,0.08)",
    borderRadius: 2,
    marginBottom: 24,
    overflow: "hidden",
  },
  counter: {
    fontSize: 11,
    letterSpacing: "0.15em",
    color: "rgba(200,168,130,0.6)",
    marginBottom: 20,
    fontFamily: "Arial, sans-serif",
  },
  question: {
    fontSize: 24,
    fontWeight: 400,
    color: "#F0E8DC",
    lineHeight: 1.35,
    marginBottom: 20,
  },
  resultEmoji: { fontSize: 48, marginBottom: 20 },
  levelBadge: {
    display: "inline-block",
    border: "1px solid #C8A882",
    borderRadius: 100,
    padding: "6px 16px",
    fontSize: 12,
    letterSpacing: "0.12em",
    color: "#C8A882",
    marginBottom: 20,
    fontFamily: "Arial, sans-serif",
  },
  resultTitle: {
    fontSize: 26,
    fontWeight: 400,
    color: "#F0E8DC",
    lineHeight: 1.3,
    marginBottom: 20,
  },
  resultCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 14,
    color: "rgba(212,200,184,0.85)",
    lineHeight: 1.75,
    fontFamily: "Arial, sans-serif",
    fontWeight: 300,
  },
  insightBlock: {
    display: "flex",
    gap: 14,
    marginBottom: 20,
    alignItems: "flex-start",
  },
  insightLine: {
    width: 3,
    minWidth: 3,
    borderRadius: 3,
    background: "#C8A882",
    alignSelf: "stretch",
    minHeight: 40,
  },
  insightText: {
    fontSize: 14,
    color: "rgba(212,200,184,0.7)",
    lineHeight: 1.75,
    fontStyle: "italic",
    fontFamily: "Arial, sans-serif",
    fontWeight: 300,
  },
  ctaText: {
    fontSize: 17,
    color: "#C8A882",
    lineHeight: 1.5,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 4,
  },
};

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const handleAnswer = (level) => setSelected(level);

  const handleNext = () => {
    const newAnswers = [...answers, selected];
    setSelected(null);
    if (current < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrent(current + 1);
    } else {
      const counts = {};
      newAnswers.forEach((l) => { counts[l] = (counts[l] || 0) + 1; });
      const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(results[parseInt(dominant)]);
      setScreen("result");
    }
  };

  const restart = () => {
    setScreen("welcome");
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
  };

  const progress = (current / questions.length) * 100;

  const btnStyle = (isSelected) => ({
    width: "100%",
    background: isSelected ? "rgba(200,168,130,0.15)" : "rgba(255,255,255,0.04)",
    border: isSelected ? "1px solid #C8A882" : "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    padding: "14px 18px",
    color: isSelected ? "#F0E8DC" : "#D4C8B8",
    fontFamily: "Arial, sans-serif",
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.5,
    textAlign: "left",
    cursor: "pointer",
    marginBottom: 10,
    display: "block",
  });

  const nextBtnStyle = (disabled) => ({
    width: "100%",
    background: disabled ? "rgba(200,168,130,0.3)" : "linear-gradient(135deg, #C8A882, #A87C5A)",
    border: "none",
    borderRadius: 12,
    padding: 16,
    color: disabled ? "rgba(15,14,12,0.5)" : "#0F0E0C",
    fontFamily: "Arial, sans-serif",
    fontSize: 15,
    fontWeight: 500,
    letterSpacing: "0.05em",
    cursor: disabled ? "default" : "pointer",
    marginTop: 8,
  });

  return (
    <div style={styles.root}>
      <div style={styles.screen}>

        {screen === "welcome" && (
          <>
            <div style={styles.tag}>Диагностика · Екатерина Ни</div>
            <h1 style={styles.title}>
              Что внутри<br />
              <span style={styles.titleItalic}>тормозит рост</span>
            </h1>
            <p style={styles.subtitle}>
              8 вопросов — и вы увидите на каком уровне управления собой находитесь сейчас, и что именно мешает стабильному результату.
            </p>
            <div style={styles.divider} />
            <p style={styles.note}>
              Это не тест на знания и не диагноз.<br />
              Это навигация — где вы сейчас и куда двигаться дальше.
            </p>
            <button
              onClick={() => setScreen("quiz")}
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #C8A882, #A87C5A)",
                border: "none",
                borderRadius: 12,
                padding: 18,
                color: "#0F0E0C",
                fontFamily: "Arial, sans-serif",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.08em",
                cursor: "pointer",
                marginTop: 32,
              }}
            >
              ПРОЙТИ ДИАГНОСТИКУ
            </button>
          </>
        )}

        {screen === "quiz" && (
          <>
            <div style={styles.progressWrap}>
              <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg, #C8A882, #A87C5A)", borderRadius: 2, transition: "width 0.4s ease" }} />
            </div>
            <div style={styles.counter}>{current + 1} / {questions.length}</div>
            <h2 style={styles.question}>{questions[current].text}</h2>
            <div style={{ marginTop: 20 }}>
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  style={btnStyle(selected === opt.level)}
                  onClick={() => handleAnswer(opt.level)}
                >
                  {opt.text}
                </button>
              ))}
            </div>
            <button
              style={nextBtnStyle(selected === null)}
              disabled={selected === null}
              onClick={handleNext}
            >
              {current < questions.length - 1 ? "ДАЛЕЕ →" : "ПОЛУЧИТЬ РЕЗУЛЬТАТ"}
            </button>
          </>
        )}

        {screen === "result" && result && (
          <>
            <div style={styles.resultEmoji}>{result.emoji}</div>
            <div style={styles.levelBadge}>Уровень · {result.level}</div>
            <h2 style={styles.resultTitle}>{result.headline}</h2>
            <div style={styles.resultCard}>
              <p style={styles.resultText}>{result.description}</p>
            </div>
            <div style={styles.insightBlock}>
              <div style={styles.insightLine} />
              <p style={styles.insightText}>{result.insight}</p>
            </div>
            <p style={styles.ctaText}>{result.cta}</p>
            <button
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #C8A882, #A87C5A)",
                border: "none",
                borderRadius: 12,
                padding: 18,
                color: "#0F0E0C",
                fontFamily: "Arial, sans-serif",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.05em",
                cursor: "pointer",
                marginTop: 24,
              }}
              onClick={() => window.open("https://t.me/ni_ekaterina_psy", "_blank")}
            >
              ЗАПИСАТЬСЯ НА РАЗБОР
            </button>
            <button
              onClick={restart}
              style={{
                width: "100%",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12,
                padding: 14,
                color: "rgba(255,255,255,0.4)",
                fontFamily: "Arial, sans-serif",
                fontSize: 14,
                cursor: "pointer",
                marginTop: 12,
              }}
            >
              Пройти заново
            </button>
          </>
        )}

      </div>
    </div>
  );
}
