import Card from "../components/Card";
import { data } from "../data/data";
const Home = () => {
  return (
    <section>
      <h2 className="product-heading">All Products</h2>
      <div className="card-container">
        {data.map(({ img, title, id, price }) => (
          <Card
            img={img}
            key={id}
            price={price}
            title={title}
            id={id.toString()}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;
