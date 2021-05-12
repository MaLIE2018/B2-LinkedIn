import React from "react";
import Box from "./parts/Box";
import LinkButton from "./parts/LinkButton";
const Activity = () => {
  return (
    <Box
      edit={false}
      subtitle={<LinkButton title={"296 followers"} />}
      title={"Activity"}
      footerText={"See all Activity"}
      render={(state) => <div>"Test"</div>}
    />
  );
};

export default Activity;
