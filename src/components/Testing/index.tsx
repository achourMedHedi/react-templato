/**
 *
 * Testing
 *
 */

import { Button } from "@mui/material";
import { FC, memo } from "react";

const Testing: FC<{
  title: string;
  type?: "prim" | "second";
  isActibe?: boolean;
}> = ({ title }) => {
  return (
    <div test-id="hello" className="">
      hello {title}
      <Button variant="contained">hello</Button>
    </div>
  )
};

export default memo(Testing);
