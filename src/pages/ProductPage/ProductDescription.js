import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AttachmentTypography from "../../components/attachmentTypography/AttachmentTypography";
import BuletedTypography from "../../components/BuletedTypography/BuletedTypography";
import PriceBreak from "../../components/priceBreaks/PriceBreak";
// import data from "../../resources/data/data.json";

const GridContainerWrapper = styled(Grid)({
  backgroundColor: "#EFEFEF",
});

const GridItemBackgroud = styled(Grid)({
  backgroundColor: "#EFEFEF",
});

const GridItemDetails = styled(Grid)((props) => ({
  backgroundColor: "#ffff",
  marginRight: props.marginRight,
  marginBottom: "2rem",
}));

const GridItemDescription = styled(Grid)({
  marginBottom: "2rem",
  marginTop: "2rem",
});

const GridItemPricingShipping = styled(Grid)({
  backgroundColor: "#ffff",
  marginBottom: "2rem",
});

const ContainerStyled = styled(Container)({
  padding: "1rem",
});
const DividerStyled = styled(Divider)({
  margin: "0.5rem 0",
});

const DividerHalf = styled(Divider)({
  margin: "5px 0",
  width: "50%",
});

const TypographyKeywords = styled(Typography)({
  marginBottom: "5px",
});
const TypographyDescription = styled(Typography)({
  padding: "0.5rem 0",
});
const TypographyCaption = styled(Typography)({
  color: "#ffff",
});

const ChipStyled = styled(Chip)({
  marginRight: "10px",
  backgroundColor: "#b8b7b6",
});

const ProductDescription = () => {
  const { product: data } = useSelector((state) => state.product);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down(900));
  return (
    <>
      {data && (
        <GridContainerWrapper container spacing={2}>
          <GridItemDescription item xl={8} lg={8}>
            <Container>
              <TypographyDescription variant="subtitle1" color="secondary">
                DESCRIPTION
              </TypographyDescription>
              <Typography variant="subtitle1">
                {data.article.description_long}
              </Typography>
            </Container>
          </GridItemDescription>
          <GridItemBackgroud item xs={12}>
            <Container>
              <Grid container>
                <GridItemDetails
                  item
                  xl={3}
                  lg={4}
                  md={5}
                  xs={12}
                  marginRight={match ? 0 : "2rem"}
                >
                  <ContainerStyled>
                    <Typography color="secondary" variant="subtitle2">
                      {" "}
                      DETAILS
                    </Typography>
                    <DividerStyled />
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
                    <TypographyKeywords variant="h6">
                      Keywords
                    </TypographyKeywords>
                    {data.article.keywords.map((keyword) => (
                      <ChipStyled
                        key={keyword}
                        size="small"
                        label={
                          <TypographyCaption variant="caption">
                            {keyword}
                          </TypographyCaption>
                        }
                      />
                    ))}
                  </ContainerStyled>
                </GridItemDetails>
                <GridItemPricingShipping item xl={3} lg={4} md={5} xs={12}>
                  <Container sx={{ padding: "1rem" }}>
                    <Typography color="secondary" variant="subtitle2">
                      {" "}
                      PRICING & SHIPING
                    </Typography>

                    <DividerStyled />
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
                    <DividerHalf />
                    <PriceBreak
                      discount={data.article.price_breaks[20]}
                      qty={20}
                      unit={data.article.unit}
                      currency={data.article.currency}
                      total={data.article.price}
                    />
                    <DividerHalf />
                    <PriceBreak
                      discount={data.article.price_breaks[50]}
                      qty={50}
                      unit={data.article.unit}
                      currency={data.article.currency}
                      total={data.article.price}
                    />
                    <DividerHalf />
                    <PriceBreak
                      discount={data.article.price_breaks[100]}
                      qty={100}
                      unit={data.article.unit}
                      currency={data.article.currency}
                      total={data.article.price}
                    />
                    <DividerHalf />
                  </Container>
                </GridItemPricingShipping>
              </Grid>
            </Container>
          </GridItemBackgroud>
        </GridContainerWrapper>
      )}
    </>
  );
};

export default ProductDescription;
