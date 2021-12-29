import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "antd";

interface Props {
  animate: boolean;
}

export function Research(props: Partial<Props>): React.ReactElement {
  const navigator = useNavigate();
  return (
    <Button
      onClick={() => {
        navigator("research");
      }}
    >
      详情
    </Button>
  );
}
