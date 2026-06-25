function FeaturedDestinations() {
  return (
    <section className="py-20">

      <div className="container mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow p-6">
            Serengeti National Park
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            Ngorongoro Crater
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            Mount Kilimanjaro
          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedDestinations;