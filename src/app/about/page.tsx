import SeoMeta from "@/partials/SeoMeta";
import Image from "next/image";

const About = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <SeoMeta
        title="About Us"
        meta_title="About Us"
        description="About Us"
        image="/about"
      />
      <section className="max-w-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center md:col-10 lg:col-7">
                <Image
                  className="mx-auto mb-6 rounded-lg"
                  src="/about"
                  width={200}
                  height={200}
                  alt="About Us Image"
                />
              <h2
                className="h3 mb-6"
              >
                Hey, I am John Doe!
              </h2>
              <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore tempora, odit ex iste tempore sed. Fugit voluptatibus perspiciatis assumenda nulla ad nihil, omnis vel, doloremque sit quam autem optio maiores, illum eius facilis et quo consectetur provident dolor similique! Enim voluptatem dicta expedita veritatis repellat dolorum impedit, provident quasi at.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;