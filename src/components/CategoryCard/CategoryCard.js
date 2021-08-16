import "./CategoryCard.css";

export default function CategoryCard() {
  return (
    <div style={{overflowX:'hidden',marginRight:'0.5rem'}}>
    <div className="card-wrap container">
    <div class="row row-cols-2">
      <div className="category-card col">
        <img
          src="/images/categories/b.jpg"
          class="card-image"
          alt="some-category"
        />
        <h3 class="card-title">Business</h3>
      </div>
      <div className="category-card col">
        <img
          src="/images/categories/e.jfif"
          class="card-image"
          alt="some-category"
        />
        <h3 class="card-title">Entertainment</h3>
      </div>
      <div className="category-card col">
        <img
          src="/images/categories/p.jfif"
          class="card-image"
          alt="some-category"
        />
        <h3 class="card-title">Politics</h3>
      </div>
      <div className="category-card col">
        <img
          src="/images/categories/spo.jfif"
          class="card-image"
          alt="some-category"
        />
        <h3 class="card-title">Sports</h3>
      </div>
      <div className="category-card">
        <img
          src="/images/categories/tech.jfif"
          class="card-image"
          alt="some-category"
        />
        <h3 class="card-title">Technology</h3>
      </div>
      <div className="category-card col">
        <img
          src="/images/categories/fa.jfif"
          class="card-image"
          alt="some-category"
        />
        <h3 class="card-title">Fashion</h3>
      </div>
      </div>
    </div>
    </div>
  );
}
