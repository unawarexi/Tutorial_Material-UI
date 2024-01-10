import React from "react";
import { Typography } from "@mui/material";

{
  /**======
   the typography to specify text
    the varaiant to specify text type
    the component to specify semantics
    the gutterbottom to give space ; the bigger the varaint the bigger gutterbottom */
}

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1"> h1 heading</Typography>
      <Typography variant="h2"> h2 heading</Typography>
      <Typography variant="h3"> h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        {" "}
        h4 heading
      </Typography>
      <Typography variant="h5"> h5 heading</Typography>
      <Typography variant="h6"> h6 heading</Typography>

      <Typography variant=" subtitle1"> sub title1</Typography>
      <Typography variant="subtitle2"> sub title2</Typography>

      <Typography variant="body1">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium
        accusamus debitis numquam, soluta quasi quaerat. Fuga quos, quasi
        perspiciatis reiciendis ipsum nesciunt sunt, repellat, dolorum rem nobis
        illo ab!
      </Typography>
      <Typography variant="body2">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo quod
        possimus voluptatem eius tenetur consequuntur earum dignissimos delectus
        libero quibusdam repellat officia exercitationem numquam, esse hic
        aperiam quo error?
      </Typography>
    </div>
  );
};

export default MuiTypography;
