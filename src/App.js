import './App.css';

const categories = [
  {
    title: 'Finance Calculators',
    description: 'EMI, loan payoff, GST, tax, savings, and investment tools for daily planning.',
    calculators: ['EMI Calculator', 'GST Calculator', 'SIP Calculator'],
  },
  {
    title: 'Health Calculators',
    description: 'Track BMI, calorie needs, body fat %, and basic health ranges in seconds.',
    calculators: ['BMI Calculator', 'Calorie Calculator', 'BMR Calculator'],
  },
  {
    title: 'Math & Education',
    description: 'Percentages, fractions, exponents, and quick algebra helpers for students.',
    calculators: ['Percentage Calculator', 'Fraction Calculator', 'Scientific Calculator'],
  },
  {
    title: 'Unit Converters',
    description: 'Convert length, weight, temperature, area, speed, and many other units.',
    calculators: ['Length Converter', 'Weight Converter', 'Temperature Converter'],
  },
];

const readinessChecklist = [
  'Production SEO metadata and social preview tags are configured.',
  'robots.txt and sitemap.xml are present and ready for search indexing.',
  'A clear category-first homepage is in place for scaling to 100+ calculators.',
  'Deployment instructions are documented for Vercel, Netlify, and static hosting.',
];

function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <p className="badge">gigacalculate.com · Launch MVP</p>
        <h1>Fast, trustworthy calculators for everyday decisions.</h1>
        <p className="subtitle">
          A production-ready starter homepage designed to compete with major calculator platforms.
          Add calculators incrementally while keeping strong SEO and a clean user experience.
        </p>
        <div className="hero-cta-row">
          <a className="cta-primary" href="#categories">Explore Categories</a>
          <a className="cta-secondary" href="#readiness">Deployment Readiness</a>
        </div>
      </header>

      <main>
        <section id="categories" className="section">
          <div className="section-head">
            <h2>Core categories to ship first</h2>
            <p>Start with high-intent calculators and publish new tools every week.</p>
          </div>
          <div className="grid">
            {categories.map((category) => (
              <article className="card" key={category.title}>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <ul>
                  {category.calculators.map((calculator) => (
                    <li key={calculator}>{calculator}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="readiness" className="section">
          <div className="section-head">
            <h2>Ready-to-deploy baseline improvements</h2>
            <p>
              This codebase now includes launch essentials so you can deploy quickly and focus on
              building calculator pages.
            </p>
          </div>
          <ul className="checklist">
            {readinessChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
