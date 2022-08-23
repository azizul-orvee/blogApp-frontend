import { InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AddBlog = () => {
  return (
    <div>
      <form>
        <Box
          border={3}
          borderColor="black"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={5}
          margin={'auto'}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"80%"}
        >
          <Typography
            fontWeight={"boold"}
            padding={3}
            color="maroon"
            variant="h1"
            textAlign={"center"}
          >
            Post Your Blog
          </Typography>
          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField margin="auto" variant="outlined" />
          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField margin="auto" variant="outlined" />
          <InputLabel sx={labelStyles}>Image URL</InputLabel>
          <TextField margin="auto" variant="outlined" />
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;
