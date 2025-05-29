  import React, { useEffect, useState } from "react";
  import Tabs from "@mui/material/Tabs";
  import Tab from "@mui/material/Tab";
  import Box from "@mui/material/Box";
  import Item from "../../components/Item";
  import { Typography } from "@mui/material";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import { useDispatch, useSelector } from "react-redux";
  import { setItems } from "../../state";

  const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
    const breakPoint = useMediaQuery("(min-width:600px)");
    console.log("items",items)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    async function getItems() {
      
      try {
        const res = await fetch("http://localhost:1337/api/items?populate=*");
        const json = await res.json();
        console.log("Fetched items:", json.data);
        dispatch(setItems(json.data)); // Cập nhật Redux store
      } catch (err) {
        console.error("Failed to fetch items:", err);
      }
    }

    useEffect(() => {
      getItems();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    
    const topRatedItems = items.filter(
      (item) => item?.category === "topRated"
    );
    const newArrivalsItems = items.filter(
      (item) => item?.category === "newArrivals"
    );
    const bestSellersItems = items.filter(
      (item) => item?.category === "bestSellers"
    );

    return (
      <Box width="80%" margin="80px auto">
        <Typography variant="h3" textAlign="center">
          Our Featured <b>Products</b>
        </Typography>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
          sx={{
            m: "25px",
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}
        >
          <Tab label="ALL" value="all" />
          <Tab label="NEW ARRIVALS" value="newArrivals" />
          <Tab label="BEST SELLERS" value="bestSellers" />
          <Tab label="TOP RATED" value="topRated" />
        </Tabs>
        <Box
          margin="0 auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, 300px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%"
        >
          {value === "all" &&
            items.map((item) => (
              <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
          {value === "newArrivals" &&
            newArrivalsItems.map((item) => (
              <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
          {value === "bestSellers" &&
            bestSellersItems.map((item) => (
              <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
          {value === "topRated" &&
            topRatedItems.map((item) => (
              <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
        </Box>
      </Box>
    );
  };

  export default ShoppingList;
