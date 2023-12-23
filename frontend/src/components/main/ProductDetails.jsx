import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";


const ProductDetails = () => {
  return (
    <Box sx={{ display: "flex", gap: 2.5, flexDirection: {xs: "column", sm: "row"}}}>

      <Box display={"flex"} >
        <img src="/src/images/1.jpg" height={"400px"} width={"300px"} alt="" />
      </Box>
      

      <Box sx={{ textAlign: {xs: "center", sm: "left"} }}>

        <Typography variant="h5">
          WOMEN'S FASHON
        </Typography>

        <Typography my={0.4} fontSize={"22px"} color={"crimson"}>
          $12.99
        </Typography>
        <Typography variant="body1">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>



        <Stack direction={"row"} gap={1} my={2} justifyContent={{xs: "center", sm: "left"}}>
         { ["src/images/3.jpg", "src/images/4.webp", "src/images/5.webp"].map((item) => {
          return(
            <img style={{borderRadius: 3}} key={item} src={item} alt="" width={90} />
          )
         })}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>

      </Box>

    </Box>
  );
}

export default ProductDetails;
