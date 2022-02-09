import Footer from './Footer';
import Header from './Header';
import './Exposiciones.css';
import img from '../assets/img/bg.jpg';

const Exposiciones = () => {
  return (
    <main>
      <Header />
      <article className="bg">
        {/* <img className="bg-img" src={img} alt="" /> */}
        <div className="bg-title-container">
          <h1 className="bg-title">Exposiciones</h1>
        </div>
      </article>
      <section className="section">
        <div className="container">
          <article>
            <figure>
              <img src="https://placeimg.com/600/600/animals" alt="" />
            </figure>
            <h2>Titulo Muestra</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quos pariatur incidunt quisquam minima doloremque, tenetur alias
              enim deleniti consequuntur ipsum perferendis vitae voluptatem
              officia blanditiis, dolore animi rem optio?
            </p>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Exposiciones;
