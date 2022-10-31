import React from "react";
//components
import { Box, Grid, Typography } from "@mui/material";
import BestSeller from "./BestSeller";
import DetailImages from "./DetailImages";
import Informations from "./Informations";
import Options from "./Options";
import RelatedProduct from "./RelatedProduct";
import DetailsProductSkeleton from "../../components/skeleton/DetailsProductSkeleton";
//utility and hooks
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../../core/userContext";
import useFetchBy from "../../hooks/useFetchBy";
import useUpdate from "../../hooks/useUpdate";
import usePost from "../../hooks/usePost";
import Loading from "../../components/Loading";

function ProductDetailsScreens() {
  const [count, setCount] = React.useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get("product_id");

  const { items, isLoading } = useFetchBy({
    module: "products",
    filter: "id",
    params: params,
  });

  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //push cart
  const user = localStorage.getItem("sb-user-id");

  const { cartItems, setCartItems } = React.useContext(UserContext);

  const [productName, setProductName] = React.useState(null);

  const mutation = usePost({ module: "cart" });

  const update = useUpdate({ module: "cart", key: "name", value: productName });

  const _pushCart = async (item) => {
    if (user) {
      await setProductName(item.name);
      const user_id = localStorage.getItem("sb-user-id");
      const body = {
        name: item.name,
        image: item.images,
        category_id: item.category_id,
        quantity: 1,
        price: item.price,
        starting_price: item.starting_price,
        discount: item.discount,
        total: item.price,
        color: item.colors[0],
        size: item.sizes[0],
        description: item.description,
        user_id: user_id,
      };
      const find = await cartItems.find((v) => {
        return v.name === item.name;
      });
      if (find) {
        const initQty = find.quantity + 1;
        await update.mutateAsync({
          ...find,
          quantity: initQty,
          total: find.price * initQty,
        });
        navigate("/cart");
      } else {
        await mutation.mutateAsync(body);
        navigate("/cart");
      }
    } else {
      navigate("/auth/signin");
    }
  };

  const _onAdd = () => setCount(count + 1);
  const _onMin = () => setCount(count - 1);

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor="#F6F7F8"
        display="flex"
        justifyContent="center"
        p={1}
        mt={{ xs: 2.5, sm: 5 }}
        mb={8}
      >
        <Typography color="#33A0FF" fontWeight="400">
          Home/Detail/
        </Typography>
        {items?.map((item, idx) => {
          return (
            <Typography key={idx} fontWeight="400">
              {item.name}
            </Typography>
          );
        })}
      </Box>
      {isLoading && <DetailsProductSkeleton />}
      {items?.map((item, idx) => {
        return (
          <Box key={idx} maxWidth="xl" margin="auto" p={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <DetailImages src={item?.images} option={item?.colors} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Options
                  name={item?.name}
                  price={item?.price}
                  startingPrice={item?.starting_price}
                  discount={item?.discount}
                  rating={item?.rating}
                  addTocart={() => _pushCart(item)}
                  color={item?.colors}
                  sizes={item?.sizes}
                  count={count}
                  onAdd={_onAdd}
                  onMin={_onMin}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <BestSeller name={item?.name} rating={item?.rating} price={item?.price} src={item?.images} />
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <Informations />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <RelatedProduct />
              </Grid>
            </Grid>
          </Box>
        );
      })}
      <Loading visible={mutation.isLoading | update.isLoading} />
    </Box>
  );
}

export default ProductDetailsScreens;
