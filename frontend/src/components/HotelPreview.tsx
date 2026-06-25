function HotelsPreview() {
  return (
    <section className="py-20">

      <div className="container mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Hotels & Lodges
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow rounded-xl p-6">
            Serengeti Lodge
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            Zanzibar Resort
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            Kilimanjaro Hotel
          </div>

        </div>

      </div>

    </section>
  );
}

export default HotelsPreview;