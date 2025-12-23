
import Header from "./common/Header";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen">
        <div className="mx-auto">
          <Hero />
        </div>
      </main>
    </>
  );
}
