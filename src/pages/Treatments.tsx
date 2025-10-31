import { useState } from "react";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Users } from "lucide-react";
import treatmentImage from "@/assets/treatment-panchakarma.jpg";

const Treatments = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Detox & Rejuvenation",
    "Massage & Therapy",
    "Stress & Mental Wellness",
    "Chronic Disease Support",
    "Women's Health",
    "Skin & Hair",
  ];

  const treatments = [
    {
      name: "Panchakarma (Detox & Rejuvenation)",
      category: "Detox & Rejuvenation",
      duration: "14-21 days",
      suitableFor: "Anyone seeking deep cleansing and rejuvenation",
      description: "A comprehensive detoxification process that eliminates toxins from the body through five purification methods. Includes preparatory procedures, main treatments, and post-therapy care.",
      benefits: ["Complete body detoxification", "Improved immunity", "Enhanced vitality", "Mental clarity"],
    },
    {
      name: "Abhyanga (Therapeutic Massage)",
      category: "Massage & Therapy",
      duration: "45-60 minutes",
      suitableFor: "Stress relief, muscle tension, circulation improvement",
      description: "Traditional full-body oil massage using warm herbal oils. Stimulates lymphatic drainage and promotes deep relaxation.",
      benefits: ["Reduces stress", "Improves circulation", "Nourishes skin", "Relieves muscle tension"],
    },
    {
      name: "Shirodhara (Head Therapy)",
      category: "Stress & Mental Wellness",
      duration: "45-60 minutes",
      suitableFor: "Anxiety, insomnia, headaches, mental stress",
      description: "Continuous stream of warm herbal oil poured onto the forehead, deeply calming the nervous system and promoting mental clarity.",
      benefits: ["Calms the mind", "Improves sleep", "Reduces anxiety", "Enhances mental clarity"],
    },
    {
      name: "Kati Basti (Lower Back Therapy)",
      category: "Chronic Disease Support",
      duration: "30-45 minutes",
      suitableFor: "Lower back pain, sciatica, spinal disorders",
      description: "Warm medicated oil is retained over the lower back area using a dough dam, providing deep relief for back conditions.",
      benefits: ["Relieves back pain", "Improves spinal health", "Reduces inflammation", "Increases mobility"],
    },
    {
      name: "Nasya (Nasal Therapies)",
      category: "Massage & Therapy",
      duration: "20-30 minutes",
      suitableFor: "Sinusitis, headaches, respiratory issues",
      description: "Administration of medicated oils through the nasal passages to cleanse and rejuvenate the head and neck region.",
      benefits: ["Clears sinuses", "Relieves headaches", "Improves breathing", "Enhances clarity"],
    },
    {
      name: "Ayurvedic Weight Management",
      category: "Detox & Rejuvenation",
      duration: "2-4 weeks",
      suitableFor: "Healthy weight loss, metabolism improvement",
      description: "Personalized program combining dietary guidelines, herbal supplements, and therapeutic treatments for sustainable weight management.",
      benefits: ["Natural weight loss", "Improved metabolism", "Better digestion", "Increased energy"],
    },
    {
      name: "Stress & Mental Wellness Program",
      category: "Stress & Mental Wellness",
      duration: "7-14 days",
      suitableFor: "Chronic stress, anxiety, burnout, depression",
      description: "Holistic program combining Ayurvedic therapies, yoga, meditation, and lifestyle counseling for mental and emotional balance.",
      benefits: ["Reduces stress", "Emotional balance", "Mental clarity", "Better sleep"],
    },
    {
      name: "Joint & Arthritis Care",
      category: "Chronic Disease Support",
      duration: "14-21 days",
      suitableFor: "Arthritis, joint pain, mobility issues",
      description: "Specialized treatments including herbal oils, fomentation, and internal medicines to reduce joint inflammation and pain.",
      benefits: ["Pain relief", "Improved mobility", "Reduced inflammation", "Better joint health"],
    },
    {
      name: "Skin & Hair Treatments",
      category: "Skin & Hair",
      duration: "Variable",
      suitableFor: "Skin disorders, hair loss, premature aging",
      description: "Natural therapies using herbal preparations for various skin and hair conditions, promoting healthy glow and hair growth.",
      benefits: ["Healthy skin", "Hair growth", "Natural glow", "Anti-aging"],
    },
    {
      name: "Women's Health & Fertility Support",
      category: "Women's Health",
      duration: "1-3 months",
      suitableFor: "Menstrual disorders, fertility issues, menopause",
      description: "Specialized Ayurvedic care for women's reproductive health, hormonal balance, and overall wellness.",
      benefits: ["Hormonal balance", "Improved fertility", "Menstrual health", "Vitality"],
    },
    {
      name: "Chronic Disease Support",
      category: "Chronic Disease Support",
      duration: "3-6 months",
      suitableFor: "Diabetes, hypertension, digestive disorders",
      description: "Long-term management programs combining treatments, diet, lifestyle modifications, and herbal medicines for chronic conditions.",
      benefits: ["Better management", "Reduced medication dependency", "Improved quality of life", "Symptom relief"],
    },
  ];

  const filteredTreatments = selectedCategory === "All" 
    ? treatments 
    : treatments.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      
      {/* Header with Image */}
      <section className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${treatmentImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ayurvedic Treatments</h1>
            <p className="text-lg text-white/90">
              Explore traditional healing therapies for mind, body, and spirit
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredTreatments.map((treatment, index) => (
            <div key={index} className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all p-6">
              <h3 className="text-2xl font-bold text-primary mb-4">{treatment.name}</h3>
              
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{treatment.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>Suitable for: {treatment.suitableFor}</span>
                </div>
              </div>
              
              <p className="text-foreground mb-4">{treatment.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Key Benefits:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {treatment.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-1">
                      <span className="text-primary">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                onClick={() => setQuoteModalOpen(true)}
                className="w-full font-semibold"
              >
                Request Information
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our experts will help you choose the perfect treatment based on your health goals and condition
          </p>
          <Button 
            onClick={() => setQuoteModalOpen(true)}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8"
          >
            Get Free Consultation
          </Button>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
      
      {/* Floating Quote Button */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40 flex items-center gap-2 font-semibold"
      >
        <Phone size={20} />
        <span className="hidden md:inline">Get Free Quote</span>
      </button>
    </div>
  );
};

export default Treatments;
