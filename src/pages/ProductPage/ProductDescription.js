import { useTheme } from "@emotion/react";
import {
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import AttachmentTypography from "../../components/attachmentTypography/AttachmentTypography";
import BuletedTypography from "../../components/BuletedTypography/BuletedTypography";
import PriceBreak from "../../components/priceBreaks/PriceBreak";
import data from "../../resources/data/data.json";

const ProductDescription = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down(900));
  return (
    <Grid container sx={{ backgroundColor: "#EFEFEF" }} spacing={2}>
      <Grid item xl={8} lg={8} sx={{ marginBottom: "2rem", marginTop: "2rem" }}>
        <Container>
          <Typography
            variant="subtitle1"
            color="secondary"
            sx={{ padding: "0.5rem 0" }}
          >
            DESCRIPTION
          </Typography>
          <Typography variant="subtitle1">
            {data.article.description_long}
          </Typography>
        </Container>
      </Grid>
      <Grid item xs={12} sx={{ backgroundColor: "#EFEFEF" }}>
        <Container>
          <Grid container>
            <Grid
              item
              xl={3}
              lg={4}
              md={5}
              xs={12}
              sx={{
                backgroundColor: "#ffff",
                marginRight: match ? 0 : "2rem",
                marginBottom: "2rem",
              }}
            >
              <Container sx={{ padding: "1rem" }}>
                <Typography color="secondary" variant="subtitle2">
                  {" "}
                  DETAILS
                </Typography>
                <Divider sx={{ margin: "0.5rem 0" }} />
                <Typography variant="h6">Features</Typography>
                {Object.keys(data.article.features).map((el) => (
                  <BuletedTypography
                    key={el}
                    label={el}
                    value={data.article.features[el]}
                  />
                ))}
                <Typography variant="h6">Attachments</Typography>
                {data.article.attachments.map((el) => (
                  <AttachmentTypography
                    key={el.file_label}
                    label={el.file_label}
                  />
                ))}
                <Typography variant="h6" sx={{ marginBottom: "5px" }}>
                  Keywords
                </Typography>
                {data.article.keywords.map((keyword) => (
                  <Chip
                    sx={{ marginRight: "10px", backgroundColor: "#b8b7b6" }}
                    key={keyword}
                    size="small"
                    label={
                      <Typography variant="caption" sx={{ color: "#ffff" }}>
                        {keyword}
                      </Typography>
                    }
                  />
                ))}
              </Container>
            </Grid>
            <Grid
              item
              xl={3}
              lg={4}
              md={5}
              xs={12}
              sx={{ backgroundColor: "#ffff", marginBottom: "2rem" }}
            >
              <Container sx={{ height: "300px", padding: "1rem" }}>
                <Typography color="secondary" variant="subtitle2">
                  {" "}
                  PRICING & SHIPING
                </Typography>

                <Divider sx={{ margin: "0.5rem 0" }} />
                <BuletedTypography
                  label={"Minimum order"}
                  value={`${data.article.minimum_order_quantity} ${data.article.unit}`}
                />

                <BuletedTypography
                  label={"Shipping"}
                  value={`${data.article.transport_costs} ${data.article.currency}`}
                />
                <BuletedTypography
                  label={"Dalivery"}
                  value={`${data.article.delivery_time} days`}
                />
                <Typography
                  variant="h6"
                  sx={{ marginBottom: "5px", marginTop: "7px" }}
                >
                  Price Breaks
                </Typography>
                <Divider sx={{ margin: "5px 0", width: "50%" }} />
                <PriceBreak
                  discount={data.article.price_breaks[20]}
                  qty={20}
                  unit={data.article.unit}
                  currency={data.article.currency}
                  total={data.article.price}
                />
                <Divider sx={{ margin: "0.5rem 0", width: "50%" }} />
                <PriceBreak
                  discount={data.article.price_breaks[50]}
                  qty={50}
                  unit={data.article.unit}
                  currency={data.article.currency}
                  total={data.article.price}
                />
                <Divider sx={{ margin: "0.5rem 0", width: "50%" }} />
                <PriceBreak
                  discount={data.article.price_breaks[100]}
                  qty={100}
                  unit={data.article.unit}
                  currency={data.article.currency}
                  total={data.article.price}
                />
                <Divider sx={{ margin: "0.5rem 0", width: "50%" }} />
              </Container>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default ProductDescription;
