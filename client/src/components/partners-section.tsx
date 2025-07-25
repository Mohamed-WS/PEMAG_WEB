const partnerLogos = [
  { name: "SNIM", image: "/PEMAG_WEB/logos/SNIM.jpg" },
  { name: "IDM", image: "/PEMAG_WEB/logos/IDM.jpg" },
  { name: "MEP", image: "/PEMAG_WEB/logos/MEP.jpg" },
  { name: "MEM", image: "/PEMAG_WEB/logos/MEM.jpg" },
  { name: "BSS", image: "/PEMAG_WEB/logos/BSS.jpg" },
  { name: "AMC TRAVAUX", image: "/PEMAG_WEB/logos/AMC traveaux.avif" },
  { name: "SMH", image: "/PEMAG_WEB/logos/SMH.jpg" }
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
              {/* First 4 logos */}
              {partnerLogos.slice(0, 4).map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 h-24 flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-lg border border-gray-200 overflow-hidden"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-w-full max-h-16 object-contain filter brightness-110 contrast-110"
                    title={partner.name}
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
              ))}
            </div>
            
            {/* Last 3 logos - centered */}
            <div className="grid grid-cols-3 gap-6 items-center mt-6 max-w-2xl mx-auto">
              {partnerLogos.slice(4).map((partner, index) => (
                <div
                  key={index + 4}
                  className="bg-white rounded-xl p-6 h-24 flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-lg border border-gray-200 overflow-hidden"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-w-full max-h-16 object-contain filter brightness-110 contrast-110"
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