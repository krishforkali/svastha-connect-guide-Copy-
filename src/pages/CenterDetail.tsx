import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Star } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import { useState } from "react";

const CenterDetail = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const { city, centerId } = useParams();

  // For now, we'll hardcode the Veda5 center details
  const centerDetails = {
    name: "Veda5 Ayurveda & Yoga Retreat",
    city: "Goa",
    region: "North Goa",
    description: "They specialise in authentic classical Ayurvedic therapies & Retreats including Panchakarma, yoga & naturopathy integration.",
    specialties: ["Panchakarma", "Yoga", "Naturopathy", "Rejuvenation"],
    rating: 4.8,
    reviews: [
      {
        text: "Quiet, clean and well kept resort. Staff was very genuine, helpful and accommodating. We enjoyed the delicious vegetarian food and the ayurvedic treatments. Both the doctor and the nutritionist were helpful and attentive to our needs.",
        source: "vedafive.com"
      },
      {
        text: "The rooms and vegetarian food was amazing! … good quality yoga classes and ayurvedic spa. Happy, relaxed stay.",
        source: "Booking.com"
      }
    ],
    highlights: [
      "Strong retreat-feel with full wellness integration",
      "Diet, yoga, and accommodation integration",
      "Credible reviews and international standards",
      "Good for international/long-stay segment",
      "Premium packages available"
    ],
    website: "vedafive.com",
    images: ["/images/Goa/Ved5/1-Veda5.jpg", "/images/Goa/Ved5/2-Veda5.jpg", "/images/Goa/Ved5/3-veda5.jpg"]
  };

  return (
    <div className="min-h-screen font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      
      {/* Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-primary">{centerDetails.name}</h1>
            <p className="text-lg flex items-center gap-2">
              <MapPin className="text-primary" />
              {centerDetails.city}, {centerDetails.region}
            </p>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{centerDetails.rating}</span>
            </div>
          </div>
          <div className="flex justify-end items-start">
            <Button 
              size="lg" 
              onClick={() => setQuoteModalOpen(true)}
              className="font-semibold"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-4">
          {centerDetails.images.map((image, index) => (
            <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <img 
                src={image} 
                alt={`${centerDetails.name} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-muted-foreground">{centerDetails.description}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {centerDetails.specialties.map((specialty, index) => (
                  <span 
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <div className="space-y-4">
                {centerDetails.reviews.map((review, index) => (
                  <div key={index} className="bg-card p-4 rounded-lg">
                    <p className="italic mb-2">{review.text}</p>
                    <p className="text-sm text-muted-foreground">Source: {review.source}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-card p-6 rounded-lg sticky top-4">
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className="space-y-3">
                {centerDetails.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button 
                  className="w-full font-semibold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
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

export default CenterDetail;