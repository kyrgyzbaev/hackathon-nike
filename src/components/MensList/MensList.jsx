import { Box, Button, Container, Pagination } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { mensContext } from "../../contexts/mensContext";
import Filters from "../Filters/Filters";
import ProductCard from "../MensCard/MensCard";

const ProductsList = () => {
  const { getProducts, products, pages } = useContext(mensContext);
  const { isAdmin } = useContext(authContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [price, setPrice] = useState([1, 10000]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 12,
    });
  }, [search, price, page]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  // console.log(pages);
  //   console.log(price);

  //   console.log(searchParams.get("q"));
  //   console.log(window.location.search);
  return (
    <Container>
      {isAdmin ? (
        <button
          className="add-mens-button"
          variant="outlined"
          style={{ margin: "30px" }}
          onClick={() => navigate("/add-mens")}>
          Add mens
        </button>
      ) : null}

      <Filters
        search={search}
        setSearch={setSearch}
        price={price}
        setPrice={setPrice}
      />
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        paddingTop={"30px"}>
        {products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          page={page}
          count={isNaN(pages) ? 0 : pages}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Container>
  );
};

export default ProductsList;
