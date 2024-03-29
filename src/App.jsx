import {
  Hero,
  Footer,
  CustomerReviews,
  Services,
  SpacialOffer,
  Subscribe,
  SuperQuality,
  PopularProducts,
} from './sections/index';

const App = () => {
  return (
    <main className="relative">
      {/* <Nav/> */}
     <section classeName="xl:padding-1 wide:padding-r padding-b"><Hero/></section>
      <section className="padding"><PopularProducts/></section>
      <section className="padding"><SuperQuality/></section>
      <section className="padding-x py-10"><Services/></section>
      <section className="padding"><SpacialOffer/></section>
      <section className="padding bg-pale-blue"><CustomerReviews/></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
      <section className="bg-black padding-x padding-t pb-8"><Footer/></section>
    </main>
  );
};
export default App;
