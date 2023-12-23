import { Box, Container, Dialog, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import Rating from '@mui/material/Rating';
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../redux/product";




const Main = () => {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

 

  const handlenewValue = (event, newValue) => {   
    setMydata(newValue)
  };

  const allCategory = 'products?populate=*'
  const menCategory = 'products?populate=*&filters[productCategory][$eq]=men'
  const womenCategory = 'products?populate=*&filters[productCategory][$eq]=women'

  const [mydata, setMydata] = useState(allCategory);

  const { data, error, isLoading } = useGetproductByNameQuery(mydata)

  if (data) {
    console.log(data.data)
  }


  if(isLoading){
    <Typography variant="h6">LOODING.....</Typography>    
  }


  if(error){
    <Typography variant="h6">{error.message}</Typography>    
  }


  if (data) {
    return (
      <Container>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginTop={"30px"}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>

          <Box>
            <ToggleButtonGroup
              color="error"
              value={mydata}
              exclusive
              onChange={handlenewValue} 
              aria-label="text alignment"
            >
              <ToggleButton
                className="myButton"
                value={allCategory}>
                All Products
              </ToggleButton>
              <ToggleButton
                className="myButton"
                value={menCategory}>
                MEN category
              </ToggleButton>
              <ToggleButton
                className="myButton"
                value={womenCategory}>
                Women category
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>


        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >

          {data.data.map((item) => {
            return (
              <Card key={item}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root ": {
                    rotate: "1deg",
                    scale: "1.1",
                    transition: "0.35s",
                  },
                }}>
                <CardMedia
                  sx={{ height: 277 }}
                  // @ts-ignore
                  image={`${item.attributes.productImage.data[0].attributes.url}`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productTitle}

                    </Typography>
                    {item.attributes.productPrice}
                    <Typography variant="subtitle1" component="p">

                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {item.attributes.productDescription}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button onClick={handleClickOpen} sx={{ textTransform: "capitalize" }} size="small">
                    <AddShoppingCartOutlinedIcon fontSize="small" sx={{ mr: 2 }} />
                    Add to card
                  </Button>
                  <Rating name="disabled" value={item.attributes.productRating} />
                </CardActions>
              </Card>
            )
          })}

        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            right: 10,

          }} onClick={handleClose}>
            <Close />
          </IconButton>
          <ProductDetails />
        </Dialog>

      </Container>
    );
  }

}

export default Main;
