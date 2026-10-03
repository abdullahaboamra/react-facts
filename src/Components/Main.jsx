import dotIcon from "../assets/Ellipse 1.svg"; // استيراد صورة النقطة الزرقاء

export default function Main() {
  const facts = [
    "Was first released in 2013",
    "Was originally created by Jordan Walke",
    "Has well over 200K stars on GitHub",
    "Is maintained by Meta",
    "Powers thousands of enterprise apps, including mobile apps",
  ];

  return (
    <main className="main">
      <h1 className="main-title">Fun facts about React</h1>
      <ul className="main-facts">
        {facts.map((fact, index) => (
          <li key={index}>
            <img src={dotIcon} alt="bullet" className="fact-dot" />
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}