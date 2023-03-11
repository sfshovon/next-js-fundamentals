
const ArticleListByCategory = ({ articles, category }) => {
  return (
    <div className="container mx-auto px-4 pt-32 md:py-20 bg-gray-100 h-screen">
      <h2 className="text-dark text-3xl text-center font-extrabold">Showing News for Category {category}</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {
          articles.map(article => {
            return(
              <div key={article.id} className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">ID: <span className="font-normal text-lg">{article.id}</span></h2>
                  <h3 className="card-title inline">Title: <span className="font-normal text-lg">{article.title}</span></h3>
                  <p className="text-lg font-semibold"><span className="font-normal text-lg">{article.description}</span></p>
                  <p className="text-lg font-semibold">Category: <span className="font-normal text-lg">{article.category}</span></p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', ['name=SFS'])
  const { category } = params;
  const response = await fetch(`http://localhost:3000/api/news?category=${category}`);
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    }
  }
}