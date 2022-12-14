import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Icon, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Blog = ({ blog, isUser }) => {
  const { title, description, image } = blog;
  const user = blog?.user?.name || "You";
  console.log(title, isUser)
  return (
    <Card
      sx={{
        width: "40%",
        margin: "auto",
        mt: 2,
        padding: 2,
        boxShadow: "5px 5px 10px #ccc",
        ":hover:": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    > {isUser && (
      <Box display='flex'>
        <IconButton sx={{marginLeft:'auto'}}><DeleteIcon /></IconButton>
        <IconButton><EditIcon /></IconButton>
      </Box>
    )}
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Button size="small" color="primary">
        Author: {user}
      </Button>
    </Card>
  );
};

export default Blog;
