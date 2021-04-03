import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { CardHeader, CardMedia, IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

export default function Cards() {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={"/images/2.jpg"} />}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title="عنوان این محصول"
        subheader="10 روز پیش"
      />
      <CardMedia style={{ height: "150px" }} image={"/images/coffe2.jpg"} />
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          جمله امروز
        </Typography>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small">مطالعه بیشتر</Button>
        <Button size="small">خرید</Button>
      </CardActions>
    </Card>
  );
}
