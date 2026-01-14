export default function Benefits() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Our Mushrooms
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-4">
        {["Organic", "Fresh", "Healthy", "Affordable"].map((item, i) => (
          <div key={i} className="text-center p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
