const partnerLogos = [
  { name: "SNIM", image: "/logos/snim.jpg" },
  { name: "MINISTÈRE DES MINES ET DE L'INDUSTRIE", image: "/logos/idm-industries.jpg" },
  { name: "MINISTÈRE DE L'ENERGIE ET DU PÉTROLE", image: "/logos/MEP.jpg" },
  { name: "AMC TRAVAUX", image: "/logos/amc-travaux.avif" },
  { name: "BRITISH SAFETY SERVICES", image: "/logos/ministry-mines-industry.jpg" },
  { name: "IDM INDUSTRIES", image: "/logos/british-safety-services.jpg" },
  { name: "SMH", image: "/logos/Logo-SMH.png" }
];

export default function PartnersSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Partner Logos Section */}
        <div className="bg-industrial-navy rounded-xl p-8 text-white">
          <div className="text-center">
            <h3 className="heading-tertiary mb-8">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {partnerLogos.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 h-24 flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-lg border border-gray-200 overflow-hidden"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className={`max-w-full object-contain filter brightness-110 contrast-110 ${
                      partner.name === "MINISTÈRE DE L'ENERGIE ET DU PÉTROLE" 
                        ? "max-h-20 scale-110" 
                        : partner.name === "MINISTÈRE DES MINES ET DE L'INDUSTRIE"
                        ? "max-h-20 scale-110"
                        : "max-h-16"
                    }`}
                    title={partner.name}
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}