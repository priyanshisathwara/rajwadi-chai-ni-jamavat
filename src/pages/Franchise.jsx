import "./Franchise.css";
import franchiseImg from "../assets/image4.jpeg";
import franchiseImg1 from "../assets/image1.jpeg";
import { Helmet } from "react-helmet-async";

const steps = [
  {
    step: "01",
    title: "પ્રાથમિક સંપર્ક",
    desc: "WhatsApp દ્વારા અમારો સંપર્ક કરી રાજવાડી ચા ની જમાવટ ફ્રેન્ચાઇઝ માટે રસ દર્શાવો."
  },
  {
    step: "02",
    title: "ચર્ચા અને માર્ગદર્શન",
    desc: "અમારી ટીમ તમને રોકાણ, સ્થાન અને વ્યવસાયની સંપૂર્ણ માહિતી આપશે."
  },
  {
    step: "03",
    title: "સ્થાન મંજૂરી",
    desc: "તમારા આઉટલેટ માટે યોગ્ય સ્થળ પસંદ કરી અમારી ટીમ દ્વારા મંજૂરી લેવામાં આવશે."
  },
  {
    step: "04",
    title: "એગ્રીમેન્ટ અને ટ્રેનિંગ",
    desc: "ફ્રેન્ચાઇઝ એગ્રીમેન્ટ બાદ સંપૂર્ણ ટ્રેનિંગ અને સેટઅપ સહાય આપવામાં આવશે."
  },
  {
    step: "05",
    title: "ગ્રાન્ડ ઓપનિંગ",
    desc: "બ્રાન્ડિંગ, માર્કેટિંગ અને ઓપરેશનલ સપોર્ટ સાથે તમારા સ્ટોરની શરૂઆત કરો."
  }
];

const Franchise = () => {
  return (
    <section className="franchise-page">
      <Helmet>
        <title>
          Tea Franchise in Gujarat | Rajwadi Cha Ni Jamavat Franchise Opportunity
        </title>

        <meta
          name="description"
          content="Start your own tea business with Rajwadi Cha Ni Jamavat. One of the best tea franchise opportunities in Gujarat with complete training, branding, and support."
        />

        <link
          rel="canonical"
          href="https://rajwadichanijamavat.com/franchise"
        />
      </Helmet>


      {/* Hero Section */}
      <div className="franchise-hero">
        <div className="franchise-hero-text">
          <h1>
            રાજવાડી ચા ની જમાવટ - ગુજરાતમાં શ્રેષ્ઠ ચા ફ્રેન્ચાઇઝ
          </h1>

          <h2>
            તમારો પોતાનો સફળ વ્યવસાય શરૂ કરો
          </h2>

          <p>
            પરંપરા, ગુણવત્તા અને એકસરખા સ્વાદ સાથે
            ગ્રાહકોનો વિશ્વાસ જીતતું બ્રાન્ડ.
          </p>
        </div>

        <div className="franchise-hero-img">
          <img src={franchiseImg}
            alt="Rajwadi Cha Ni Jamavat Tea Franchise in Gujarat"
          />
        </div>
      </div>

      {/* What You Get */}
      <div className="franchise-benefits">
        <h3>તમને શું મળશે</h3>

        <div className="benefit-grid">
          <div className="benefit-card">🏷️ સંપૂર્ણ બ્રાન્ડ સપોર્ટ</div>
          <div className="benefit-card">☕ અસલી રાજવાડી ચાની રેસીપી</div>
          <div className="benefit-card">📦 કાચો માલ સપ્લાય</div>
          <div className="benefit-card">🎓 સ્ટાફ માટે ટ્રેનિંગ</div>
          <div className="benefit-card">📣 માર્કેટિંગ સહાય</div>
          <div className="benefit-card">📈 પરીક્ષિત વ્યવસાય મોડેલ</div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="franchise-steps">
        <h3>ફ્રેન્ચાઇઝ કેવી રીતે મેળવો</h3>

        <div className="steps-grid">
          {steps.map((item) => (
            <div className="step-card" key={item.step}>
              <span className="step-number">{item.step}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 franchise-img1">
        <img src={franchiseImg1}
          alt="Rajwadi Cha Franchise Business Opportunity Gujarat"
        />
      </div>
    </section>
  );
};

export default Franchise;
