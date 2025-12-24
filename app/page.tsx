import Header from "./common/Header";
import Category from "./pages/category/Category";
import Hero from "./pages/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen">
        <div className="mx-auto">
          <Hero />
          <Category />
        </div>
      </main>
    </>
  );
}
