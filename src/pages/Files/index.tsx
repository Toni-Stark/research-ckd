import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface Props {
  animate: boolean;
}

export function Files(props: Partial<Props>): React.ReactElement {
  return <div>文件</div>;
}
