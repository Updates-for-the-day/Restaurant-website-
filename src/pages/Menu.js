import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MenuList } from "../data/data.js";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 3,
          p: 3,
        }}
      >
        {MenuList.map((menu) => {
          // use safe description key (fall back if property name differs)
          const description = menu.Description ?? menu.description ?? "";

          return (
            <Card
              key={menu.id ?? menu.name} // prefer an id if available
              sx={{
                // responsive minHeight so cards remain even across breakpoints
                minHeight: { xs: 420, sm: 480, md: 520 },
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <CardActionArea
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                }}
              >
                <CardMedia
                  component="img"
                  image={menu.image}
                  alt={menu.name}
                  sx={{
                    // responsive image heights
                    height: { xs: 180, sm: 220, md: 260 },
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                    pb: 2,
                  }}
                >
                  <Box>
                    <Typography variant="h5" gutterBottom>
                      {menu.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.5,
                        maxHeight: "3.3em",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        mb: 1,
                        textAlign: "justify",
                      }}
                    >
                      {description}
                    </Typography>
                  </Box>

                  <Typography variant="body1" fontWeight="bold">
                    Price : ₹{menu.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </Layout>
  );
};

export default Menu;
